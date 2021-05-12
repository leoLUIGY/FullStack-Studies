const play = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
let time = document.querySelector("#time")

let timeForm;
let [minutes, seconds] = [0,0]
let timeplay;
let [played, stoped, reseted] = [false, false, false]

play.addEventListener("click", ()=>{
    if(!played){
        [played, stoped, reseted] = [true, false, false]
        TimeToFormat()
    }
})
stop.addEventListener("click", ()=>{
    if(!stoped){
        [played, stoped, reseted] = [false, true, false]
        clearTimeout(timeplay)
    }
})
reset.addEventListener("click", ()=>{
    if(!reseted){
        [played, stoped, reseted] = [false, false, true]
        clearTimeout(timeplay)
        minutes = 0;
        seconds = 0;
        Formating()
        time.innerHTML = timeForm
    }
})



function TimeToFormat(){
    Formating()
    time.innerHTML = timeForm

    timeplay = setTimeout(TimeToFormat, 1000)
}

function Formating(){
    
    if(seconds >60){
        seconds = 0
        minutes+=1
    }
    timeForm =`${minutes}:${seconds}`
    if(seconds< 10 && minutes <10){
        timeForm = `0${minutes}:0${seconds}`
    } else if(seconds <10 && minutes >=10){
        timeForm = `${minutes}:0${seconds}`
    } else if(seconds >= 10 && minutes<10 ){
        timeForm = `0${minutes}:${seconds}`
    }
    seconds += 1
}




