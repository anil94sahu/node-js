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

/* const server = http.createServer((req,res) => {
    const name = "Anil"
    res.writeHead(200, {"Content-Type": "text/html"});
    let html = fs.readFileSync('./index.html', "utf-8");
    html = html.replace("{{name}}", name)
    // fs.createReadStream(__dirname + '/index.html').pipe(res);
    res.end(html)
}) */


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Home page ")
    } else if(req.url === '/about'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("About page")   
    }
    else if(req.url === '/api'){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
            firstName: "Bruce",
            lastName: "Laynce"
        }))   
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 page")
    }
})

server.listen(3000, () => console.log('server listen in 3000'))
