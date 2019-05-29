'use strict'
var sqlite3 = require('sqlite3').verbose();
var message = require('./message_contract');
var db = new sqlite3.Database('database.db');
var twin = [{
    "deviceId": "5cc9515588d93a4f845a9e28",
    "statusUpdateTime": "",
    "connectionState": "connected",
    "lastActivityTime": "",
    "cloudToDeviceMessageCount": 0,
    "properties": {
      "desired": {
        "telemetryConfig": {
          "temperature": 54,
          "fanmode": true,
          "humidity": 39
        },
        "$metadata": {},
        "$version": 1
      },
      "reported": {
        "telemetryConfig": {
          "status": "success"
        },
        "batteryLevel": 55,
        "$metadata": {},
        "$version": 4
      
      }
    }
  }]
  var date = new Date();
  var current_hour = date.getHours();
    // statusUpdateTime=date;
    //connectionState="connected";
    //lastActivityTime=current_hour;
    for (var i = 0; i < twin.length; i++) {
      if (twin[i].cloudToDeviceMessageCount == 0) {
        twin[i].cloudToDeviceMessageCount = i;
        break;
      }
    }
    console.log(twin);
class twinDevice{
    create() {
        db.serialize(function () {
          db.run("CREATE TABLE if not exists DeviceConfig (id INTEGER PRIMARY KEY,key TEXT UNIQUE,value TEXT)", function (err, row) {
            console.log('Database created for Twin device');
          });
        });  
        this.insert_twin();
      }
    retrive_twin() {
        db.serialize(function () {
          db.all("SELECT * FROM DeviceConfig WHERE key ='device_twin'", function (err, rows) {
            if (rows.length==0){
              return null;          
            }
            else{
            console.log(JSON.parse(rows[0].value));
            var data=JSON.parse(rows[0].value)
            return data;
            }
          });
        });
      }
      insert_twin() {
        var twindata = this.retrive_twin();
        console.log("twindata:" + twindata);
      if(twindata!=undefined){
        db.serialize(function () {
          db.run("INSERT into DeviceConfig (key,value) VALUES (?,?)", ["device_twin", JSON.stringify(twin)], function (err) {
            if (err) {
              return console.log(err.message);
            }
            // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}`);
          });
        });
      }
    }
}
console.log(twin);
module.exports= twinDevice;