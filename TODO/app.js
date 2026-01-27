require('dotenv').config()
const http = require('http')


const connectDb = require('./db.js')
connectDb()

const {createTodo,updateTodo,deleteTodo} = require('./Controllers/dashboard.js')

const server = http.createServer((req,res)=>{
    

if(req.url === '/todos' && req.method==='POST'){
  createTodo(req,res);
}
else if(req.url.startsWith('/todos/') && req.method === 'PUT'){
    const id = req.url.split('/')[2];
   updateTodo(req,res,id);
}


else if(req.url.startsWith('/todos/') && req.method === 'DELETE'){
    const id = req.url.split('/')[2]
  deleteTodo(req,res,id)
}

else{
    res.statusCode = 404;
    res.end('Not found')
}
})

server.listen(3000)
console.log('running')


