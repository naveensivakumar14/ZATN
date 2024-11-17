const fs =require('fs')

// fs.writeFileSync('./reyroi.txt',"Am the king")
// const data = fs.readFileSync('./reyroi.txt','utf-8')
// console.log(data)

//Creating new file
console.log("\n")
fs.writeFileSync('./naveen.txt',"I am a developer")
const myData = fs.readFileSync('./naveen.txt','utf-8')
console.log(myData)

//sync
// console.log("1")
// const data = fs.readFileSync('./reyroi.txt','utf-8')
// console.log(data)
// console.log("2")

//sync
console.log("\n")
console.log("Chennai")
const myData1=fs.readFileSync('./naveen.txt','utf-8')
console.log(myData1)
console.log("Trichy")

//async
// console.log("1")
// fs.readFile("./reyroi.txt",'utf-8',(err,data)=>{
//     console.log(data)
// })
// console.log("3")

//async
console.log("\n")
console.log("Chennai")
const asyncData=fs.readFile('./naveen.txt','utf-8',(err,data)=>{
    console.log(asyncData)
})
console.log("Trichy")


// fs.appendFileSync('./reyroi.txt',"\n he is the king")
// let data = fs.readFileSync('./reyroi.txt','utf-8')
// console.log(data)

//apppend
console.log("\n")
fs.appendFileSync('./naveen.txt',"\n doing Freelance")
let appendData = fs.readFileSync('./naveen.txt','utf-8')
console.log(appendData)



// fs.mkdirSync("class/name",{recursive: true})

fs.mkdirSync("user/name",{recursive: true})


// fs.writeFileSync('./class/name/king.txt',"Am i inside")
// data = fs.readFileSync('./class/name/king.txt','utf-8')
// console.log(data)

//new directory -new file
console.log("\n")
fs.writeFileSync('./user/name/project.txt',"Ecommerce project")
projectData = fs.readFileSync('./user/name/project.txt','utf-8')
console.log(projectData)

// fs.unlinkSync('./class/name/king.txt')

// fs.cpSync('./reyroi.txt','./king.txt')
// data = fs.readFileSync('./king.txt','utf-8')
// console.log(data)


//copy
console.log("\n")
fs.cpSync('./naveen.txt','./project.txt')
copiedData = fs.readFileSync('./project.txt','utf-8')
console.log(copiedData)


// let value= fs.existsSync('./king.txt')
// console.log(value)


//check file is exist or not
let value= fs.existsSync('./project.txt')
console.log(value)



// const obj ={
//     name : "nireesh",
//     age: "23",
//     gender : "male"
// }

// const stringJSON = JSON.stringify(obj)
// console.log(stringJSON)
// const JSONData =  JSON.parse(stringJSON)
// console.log(obj)


const purchase={
    item1: "Rice",
    item2: "Sugar",
    item3: "Wheat",
}

const stringJSON = JSON.stringify(purchase)
console.log(stringJSON)
const JSONData =  JSON.parse(stringJSON)
console.log(purchase)
console.log(JSONData)


//json is lightweight

// data = fs.readFileSync('./data.json','utf8')
// console.log(data)
// console.log(JSON.parse(data))

//async
// fs.writeFile('./async.txt',"write the text",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })



