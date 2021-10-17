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

