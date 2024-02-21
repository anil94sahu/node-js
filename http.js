// Hyper text  transfer protocl
// Help in client and server communication
// We can't send object drectly, so convert our data into json stringify

const http = require('node:http');
const fs = require('node:fs');

/* const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('end on content')
}) */



const obj = {
    firstName: 'Anil',
    lastName: 'sahu'
}

/* const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(obj))
}) */

const server = http.createServer((req,res) => {
    const name = "Anil"
    res.writeHead(200, {"Content-Type": "text/html"});
    let html = fs.readFileSync('./index.html', "utf-8");
    html = html.replace("{{name}}", name)
    // fs.createReadStream(__dirname + '/index.html').pipe(res);
    res.end(html)
})

server.listen(3000, () => console.log('server listen in 3000'))
