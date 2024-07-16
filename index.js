let menuButton = document.querySelector("#menuButton")
let closeButton = document.querySelector("#closeButton")
let links = document.querySelector("#links")
let Buttons = document.querySelector("#buttons")


menuButton.addEventListener("click", function(){
    links.style.display = "flex"
    Buttons.style.display = "block"
    menuButton.style.display = "none"
    closeButton.style.display = "block"
})
closeButton.addEventListener("click", function(){
    links.style.display = "none"
    Buttons.style.display = "none"
    menuButton.style.display = "block"
    closeButton.style.display = "none"
})