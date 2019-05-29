const mqtt = require('mqtt');
//var retry = require('./retry_operation')
var logger = require('./Log_handler');
var db_sqlite = require('./storage_handler.js');
var dbms = new db_sqlite();


class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = '';
    this.username = ''; // mqtt credentials if these are needed to connect
    this.password = '';
    this.connected =false; 
  }
  connect(credentials) {
    logger.info(credentials);
    this.host = credentials.HostName;
    this.username =  credentials.DeviceId;
    this.password = credentials.DeviceId;
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    var options = {
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: false,
      clientId: credentials.DeviceId,
      rejectUnauthorized: true,
      username: this.username,
      password: this.password,
      reconnectPeriod: 1000,
      keepalive: 60,
      reschedulePings: false
  };
  this.mqttClient = mqtt.connect(this.host, options );
    // Connection callback
    this.mqttClient.on('connect', (connack) => {
      this.connected=true;
      logger.info('Connected:True');

    });
    this.mqttClient.on('offline', () => {
      this.connected=false;
      this.mqttClient.reconnect();
      logger.error('Client is Offline  Retry intiated');

    });  
    var Propertiestopic = "Properties/"+this.username;
    var Methodstopic = "Methods/"+this.password;

      // mqtt subscriptions
    this.mqttClient.subscribe(Methodstopic);
    this.mqttClient.subscribe(Propertiestopic);
    //this.mqttClient.subscribe('ack');
    
    this.mqttClient.on('message', function(topic, message, packet) {
      if (topic === Methodstopic) {
        console.log("----");
        console.log(message.toString());
      }
      if (topic === Propertiestopic) {
        console.log("----");
        console.log(message.toString());
      }
      // if (topic === 'ack') {
      //   var msg = message.toString('utf8');
      //   console.log("Message here:"+ msg);
      //   dbms.delete(JSON.parse(msg).messageId);
      //  }
     });
    // When a message arrives, console.log it
    this.mqttClient.on('close', () => {
      this.mqttClient.reconnect();
      this.connected = false;
      logger.info("Client disconnected Retry initated");
    });
    this.mqttClient.on('error', (err) => {
      this.mqttClient.emit();
      this.connected = false;
      logger.error("Error occured");
    });
  }
// Mqtt error calback
//  Sends a mqtt message to topic: mytopic
  sendMessage(message,topic) {
    this.mqttClient.publish(topic, message);
    logger.info("Message sent on topic :"+ topic);
  }
 }

module.exports = MqttHandler;