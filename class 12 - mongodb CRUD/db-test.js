
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3001

//middleware
app.use(express.json())

//Database connection
mongoose.connect('mongodb://localhost:27017/ZATNNov')
.then(()=> {
    console.log("Database is connected")
})
.catch(err => console.log(err))


//Schema

const userData = new mongoose.Schema({
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
    },
   
})

//model

const User = mongoose.model('user',userData)

//add new user
app.post('/api/user', async(req,res)=>{
    const{name, age, gender} = req.body

    if(!name || !age || !gender){
        return res.status(400).json({msg: "kindly send all details"})
    }
    try{
        const user = await User.create({name,age,gender,role})
        if(!user){
            return res.status(500).json({msg: "Somthing went wrong"})
        }
        return res.status(200).json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json({msg: "Somthing went wrong"})
    }
    
})

app.listen(PORT,()=>{
    console.log("server is listening on 3001")
})