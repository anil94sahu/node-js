// Hyper text  transfer protocl
// Help in client and server communication
// We can't send object drectly, so convert our data into json stringify

const http = require('node:http');

/* const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('end on content')
}) */

const obj = {
    firstName: 'Anil',
    lastName: 'sahu'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(obj))
})

server.listen(3000, () => console.log('server listen in 3000'))
