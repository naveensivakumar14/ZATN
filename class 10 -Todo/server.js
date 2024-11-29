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

app.get('/',(req,res)=>{
    res.status(200).json(user)
})

app.get('/:name',(req,res)=>{
    const{name} = req.params
    // const userIndex = user.findIndex(user=> user.name ==name)
    const User = user.find(user=> user.name ==name)
    if(!User){
        res.status(400).json({msg : "user not found"})
    }else{
        res.status(200).json(User.todos)
    }

})
//POST - add new user with single todo
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

// Task - add new user with multiple todo

app.put('/:name',(req,res)=>{
    const{name} = req.params
    const {oldTodo,newTodo} = req.body
    const userIndex = user.findIndex(user=> user.name ==name)
    if(userIndex==-1){
        return res.status(400).json({msg : "user not found"})
    }

    const todoIndex = user[userIndex].todos.findIndex(i => i.Todo ==oldTodo)

    if(todoIndex==-1){
        return res.status(400).json({msg : "todo not found"})
    }

    user[userIndex].todos[todoIndex].Todo = newTodo
    fs.writeFile('./data.json',JSON.stringify(user),(err)=>{
        if(err){
            res.status(500).json({msg: "Something went wrong"})
        }else{
            res.status(200).json({msg: " user todo edited"})
        }
    })

})

app.delete('/:name',(req,res)=>{
    const{name} = req.params
    const{todo} =req.body

    const userIndex = user.findIndex(user=> user.name ==name)
    if(userIndex==-1){
        return res.status(400).json({msg : "user not found"})
    }
    const todoIndex = user[userIndex].todos.findIndex(i => i.Todo ==oldTodo)
    if(todoIndex==-1){
        return res.status(400).json({msg : "todo not found"})
    }

    user[userIndex].todos.splice(todoIndex,1)

    fs.writeFile('./data.json',JSON.stringify(user),(err)=>{
        if(err){
            res.status(500).json({msg: "Something went wrong"})
        }else{
            res.status(200).json({msg: "user todo deleted"})
        }
    })

})



app.listen(PORT,()=>{
    console.log("Server is listening")
})