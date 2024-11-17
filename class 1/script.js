const start = document.getElementById('start')
const stop = document.getElementById('stop')
const ball = document.getElementById('ball')

let x=0
let speed = 1

let animation


function move(){
    x+=speed
    ball.style.left = x + "px"

   if(x+100>window.innerWidth) {
    speed =-1
   }
   if(x<0){
    speed =1
   }
}

function startTheBall(){
    clearInterval(animation)
    animation = setInterval(move,1)
}
function  stopTheBall() {
    clearInterval(animation)
}

start.addEventListener('click',startTheBall)
stop.addEventListener('click',stopTheBall)


