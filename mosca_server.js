var mosca = require('mosca');

var ascoltatore = {
  //using ascoltatore
  type: 'sqlite',
  url: 'sqlite://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  sqlite: {}
};

var settings = {
  port: 5123,
  bundle: true,
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
    server.subscribe("telemetry",messagerecived);
});

// fired when a message is received
server.on('published', function(packet, client) {
 // console.log('Published', packet.payload);
  
});
function messagerecived(args,message){
    console.log('Published', message);   
       
        var json = message.toString('utf8');
        console.log(json);
        var messages={};
        messages.type="ack";
        messages.id=json.messageId;
        let bufferOriginal = Buffer.from(message);
        console.log(bufferOriginal);
        server.publish({
            topic: "ack",
            payload: bufferOriginal,
            qos: 1 // this is important for offline messaging
          }, null, function done() {})
}
server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}