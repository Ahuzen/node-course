const http = require('http');


const server = http.createServer((request, response) => {

    console.log(request.url);

    if (request.url === '/') {
        response.write('Welcome to the server')
        return response.end()
    }

    if (request.url === '/about') {
        response.write('Acerca de')
        return response.end()
    }

    response.write(`
        <h1>Page not found</h1>
        <p>Pagina no encontrada</p>
        <a href='/'>Home</a>
    `)
    response.end()
})

server.listen(3000)

console.log('Servidor escuchando en el puerto 3000');