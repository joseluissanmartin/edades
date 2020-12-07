//Servidor HTTP envio parametros por url

let http = require('http');
let net = require('net');
let url = require('url');
let fs = require('fs');
let dgram = require('dgram');
let s = dgram.createSocket("udp4");

//servidor HTTP

let server = http.createServer(function (req, res) {
    let objetourl = url.parse(req.url);
    dato = objetourl.query;
    if (dato != null) {
        dato = dato.split("=");
        if (dato[1] == 0) {
            console.log("boca");
            let dato1 = "boca";
            dato2 = String(dato1);
            s.send(dato2, 2000, "localhost");// cliente UDP
        }
        if (dato[1] == 1) {
            console.log("corazon");
            let dato1 = "corazon";
            dato2 = String(dato1);
            s.send(dato2, 2000, "localhost");// cliente UDP
        }
        if (dato[1] == 2) {
            console.log("estomago");
            let dato1 = "estomago";
            dato2 = String(dato1);
            s.send(dato2, 2000, "localhost");// cliente UDP
        }
        if (dato[1] == 3) {
            console.log("oido");
            let dato1 = "oido";
            dato2 = String(dato1);
            s.send(dato2, 2000, "localhost");// cliente UDP
        }
        if (dato[1] == 4) {
            console.log("pulmon");
            let dato1 = "pulmon";
            dato2 = String(dato1);
            s.send(dato2, 2000, "localhost");// cliente UDP
        }

    }
    fs.readFile('./etapas-de-la-vida/indexget.html', function (error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data, 'utf-8');

    });


}).listen(100);
let io = require('socket.io')(server);
console.log('servidor funcionando');

let e = new net.Socket();
e.connect(5000, 'localhost');

//recibo dato desde servidor
e.on('data', function (data) {
    data = data.toString();
    console.log(data);
    io.emit('lectura', data);
    var data = '' + data + '\r\n';

    fs.appendFile('edades.txt', data, function (err) {
        if (err) throw err;
    });
});