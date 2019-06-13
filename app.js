"use strict";
// var admin = require("firebase-admin");
// var serviceAccount = require("./rfid_asset.json")
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "your database url here"
// });
// var SerialPort		= require('serialport');
// var readerStatus	= {status:404,message:'not connected'};
//var client = mqtt.connect("mqtt://192.168.0.78",{clientId:"mqttjs01"})
// var myPort			= {};
var logger = require('./lib/Log_handler');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var connection_string = require('./lib/connection_string_helper');
var connectionString = 'HostName=http://192.168.0.78:5123/;DeviceId=5cc9515588d93a4f845a9e28;SharedAccessKey=undefined';
var credentials=connection_string.ConnectionString.parse(connectionString);
var message = require('./lib/message_contract');
var message_contract = message.Message();
var db_sqlite = require('./lib/storage_handler.js');
var dbs = new db_sqlite();
var twin = require('./lib/twin_properties_handler');
var twinprop = new twin();
console.log(credentials);
var mqttHandler = require('./lib/mqtt_handler');
var targetTemperature = 0;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
var mqttClient = new mqttHandler();
logger.info('Connection initalization');
mqttClient.connect(credentials);
dbs.create();
twinprop.create();
var date = Date.now()
// var ref = admin.app().database().ref();
// var dataref = ref.child('Telemetry Data')
// var dateref =ref.child('TimeStramp')
// Routes
app.post("/send-mqtt", function(req, res) {
  mqttClient.sendMessage(req.body.message);
  res.status(200).send("Message sent to mqtt");
});
//setInterval(sendTelemetry, 1000);
//setInterval(retry, 1000);

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
    overheat: (temperature > 35) ? "ER123" : undefined});
  var JSONMessage = new message_contract(data,"telemetry",credentials.DeviceId,date)
  //dbs.insert(JSONMessage);
 mqttClient.sendMessage(JSON.stringify(JSONMessage),JSONMessage.topic,JSONMessage.date);
//  dataref.push(JSONMessage);
//  dateref.push(date);
 
}
function handleSettings(twin) {
  console.log(twin);
  twin.connect('properties.desired', function (desiredChange) {
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
function rfid(){
// var sys = require('sys')
//   , ids = new(Array)()

// require('fs').createReadStream("/dev/hidraw0", {bufferSize: 1})
//   .on('open', function(fd){ sys.puts("Begin scanning tags!") })
//   .on('end',  function(fd){ fd.close() })
//   .on('data', function(chunk){ chunk = chunk.toString('ascii').match(/\w*/)[0]
//          if (chunk.length) { ids.length ? ids[ids.length - 1] += chunk : ids[ids.length - 1] = chunk }
//     else if (ids[ids.length - 1] && ids[ids.length - 1].length) {
//               sys.puts(ids[ids.length - 1]); ids.push(new(String)()) }
//   })
  var sys = require('sys');
var ids = [];

require('fs').createReadStream("/dev/cu.usbserial-A600exqM", {bufferSize: 1})

.on('open', function(fd){
  sys.puts("Begin scanning tags!");
})

.on('end', function(fd){
  fd.close();
})

.on('data', function(chunk){
  chunk = chunk.toString('ascii').match(/\w*/)[0]

  if (chunk.length !== 0) {
    if (ids.length !== 0) { ids[ids.length - 1] += chunk }
    else { ids[ids.length - 1] = chunk };
  } else if (typeof(ids[ids.length - 1]) !== 'undefined' && ids[ids.length - 1].length !== 0) {
    sys.puts(ids[ids.length - 1]);
    ids.push('');
  }
});
}
function retry(){
  if (mqttClient.connected == true){
    var unackmsg = dbs.retrive();
 
    for(var i=0;i<unackmsg;i++){
      mqttClient.sendMessage(JSON.stringify(JSONMessage),JSONMessage.topic);
      console.log(unackmsg);
    }
     }
}
rfid();
var server = app.listen(5142, function () {
    console.log("app running on port.", server.address().port);
});
