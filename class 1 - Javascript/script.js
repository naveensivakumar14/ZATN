
//background color change task 

var bgColor=document.getElementById('background');
var button=document.getElementById('btn');


function changeColor(){
    let x =Math.floor(Math.random()*256)
    let y =Math.floor(Math.random()*256)
    let z =Math.floor(Math.random()*256)

    const randomColor=`rgb(${x},${y},${z})`
    bgColor.style.backgroundColor=randomColor
}

btn.addEventListener('click',changeColor)











//moving animation task 
// const start = document.getElementById('start')
// const stop = document.getElementById('stop')
// const ball = document.getElementById('ball')

// let x=0
// let speed = 1

// let animation


// function move(){
//     x+=speed
//     ball.style.left = x + "px"

//    if(x+100>window.innerWidth) {
//     speed =-1
//    }
//    if(x<0){
//     speed =1
//    }
// }

// function startTheBall(){
//     clearInterval(animation)
//     animation = setInterval(move,1)
// }
// function  stopTheBall() {
//     clearInterval(animation)
// }

// start.addEventListener('click',startTheBall)
// stop.addEventListener('click',stopTheBall)


