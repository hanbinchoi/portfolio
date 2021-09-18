'use strict';

// make navbar transparent when it is on top.

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add("sticky-nav");
    }else{
        navbar.classList.remove("sticky-nav");
    }
})