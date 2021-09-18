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


// home - contact btn event

const contact_btn = document.querySelector('.home_contact');

contact_btn.addEventListener('click',()=>{
    scrollIntoView('#contact');
});


// menu click event: scroll to clicked section

const menu = document.querySelector('.navbar_menu');

menu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    menu.classList.remove('open');
    scrollIntoView(link);
});

// mini screen menu btn toggle event

const toggle_btn = document.querySelector('.navbar_toggle-btn');
toggle_btn.addEventListener('click', ()=>{
    menu.classList.toggle('open');
    console.log("asd");
});



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}