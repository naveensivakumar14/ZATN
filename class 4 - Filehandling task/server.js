const fs = require('fs')


// let odata= JSON.parse(data)
//age > 25
fs.readFile('./data.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }

    let odata= JSON.parse(data)

    const agegreaterThan = odata.filter(i=> i.age>25)

    fs.writeFile('./agegreaterThan',JSON.stringify(agegreaterThan),(err)=>{
        if(err){
            console.log(err)
        }
    })


})


//Task 

//agelesserthan18  -  './teenage.json'
//ageGreaterthen18 - './senior.json'
//nameStartsWithN  - './n.json'
//nameGreaterthen4 - './four.json'
//male  - './male.json'
//female - './female.json'


//age < 18
fs.readFile('./data.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }

    let odata= JSON.parse(data)
    const less_18 = odata.filter(i=> i.age<18)
    fs.writeFile('./less_18',JSON.stringify(less_18),(err)=>{
        if(err){
            console.log(err)
        }
    })
})


//age > 18
fs.readFile('./data.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }

    let odata= JSON.parse(data)
    const more_18 = odata.filter(i=> i.age>18)
    fs.writeFile('./more_18',JSON.stringify(more_18),(err)=>{
        if(err){
            console.log(err)
        }
    })
})


//male user
fs.readFile('./data.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    let odata= JSON.parse(data)
    const  maleUser = odata.filter(i=> i.gender=="male")
    fs.writeFile('./maleUser',JSON.stringify(maleUser),(err)=>{
        if(err){
            console.log(err)
        }
    })
})


//female user
fs.readFile('./data.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    let odata= JSON.parse(data)
    const femaleUser = odata.filter(i=> i.gender=="female")
    fs.writeFile('./femaleUser',JSON.stringify(femaleUser),(err)=>{
        if(err){
            console.log(err)
        }
    })
})

//nameGreaterthen4 - './four.json'
fs.readFile('./data.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    
    let odata= JSON.parse(data)
    const namemoreFour = odata.filter(i=> i.name.length>4)
    fs.writeFile('./namemoreFour',JSON.stringify(namemoreFour),(err)=>{
        if(err){
            console.log(err)
        }
    })
})
