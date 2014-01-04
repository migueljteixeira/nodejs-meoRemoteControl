var net = require('net')
  , socket = net.Socket();

var host = '192.168.1.100'
  , port = 8082
  , characterKey = 13;

// Tests if input is an IP address
if(net.isIP(host) == 0 ? console.log('Invalid IP Address.') : '');

socket.connect(port, host);

// Sends data on the socket.
socket.write('key=' + characterKey + '\n', function(sent){
  console.log('-> Data "key=' + characterKey + '" was sent!');
});

// Emitted when data is received
socket.on('data', function(data){
  console.log('-> Data received: ' + data.toString());
});

// Emitted when an error occurs
socket.on('error', function(data){
  console.log(data);
});

socket.end();