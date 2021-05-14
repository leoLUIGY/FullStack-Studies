const background = document.querySelector("#header")
const colorName  = document.querySelector("#color")
const newGame  = document.querySelector("#newGame")
const cubes = document.querySelectorAll(".cube")
const check = document.querySelector("#checkText")

const easy = document.querySelector("#easy")
const hard = document.querySelector("#hard")


let easyMode = true;

let [Red, Green, Blue] = [0,0,0]
let correctCube = 0
let actualColor

background.style.backgroundColor = `rgb(${0}, ${0}, ${0})`
colorName.textContent = `rgb(${0}, ${0}, ${0})`
check.textContent = `...`

easy.addEventListener("click", ()=>{
    easyMode = true;
    easy.classList.add("modeSelect")
    hard.classList.remove("modeSelect")
})
hard.addEventListener("click", ()=>{
    easyMode = false;
    easy.classList.remove("modeSelect")
    hard.classList.add("modeSelect")
})

newGame.addEventListener("click", ()=>{
    if(!easyMode){
    [Red, Green, Blue] = [Math.round(Math.random()*255), Math.round(Math.random()*255),
        Math.round(Math.random()*255)]
    } else{
        let sameColor = Math.round(Math.random()*255);
        [Red, Green, Blue] = [sameColor, sameColor,sameColor]
    }
        correctCube = Math.round(Math.random() * 5)   
    newGame.textContent = `Playing`
    actualColor =  `rgb(${Red}, ${Green}, ${Blue})`
    backgrounds()
})

cubes.forEach(cub => {
    cub.addEventListener("click", ()=>{
        check.textContent = `Cheking...`
        console.log(cub.style.backgroundColor )
        setTimeout(()=>{
            if(cub.style.backgroundColor == actualColor){
                CorrectColor()
            } else{
               
                check.textContent = `WRONG`
            }
        }, 3000)
       
    })
})


function backgrounds(){
    
    cubes.forEach(cub => {
        let [R, G, B] = [Math.round(Math.random()*255), Math.round(Math.random()*255),
            Math.round(Math.random()*255)]
        cub.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        
    });
    cubes[correctCube].style.backgroundColor = actualColor;
   
}


function CorrectColor(){
    background.style.backgroundColor = actualColor
    colorName.textContent = actualColor
    check.textContent = `CORRECT`
    newGame.textContent = `New Game`
}