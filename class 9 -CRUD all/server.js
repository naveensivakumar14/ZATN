const express = require('express')
const fs = require('fs')
const app = express()
const PORT =5000

let user= []

//middlware
app.use(express.json())



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

//POST - add new user
app.post('/',(req,res)=>{
    const{name,age,gender} = req.body
    let newUser = {name:name,age:age,gender:gender}
    user.push(newUser)
    fs.writeFile('./data.json',JSON.stringify(user),(err)=>{
        if(err){
            res.json({msg: "error"})
        }else{
            res.json({msg: "new user added"})
        }
    })
})


//PUT - edit user
app.put('/:name',(req,res)=>{
    const{name} = req.params
    const updatedDetails = req.body

    const userIndex = user.findIndex(user => user.name ==name)

    if(userIndex!=-1){
        user[userIndex]= {...user[userIndex], ...updatedDetails}
        fs.writeFile('./data.json',JSON.stringify(user),(err)=>{
            if(err){
                res.json({msg: "error"})
            }else{
                res.json({msg: "details edited"})
            }
        })

    }else{
        res.status(400).json({msg: "user not found"})
    }
})

//DELETE - delete a user
app.delete('/:name',(req,res)=>{
    const {name} =req.params
    const updatedUser = user.filter(user=> user.name !=name)
    if(updatedUser.length<user.length){
        fs.writeFile('./data.json',JSON.stringify(updatedUser),(err)=>{
            if(err){
                res.json({msg: "error"})
            }else{
                res.json({msg: "user deleted"})
            }
        })

    }else{
        res.status(400).json({msg: "user not found"})
    }

})









//GET - return all users whose age greater than 25
//GET - return all user female users
//DELETE - delete all female users

app.get('/:age',(req,res)=>{
    const {age} =req.params

    const updateUser25=user.filter(user=> user.age >=25)
    res.status(200).json(updateUser25)
  
})

app.listen(PORT,()=>{
    console.log("Server is listening")
})






