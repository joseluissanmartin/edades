//Servidor TCP basico

let net = require('net');

let server = net.createServer(function (socket) {
    function generateAge() {
        let data = Math.random() * 100;
        data = data.toFixed(0); //redondea
        console.log('LA EDAD GENERADA ES :', data);
        socket.write(data.toString());
        setTimeout(generateAge, 5000); // tiempo en generar
        return data;
    }

    generateAge();
});
server.listen(5000, 'localhost');