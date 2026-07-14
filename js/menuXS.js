let menuXS = document.querySelector(".menuXS");
let drp = document.querySelector(".menu-ul");
let menu = document.querySelector(".menu")

menuXS.addEventListener("click" , () =>{

    drp.classList.toggle("active");
    menuXS.classList.toggle("active")
    menu.classList.toggle("active")

})


drp.addEventListener("click" , () =>{

    drp.classList.toggle("active");
    menuXS.classList.toggle("active")
    menu.classList.toggle("active")

})