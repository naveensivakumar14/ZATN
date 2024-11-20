
const http= require('http')
const fs=require("fs")
const URL=require('url')


const server=http.createServer((req,res)=>{

    if(req.url=='/favicon.ico') return ;
    const myURL = URL.parse(req.url,true)
    console.log(myURL)

    //getting name, age
    const name = myURL.query.name || null
    const age = myURL.query.age || null
    //getting values
    const val1=parseInt(myURL.query.val1) || 0
    const val2=parseInt(myURL.query.val2) || 0

    const path = myURL.pathname

     const data = `${Date.now()} : request by ${name}\n of ${age} getting value-1 ${val1} value-2 ${val2}`

    fs.appendFile('calcData.txt',data,(err)=>{

        if(err){
            console.log(err)
        }

        switch(path){
            case '/add':
                var result = val1 + val2
                res.end(`${result}`)
                break
            case '/sub':
                var result = val1 - val2
                res.end(`${result}`)
                break
            case '/mul':
                var result = val1 * val2
                res.end(`${result}`)
                break
            case '/div':
                var result = val1 / val2
                res.end(`${result}`)
                break
            default:
                res.end("give me the correct values")
        }
        

    })


})

server.listen(4001,()=>{
    console.log("server is listening at 4001")
})