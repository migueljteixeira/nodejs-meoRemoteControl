var net = require('net');
var socket = net.Socket();
var readline = require('readline');

var host = '192.168.1.100';
var port = 8082;
var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

// Test if host is an IP address
if(net.isIP(host) == 0 ? console.log('Invalid IP Address.') : '');

// Prompt user for character key
function promptForCharacterKey(callback){
	rl.question("> Insert Character Key: ", function (answer) {
		callback(answer);
	});
}

socket.connect(port, host, function (){

	promptForCharacterKey(function (characterKey){

		// Sends data on the socket.
		socket.write('key=' + characterKey + '\n');

		socket.on('data', function (data){
			process.exit(0);
		});

		socket.on('error', function (error){
		  console.log('Error: ' + error);
		});

		socket.end();
	});

});