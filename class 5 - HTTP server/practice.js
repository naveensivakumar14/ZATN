

const http = require('http')
const fs =  require('fs')


const server = http.createServer((req,res)=>{
    if(req.url=='/favicon.ico') return ;

    const data = `${Date.now()} : request made to ${req.url}\n`

    fs.appendFile('myPage.txt',data,(err)=>{
        if(err){
            console.log(err)
        }
        switch(req.url){
            case '/':
                res.end("Hi Welcome to my Portfolio Naveenkumar")
                break;
            case '/home':
                res.end("Welcome to Home page")
                break;

            case '/about':
                res.end("I am a Backend developer")
                break;
            
            case '/skills':
                res.end("MERN STACK DEVELOPER")
                break;
            
            case '/project':
                res.end("Weather APP")
                break;
            
            case '/contact':
                res.end("naveen123@gmail.com")
                break;
            
            default:
                res.end("you are not in the wesbite")
                break;
        }
    })  
})
server.listen(3005,()=>{
    console.log("server is listening on 3005")
})
















