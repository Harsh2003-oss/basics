
const http = require('http');

const fs = require('fs')

let shopData = [];

fs.readFile('./data.json','Utf8',(err,data)=>{
    if(err){
        console.log('error reading file')
    }
    else{
        shopData = JSON.parse(data);
        console.log("data loaded",shopData)
    }
})

function runMiddlewares(req,res,middlewares){
    let index = 0;

    function next(){
        if(index>=middlewares.length){
            res.end('continue shopping')
            return;
        }

        const current =   middlewares[index];
        index++;
        current(req,res,next)
    }
    next();
}

function logger(req,res,next){
    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleTimeString()} `
    )
next();
}

function shop(req,res,next){
  console.log('welcome to shop')
  console.log('items available',shopData)
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

function home(req,res){
    res.end('welcome home')
}


function shop(req,res){
    res.end('welcome to shop')
}

function admin(req,res){
    res.end('welcome admin')
}

const server = http.createServer((req,res) =>{

logger(req,res,() =>{
    //home
    if(req.url ==='/'){
        home(req,res)
    }

    //shop
    else if(req.url === '/shop'){
        shop(req,res);
    }

    //admin
    else if(req.url === '/admin'){
        guard(req,res,()=>{
            admin(req,res);
        })

        
    }

    // 404
    else {
      res.statusCode = 404;
      res.end('Page not found');
    }
})

})

server.listen(3000);
console.log('server running')