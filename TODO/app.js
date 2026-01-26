const http = require('http')


const server = http.createServer((req,res) => {
    res.end("Hello user")
})

server.listen(3000);
console.log('server')


