'use strict';

// home section transparent when window scroll down.
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    const scrollHeighth = window.scrollY;
    if( scrollHeighth >= 700 ){
        home.style.opacity = 0;
    }else{
        home.style.opacity = 1 - scrollHeighth/homeHeight; 
    }
})

// show 'arrow-up' button when scrolling down 
const up_btn = document.querySelector(".arrow-up");

document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight/2) {
        up_btn.classList.add('visible');
    }else{
        up_btn.classList.remove('visible');
    }

});

up_btn.addEventListener('click', ()=>{
    scrollIntoView("#home");
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}