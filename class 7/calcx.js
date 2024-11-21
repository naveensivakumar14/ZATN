const express = require('express')
const fs = require('fs')
const app = express()

const PORT=3000

//add route
app.get('/add/:val1/:val2',(req,res)=>{
    var {val1,val2} = req.params
    if(val1 ==undefined || val2==undefined){
        res.status(400).json({error: "Kindly all the all the values"})
    }

    //add
    var  result = parseInt(val1) + parseInt(val2)

    var history = `Operation : add, values : ${val1}, ${val2}, Result : ${result}\n`
    fs.appendFile('./history.txt',history,(err)=>{
        if(err){
            console.log(err)
            return res.status(500).json({error : 'Something went apologies'})
        }
    })
    res.status(201).json({result : result})
})


//sub route
app.get('/sub/:val1/:val2',(req,res)=>{
    var {val1,val2}=req.params
    if(val1 ==undefined || val2==undefined){
        res.status(400).json({error: "Kindly all the all the values"})
    }

    //sub
    var result = parseInt(val1) - parseInt(val2)

    var history=`Operation : sub, values : ${val1}, ${val2}, Result: ${result}\n`

    fs.appendFile('./history.txt',history,(err)=>{
        if(err){
            console.log(err)
            return  res.status(500).json({error : 'Something went apologies'})
        }
    })
    res.status(201).json({result : result})

})

//mul route
app.get('/mul/:val1/:val2',(req,res)=>{
    var {val1,val2}=req.params
    if(val1 ==undefined || val2==undefined){
        res.status(400).json({error: "Kindly all the all the values"})
    }

    //sub
    var result = parseInt(val1) * parseInt(val2)

    var history=`Operation : sub, values : ${val1}, ${val2}, Result: ${result}\n`

    fs.appendFile('./history.txt',history,(err)=>{
        if(err){
            console.log(err)
            return  res.status(500).json({error : 'Something went apologies'})
        }
    })
    res.status(201).json({result : result})

})

//div route
app.get('/div/:val1/:val2',(req,res)=>{
    var {val1,val2}=req.params

    if(val2==0){
        res.status(400).json({error: "It is a Invalid Operation"})
    }


    if(val1 ==undefined || val2==undefined){
        res.status(400).json({error: "Kindly all the all the values"})
    }

    //sub
    var result = parseInt(val1) / parseInt(val2)

    var history=`Operation : sub, values : ${val1}, ${val2}, Result: ${result}\n`

    fs.appendFile('./history.txt',history,(err)=>{
        if(err){
            console.log(err)
            return  res.status(500).json({error : 'Something went apologies'})
        }
    })
    res.status(201).json({result : result})

})



app.listen(PORT,()=>{
    console.log("Server is listening on 3000")
})