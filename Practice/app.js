
const http = require('http');

function shop(req,res,next){
  console.log('welcome to shop')
  next();
}

function guard(req,res,next){
  console.log('Hello sir')

  const secretWord = req.headers['secret']
if(secretWord === '123'){
  console.log('welcome to shop')
  next();
}
else{
  console.log('please retry || not permitted to enter')
  res.end("access denied")
}
}

const server = http.createServer((req,res) =>{

guard (req,res,()=>{
    shop(req,res,()=>{
      res.end('continue shopping')
    })
  })

})

server.listen(3000);
console.log('server running')