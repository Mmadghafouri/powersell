
$(window).on("scroll" , function() {

    if($(this).scrollTop() > 500) {

        $(".goUP").addClass("active")
    }
    else {

        $(".goUP").removeClass("active")
    }

});

$(window).on("load" , function() {

    if($(this).scrollTop() > 500) {

        $(".goUP").addClass("active")
    }
    else {

        $(".goUP").removeClass("active")
    }

});


$(".goUP").on("click" , function() {

    $('html').animate({scrollTop: 0} , 'slow');

});

let path = document.querySelector(".path");

window.addEventListener("scroll" , () =>{
	
	let scrolltop = document.documentElement.scrollTop;
	let scrollHeight = document.documentElement.scrollHeight;
	let scrollClient = document.documentElement.clientHeight;
	
	
	let scroll = (scrolltop) / (scrollHeight - scrollClient) * 100;
	
	path.style.strokeDasharray  = (scroll * 2.6)  + "," + 250.2;
	
	
});

window.addEventListener("load" , () =>{
	
	let scrolltop = document.documentElement.scrollTop;
	let scrollHeight = document.documentElement.scrollHeight;
	let scrollClient = document.documentElement.clientHeight;
	
	
	let scroll = (scrolltop) / (scrollHeight - scrollClient) * 100;
	
	path.style.strokeDasharray  = (scroll * 2.6)  + "," + 250.2;
	
	
});