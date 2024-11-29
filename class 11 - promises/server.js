
// let crct = new Promise((resolve,reject)=>{
//     let a=1
//     if(a!=1){
//         resolve("Success")
//     }else{
//         reject("Failure")
//     }
// })

// crct.then((msg)=>{
//     console.log(msg)
// }).catch(msg=> console.log(msg))

// const act =async ()=>{

//     try{
//         const response =await fetch('https://catfact.ninja/fact');
//         const data =await response.json()
//         console.log(data)
    // await fetch('https://catfact.ninja/fact').then(response => response.json).then(data=> console.log(data)).catch(err=>console.log(err))
//     }catch(err){
//         console.log(err)
//     }
// }
// act()

// const getData = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('sunny')
//         reject('winter')
//     })
// }

// const onSuccess = (data)=>{
//     console.log(data)
// }

// const onFailure = (data)=>{
//     console.log(data)
// }

// getData().then(onSuccess).catch(onFailure)


// const sem1 = ()=>{
//     return new Promise((resolve,reject)=>{
//                 resolve('moved to second sem')
//                 reject('need to rewrite sem1 the xam')
//             })
// }
// const sem2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('moved to third sem')
//         reject('need to rewrite sem2 the xam')
//     })
// }
// const onSuccess = (data)=>{
//     console.log(data)
// }
// const onFailure = (data)=>{
//     console.log(data)
// }
// sem1().then(sem2).then(onSuccess).catch(onFailure)

// three functions 


//office

const getBus =()=>{
    return new Promise((resolve,reject)=>{
        resolve("going to interview")
        reject("reach busstop on time for next interview")
    })
}

const reachVenue =()=>{
    return new Promise((resolve,reject)=>{
        resolve("attend interview")
        reject("You missed interview")
    })
}

const interviewStatus =()=>{
    return new Promise((resolve,reject)=>{
        resolve("You got a Job")
        reject("Try for next job")
    })
}

const onSuccess = (data)=>{
    console.log(data)
}
const onFailure = (data)=>{
    console.log(data)
}


getBus().then(reachVenue).then(interviewStatus).then(onSuccess).catch(onFailure)



