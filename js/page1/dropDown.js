
let activeSeason;

// seasons video

let topCourses1 = document.querySelectorAll(".topCourses1");
let bottomCourses1 = document.querySelectorAll(".bottomCourses1");
let bottom1_infosAll = document.querySelectorAll(".bottom1-infosAll");

for (let i = 0; i < topCourses1.length; i++) {

    topCourses1[i].addEventListener("click", () => {

        bottomCourses1[i].style.transition = '0.3s ease-in-out';

        activeSeason = i;

        if (topCourses1[i].className == 'topCourses1') {

            removeAllSeasons()

            topCourses1[i].classList.add("active");
            let Height = bottom1_infosAll[i].clientHeight + 22;
            bottomCourses1[i].style.height = Height + 'px';
            bottomCourses1[i].classList.add("active")
        }
        else {

            let Height = bottom1_infosAll[i].clientHeight + 22;
            bottomCourses1[i].style.height = Height + 'px';

            setTimeout(() => {
                removeAllSeasons()
                topCourses1[i].classList.remove("active");
                bottomCourses1[i].style.height = '0px';
                bottomCourses1[i].classList.remove("active")
            }, 1);
        }
    })
}

function removeAllSeasons() {

    let topCourses1 = document.querySelectorAll(".topCourses1.active");
    let bottomCourses1 = document.querySelectorAll(".bottomCourses1.active");
    let bottom1_infosAll = document.querySelectorAll(".bottomCourses1.active .bottom1-infosAll");

    for (let x = 0; x < topCourses1.length; x++) {

        let Height = bottom1_infosAll[x].clientHeight + 22;
        bottomCourses1[x].style.height = Height + 'px';
        bottomCourses1[x].style.transition = '0.3s ease-in-out';


        setTimeout(() => {
            topCourses1[x].classList.remove("active");
            bottomCourses1[x].style.height = '0px';
            bottomCourses1[x].classList.remove("active")
        }, 1);
    }


    topCourses1.forEach(topCourses1 => {

        topCourses1.classList.remove("active")
    })
}

// seasons video

// videos

let topCourse2 = document.querySelectorAll(".topCourse2");
let bottomcourse2 = document.querySelectorAll(".bottomcourse2");
let bottom2Info = document.querySelectorAll(".bottom2Info");

for (let i = 0; i < topCourse2.length; i++) {

    topCourse2[i].addEventListener("click", () => {

        bottomCourses1[activeSeason].style.transition = '0s';
        bottomCourses1[activeSeason].style.height = 'auto';

        if (topCourse2[i].className == 'topCourse2') {

            topCourse2[i].classList.add("active");
            let Height = bottom2Info[i].clientHeight + 25;
            bottomcourse2[i].style.height = Height + 'px';
        }
        else {

            topCourse2[i].classList.remove("active");
            bottomcourse2[i].style.height = '0px';
        }
    })
}

// videos