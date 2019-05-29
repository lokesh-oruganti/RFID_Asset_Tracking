"use strict";

// Use the Azure IoT device SDK for devices that connect to Azure IoT Central.
var clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
var Message = require('azure-iot-device').Message;
var ConnectionString = require('azure-iot-device').ConnectionString;
var connectionString = '{your device connection string}';
var targetTemperature = 0;
var client = clientFromConnectionString(connectionString);
function sendTelemetry() {
  var temperature = targetTemperature + (Math.random() * 15);
  var humidity = 70 + (Math.random() * 10);
  var pressure = 90 + (Math.random() * 5);
  var fanmode = 0;
  var data = JSON.stringify({
    temperature: temperature,
    humidity: humidity,
    pressure: pressure,
    fanmode: (temperature > 25) ? "1" : "0",
    overheat: (temperature > 35) ? "ER123" : undefined });
  var message = new Message(data);
  client.sendEvent(message, (err, res) => console.log(`Sent message: ${message.getData()}` +
    (err ? `; error: ${err.toString()}` : '') +
    (res ? `; status: ${res.constructor.name}` : '')));
}
function sendDeviceProperties(twin, properties) {
  twin.properties.reported.update(properties, (err) => console.log(`Sent device properties: ${JSON.stringify(properties)}; ` +
    (err ? `error: ${err.toString()}` : `status: success`)));
}
var settings = {
  'fanSpeed': (newValue, callback) => {
      // Simulate it taking 1 second to set the fan speed.
      setTimeout(() => {
        callback(newValue, 'completed');
      }, 1000);
  },
  'setTemperature': (newValue, callback) => {
    // Simulate the temperature setting taking two steps.
    setTimeout(() => {
      targetTemperature = targetTemperature + (newValue - targetTemperature) / 2;
      callback(targetTemperature, 'pending');
      setTimeout(() => {
        targetTemperature = newValue;
        callback(targetTemperature, 'completed');
      }, 5000);
    }, 5000);
  }
};
function handleSettings(twin) {
  twin.on('properties.desired', function (desiredChange) {
    for (let setting in desiredChange) {
      if (settings[setting]) {
        console.log(`Received setting: ${setting}: ${desiredChange[setting].value}`);
        settings[setting](desiredChange[setting].value, (newValue, status, message) => {
          var patch = {
            [setting]: {
              value: newValue,
              status: status,
              desiredVersion: desiredChange.$version,
              message: message
            }
          }
          twin.properties.reported.update(patch, (err) => console.log(`Sent setting update for ${setting}; ` +
            (err ? `error: ${err.toString()}` : `status: success`)));
        });
      }
    }
  });
}
// Handle device connection to Azure IoT Central.
var connectCallback = (err) => {
  if (err) {
    console.log(`Device could not connect to Azure IoT Central: ${err.toString()}`);
  } else {
    console.log('Device successfully connected to Azure IoT Central');

    // Create handler for countdown command
    client.onDeviceMethod('countdown', onCountdown);

    // Send telemetry measurements to Azure IoT Central every 1 second.
    setInterval(sendTelemetry, 1000);

    // Get device twin from Azure IoT Central.
    client.getTwin((err, twin) => {
      if (err) {
        console.log(`Error getting device twin: ${err.toString()}`);
      } else {
        // Send device properties once on device start up.
        var properties = {
          serialNumber: '123-ABC',
          manufacturer: 'Contoso'
        };
        sendDeviceProperties(twin, properties);

        // Apply device settings and handle changes to device settings.
        handleSettings(twin);
      }
    });
  }
};

// Start the device (connect it to Azure IoT Central).
client.open(connectCallback);