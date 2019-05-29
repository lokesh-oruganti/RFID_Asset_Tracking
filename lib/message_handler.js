var dbm_sqlite = require('./storage_handler.js');
var dbms = new dbm_sqlite();
var logger = require('./Log_handler');
const mqtt = require('mqtt');
var mqttHandler = require('./mqtt_handler');
var mqttc = new mqttHandler();

class message_handler{
    sendmessage(message,topic) {
         // this.mqttClient.publish(topic,credentials);
          //logger.info("Configuration sent:"+credentials);
        mqttc.sendMessage(message,topic);
    }
 }
 module.exports = message_handler;