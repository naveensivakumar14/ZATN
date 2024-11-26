const express = require('express')
const fs = require('fs')
const app = express()
const PORT =5000

let user= []

try{
    let data = fs.readFileSync('./data.json',"utf-8")
    user = JSON.parse(data)
}catch(err){
    console.log(err)
}
// GET - all users
app.get('/',(req,res)=>{
    res.status(200).json(user)
})

// GET - user by username
app.get('/:name',(req,res)=>{
    const {name} = req.params
    const userIndex = user.findIndex(user => user.name ==name)

    if(userIndex==-1){
        res.status(400).json({msg : "No such user found"})
    }else{
        res.status(200).json(user[userIndex])
    }

})

app.listen(PORT,()=>{
    console.log("Server is listening")
})

