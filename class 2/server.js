// let , var , const
let a=1, b=1
//normal functio
function add(a,b){
    return a+b
}
console.log(add(1,2))
//arrow function
const addition = (a,b)=>{
    return a+b
}
console.log(addition(1,2))
//objects
let reyroi = {
    name : "reyroi",
    age : 23,
    profession: "entrepreneur"
}
console.log(reyroi.name,reyroi.age,reyroi.profession)

//destructuring
const{name,age,profession} = reyroi
console.log(name,age,profession)

//destructuring with names
const{name:n,age:ag,profession:p}= reyroi
console.log(n)

//filter
const num = [1,2,3,4,5]
const newArr = num.filter(i => i>=4)
console.log(num)
console.log(newArr)

//map            
const arr1 =[1,2,3,4,5]
const arr2= arr1.map(i=> i*2)
console.log(arr1)
console.log(arr2)

//spread operator
// const rey = {gender: "male", salary : "100000000", ...reyroi }
// console.log(rey)


// var k= 1
// if(k===1){
//     nam = "reyroi"
// }else{
//     nam= "rege"
// }
// const nam = k==1 &&  "reyroi" || "rege"
// console.log(nam)

//findIndex
const names=["sam", "roi" ,"rey","king"]
let index = names.findIndex(i => i=="roi")
console.log(index)

//module
const math = require('./calculator')
console.log(math.sub(3,4))












