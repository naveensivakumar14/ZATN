const express = require('express')
const fs = require('fs')
const app = express()
const PORT =5005
let user= []

app.use(express.json())

try{
    let data = fs.readFileSync('./data.json',"utf-8")
    user = JSON.parse(data)
}catch(err){
    console.log(err)
}


//get request route
app.get('/',(req,res)=>{
    res.status(200).json(user)
})


//post request route -- new user
app.post('/',(req,res)=>{
    const{name,todo} = req.body
    if(!name || !todo){
       return res.status(400).json({msg: "Kindly send all data"})
    }
    const newUser = {name : name,todos: [{Todo :todo}]}
    user.push(newUser)
    fs.writeFile('./data.json',JSON.stringify(user),(err)=>{
        if(err){
            res.status(500).json({msg: "Something went wrong"})
        }else{
            res.status(200).json({msg: "New user with todo added"})
        }
    })

})


app.listen(PORT,()=>{
    console.log("Server is running on ",PORT)
})