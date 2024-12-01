const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000

//middleware
app.use(express.json())

//Database Connection
mongoose.connect('mongodb://localhost:27017/ZATNNov')
.then(()=> {
    console.log("Database is connected")
})
.catch(err => console.log(err))

//Schema
const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    age: {
        type : Number,
        required: true,
    },
    gender: {
        type : String,
        required: true
    }
})

//model
const User = mongoose.model('user',userSchema)

//add new user
app.post('/api/user', async(req,res)=>{
    const{name, age,gender} = req.body

    if(!name || !age || !gender){
        return res.status(400).json({msg: "kindly send all details"})
    }
    try{
        const user = await User.create({name,age,gender})
        if(!user){
            return res.status(500).json({msg: "Somthing went wrong"})
        }
        return res.status(200).json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json({msg: "Somthing went wrong"})
    }
    
})

//return all users 
app.get('/api/user', async(req,res)=>{
    try{
        const allUsers  = await User.find({})

        if(!allUsers){
            return res.status(400).json({msg: "No data found"})
        }
    
        return res.status(200).json(allUsers)
    }catch(err){
        console.log(err)
        return res.status(500).json({msg: "Somthing went wrong"})
    }
   
})

//get by user id
app.get('/api/:id',async(req,res)=>{
    const{id} =  req.params
    try{
        const user = await User.findById(id)

        if(!user){
            return res.status(400).json({msg: "User not found"})
        }
    
        return res.status(200).json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json({msg: "Somthing went wrong"})
    }
})


//edit by userid
app.put('/api/:id',async(req,res)=>{
    const{id} =  req.params
    try{
        const user = await User.findByIdAndUpdate(id,req.body)

        if(!user){
            return res.status(400).json({msg: "User not found"})
        }
    
        return res.status(200).json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json({msg: "Somthing went wrong"})
    }
})

//delete by userid
app.delete('/api/:id',async(req,res)=>{
    const{id} =  req.params
    try{
        const user = await User.findByIdAndDelete(id)

        if(!user){
            return res.status(400).json({msg: "User not found"})
        }
        return res.status(200).json({msg: "user successfully deleted"})
    }catch(err){
        console.log(err)
        return res.status(500).json({msg: "Somthing went wrong"})
    }
})

app.listen(PORT,()=>{
    console.log("server is listening on 5000")
})