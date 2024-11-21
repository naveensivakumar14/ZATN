const express = require('express')
const fs = require('fs')
const app = express()
const PORT =5000

app.get('/add/:val1/:val2',(req,res)=>{
    const{val1,val2} = req.params
    if(val1 ==undefined || val2==undefined){
        res.status(400).json({error: "Kindly all the all the values"})
    }
    const result = parseInt(val1) + parseInt(val2)

    const history = `Operation : add, values : ${val1}, ${val2}, Result : ${result}\n`
    fs.appendFile('./history.txt',history,(err)=>{
        if(err){
            console.log(err)
            return res.status(500).json({error : 'Something went apologies'})
        }
    })
    res.status(201).json({result : result})
})

app.listen(PORT,()=>{
    console.log("Server is listening")
})


//sub
//mul
//div - (val2 ==0  msg: it is invalid operation)



// /add/:val1/:val2/:name    name.txt







