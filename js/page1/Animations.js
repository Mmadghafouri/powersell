// header animations

let con1Img = document.querySelector(".con1 .right");
let title1 = document.querySelector(".title1-con1")
let title2 = document.querySelector(".title2-con1")
let title3 = document.querySelector(".title3-con1")
let seeMore = document.querySelector(".SeeMore");
let SeeVideo = document.querySelector(".SeeVideo");

window.onload = () =>{

    con1Img.classList.add("active")
    title1.classList.add("active")
    title2.classList.add("active")
    title3.classList.add("active")
    seeMore.classList.add("active")
    SeeVideo.classList.add("active")
}



// header animations
// all body nimations

let animationClass = document.querySelectorAll(".animationClass")

function reveal() {

    animationClass.forEach(step =>{

        let windowHeight = window.innerHeight;
        let elementTop = step.getBoundingClientRect().top;
        let elementVisible = 240;

        if(elementTop < windowHeight - elementVisible) {

            step.classList.add("active")
        }
     
    })
}

window.addEventListener("scroll" , reveal)
window.addEventListener("load" , reveal)

// all body nimations