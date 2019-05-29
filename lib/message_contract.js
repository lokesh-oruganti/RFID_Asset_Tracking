'use strict';
const uuid = require('uuid');

var Message = function () {
    function Message(data,topic,DeviceId) 
    {
    this.data = data;
    this.messageId = uuid();
    this.DeviceId = DeviceId; 
    this.topic  = topic;  
    }
    Message.prototype.getData = function () {
      return this.data;
    };
    return Message;
}
exports.Message = Message;