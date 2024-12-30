const http = require('http')
const fs =  require('fs')
const server = http.createServer((req,res)=>{
    if(req.url=='/favicon.ico') return ;
    const data = `${Date.now()} : request made to ${req.url}\n`
    fs.appendFile('data.txt',data,(err)=>{
        if(err){
            console.log(err)
        }
        switch(req.url){
            case '/':
                res.end("Hi welcome to the page")
                break;
            case '/about':
                res.end("We are Zatn")
                break;
            default:
                res.end("you are not in the wesbite")
                break;
        }
    })  
})
server.listen(4000,()=>{
    console.log("server is listening")
})
//6 url















