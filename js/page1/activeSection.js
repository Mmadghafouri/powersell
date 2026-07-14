
let links = document.querySelectorAll(".menu-li a");
let sec = document.querySelectorAll(".sections");

window.addEventListener("scroll", () => {

    sec.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top == 0) {

            links.forEach(link => {
                link.classList.remove("active");
            })
            links[0].classList.add("active")
        }
        else {

            if (top >= offset && top < offset + height) {

                links.forEach(link => {
                    link.classList.remove("active");
                    document.querySelector('.menu-li a[href*=' + id + ']').classList.add("active")
                })
            }
        }
    })
})

window.addEventListener("load", () => {

    sec.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top == 0) {

            links.forEach(link => {
                link.classList.remove("active");
            })
            links[0].classList.add("active")
        }
        else {

            if (top >= offset && top < offset + height) {

                links.forEach(link => {
                    link.classList.remove("active");
                    document.querySelector('.menu-li a[href*=' + id + ']').classList.add("active")
                })
            }
        }
    })
})
