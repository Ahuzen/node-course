
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Welcome to the server')
        return res.end()
    }

    if (req.url === '/about') {

        //blocking code
        /* for (let index = 0; index < 10000; index++) {
            console.log(Math.random() * index);
        } */

        return res.end('About page')
    }

    return res.end('Not found')

})

server.listen(3000)

console.log('Servidor escuchando en el puerto 3000');