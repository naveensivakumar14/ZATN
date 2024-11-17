// variables


//name function
function mul(num1,num2){
    console.log(num1+num2)
}
mul(10,20)


//arrow function
let greet=(name)=>{
    console.log("Welcome",name)
}
greet("Arjun")


//objects
let team = {
    teamName : "testing",
    size : 8,
    shift:"Day"
}

//Destructuring
const {teamName,size,shift}=team
console.log(teamName,size,shift)



//filter

const userAge=[2,10,25,45,60]

const eligible=userAge.filter(a=> a>=18)
console.log(userAge)
console.log(eligible)


//map
const amount=[5,8,7,4,2]
const returnAmount=amount.map(amt=> amt*10)
console.log(amount)
console.log(returnAmount)


//spread
const user2={uname:"Ajay",uage:28}

const user1={uname:"Arjun",uage:25, ...user2}


console.log(user1)