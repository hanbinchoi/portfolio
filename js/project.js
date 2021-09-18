'use strict';

// project btn click event -> show relative projects

const categoryContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_project')
const categories = document.querySelectorAll('.project');
const category_btns = document.querySelectorAll('.category_btn');

categoryContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.category || e.target.parentNode.dataset.category;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add('anim-out');

    const active = document.querySelector('.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    setTimeout(() => {
        categories.forEach((category) => {
            if (filter === '*' || filter === category.dataset.category) {
                category.classList.remove('invisible')
            } else {
                category.classList.add('invisible');
            }
        });

        projectContainer.classList.remove('anim-out')
    }, 300);
});


// categories[0].addEventListener('click', ()=>{
//     categories[0].classList.add('active');
//     categories[1].classList.remove('active');
//     categories[2].classList.remove('active');
//     categories[3].classList.remove('active');
//     const projects = document.querySelector('.work_project').children;

//     for(let i = 0; i<projects.length; i++){
//         projects[i].classList.remove('invisible');
//     }
// });

// categories[1].addEventListener('click', ()=>{
//     categories[0].classList.remove('active');
//     categories[1].classList.add('active');
//     categories[2].classList.remove('active');
//     categories[3].classList.remove('active');
//     const projects = document.querySelector('.work_project').children;

//     for(let i = 0; i<projects.length; i++){
//         projects[i].classList.add('invisible');
//     }

//     const category = categories[1].dataset.category;
//     for(let i = 0; i<projects.length; i++){
//         if(projects[i].dataset.category == category)
//             projects[i].classList.remove('invisible');
//     }

// });


// categories[2].addEventListener('click', ()=>{
//     categories[0].classList.remove('active');
//     categories[1].classList.remove('active');
//     categories[2].classList.add('active');
//     categories[3].classList.remove('active');
//     const projects = document.querySelector('.work_project').children;

//     for(let i = 0; i<projects.length; i++){
//         projects[i].classList.add('invisible');
//     }

//     const category = categories[2].dataset.category;
//     for(let i = 0; i<projects.length; i++){
//         if(projects[i].dataset.category == category)
//             projects[i].classList.remove('invisible');
//     }

// });


// categories[3].addEventListener('click', ()=>{
//     categories[0].classList.remove('active');
//     categories[1].classList.remove('active');
//     categories[2].classList.remove('active');
//     categories[3].classList.add('active');
//     const projects = document.querySelector('.work_project').children;

//     for(let i = 0; i<projects.length; i++){
//         projects[i].classList.add('invisible');
//     }

//     const category = categories[3].dataset.category;
//     for(let i = 0; i<projects.length; i++){
//         if(projects[i].dataset.category == category)
//             projects[i].classList.remove('invisible');
//     }

// });