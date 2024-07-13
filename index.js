let tasbih = document.querySelector("#tasbih")
let incrementButton = document.querySelector("#btn1")
let resetButton = document.querySelector("#btn2")
let body = document.querySelector("body")

// variblie kunhaayo nbrka 
let initialValue= 0

incrementButton.addEventListener("click", function(){
initialValue++
tasbih.innerHTML = initialValue

// conditional(hadiii) lugu dhaho (if-else)
if(initialValue == 4){
    body.style.backgroundColor = "red"
}
else if(initialValue==5){
    body.style.backgroundColor = "blue"
}
else if(initialValue==6){
    body.style.backgroundColor = "green"
}
else if(initialValue==7){
    body.style.backgroundColor = "orange"
}
else if(initialValue==8){
    body.style.backgroundColor = "yellow"
}
else{
    body.style.backgroundColor="white"
}


})

resetButton.addEventListener("click", function(){
    initialValue= 0
    tasbih.innerHTML = initialValue


})




