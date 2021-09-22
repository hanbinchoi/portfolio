// 1. 모든 섹션 요소들을 가지고 온다
const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact', ];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
let selectedNavItem = navItems[0];

function selectNavItem(selected) {
    
    selectedNavItem.classList.remove('active');
    selectedNavItem = navItems[selected];
    selectedNavItem.classList.add('active');
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
};


// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            selectNavItem(index);    

        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));
