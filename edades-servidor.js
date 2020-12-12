//Servidor que recibe edades TCP

let net = require('net');
let socket = new net.Socket();
socket.connect(5000, 'localhost');

socket.on('data', function(data) {
    data = data.toString()
    console.log('LA EDAD ENVIADA ES : ', data);
});