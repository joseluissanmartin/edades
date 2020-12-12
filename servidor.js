//Servidor HTTP envio parametros por url

let http = require('http');
let net = require('net');
let url = require('url');
let fs = require('fs');
let dgram = require('dgram');
let s = dgram.createSocket("udp4");

//servidor HTTP

function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;

    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            res.writeHead(500, { 'Content-Type' : 'text/plain' });
            res.end('500 - Internal Error');
        } 
        else {
            res.writeHead( responseCode, { 'Content-Type' : contentType });
            res.end(data);
        }
    });
}

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

    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            serveStaticFile(res, '/etapas-de-la-vida/indexget.html', 'text/html');
            break;
        case '/pre-natal.png':
            serveStaticFile(res, '/etapas-de-la-vida/pre-natal.png', 'image/png');
            break;
        case '/infancia.png':
            serveStaticFile(res, '/etapas-de-la-vida/infancia.png', 'image/png');
            break;
        case '/ninez.png':
            serveStaticFile(res, '/etapas-de-la-vida/ninez.png', 'image/png');
            break;
        case '/adolecencia.png':
            serveStaticFile(res, '/etapas-de-la-vida/adolecencia.png', 'image/png');
            break;
        case '/juventud.png':
            serveStaticFile(res, '/etapas-de-la-vida/juventud.png', 'image/png');
            break;
        case '/adultez.png':
            serveStaticFile(res, '/etapas-de-la-vida/adultez.png', 'image/png');
            break;
        case '/ancienidad.png':
            serveStaticFile(res, '/etapas-de-la-vida/ancienidad.png', 'image/png');
            break;
        default:
            serveStaticFile(res, '/etapas-de-la-vida/indexget.html', 'text/html', 404);
            break;
    }
}).listen(3000);
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