require('dotenv').config()


const connectDb = require('./db.js')
connectDb()
const http = require('http')


const server = http.createServer((req,res) => {
    
    res.end("helll user")

    
})

server.listen(3000);
console.log('server')


