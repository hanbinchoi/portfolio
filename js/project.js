'use strict';

const categories = document.querySelector(".work_categories")
const projects = document.querySelectorAll(".work_container")
const category = []
let index;

// category 버튼 클릭 이벤트
for (let i = 0; i < categories.children.length; i++) {
    category.push(categories.children[i])
}

category.forEach(e => {
    e.addEventListener('click', () => {
        imgList = []
        for (let i = 0; i < category.length; i++) {
            category[i].classList.remove('selected')
        }
        e.classList.add('selected')
        let p = e.dataset.category
        index = parseInt(p)
        imgList = imgSet[index]
        changeCategory(index);

    })
});



// 프로젝트 이미지 전환
const arrows = document.querySelectorAll(".arrow")
const arrow_left = arrows[0]
const arrow_right = arrows[1]

const now = document.querySelector('.now')
const end = document.querySelector('.end')

const imgSet = [
    ["", "./img/travelic/1.gif", "./img/travelic/2.PNG", "./img/travelic/3.PNG", "./img/travelic/4.PNG"],
    ["", "./img/rail-fall/1.gif", "./img/rail-fall/2.gif", "./img/rail-fall/3.gif", "./img/rail-fall/4.gif"],
    ["", "./img/hellschedule/1.png", "./img/hellschedule/2.png", "./img/hellschedule/3.png", "./img/hellschedule/4.png"]
]
let imgList = []
const imgBox = document.querySelector('.img_box')

const titleList = ["Travelic", "Rail-Fall Prevention System", "HellSchedule"]
const descList = ["2021.09 - 2021.10", "2020.03 - 2021.06", "2020.04 - 2020.06"]
const main_skillList = ["HTML, CSS, JavaScript", "Python3, YOLO, TensorRT, Android, TCP Socket", "Java, Android"]
const gitList = ["https://hanbinchoi.github.io/Travelic/", "https://github.com/choib1ack/Rail_Fall_Prevention_System", "https://github.com/hanbinchoi/HellSchedule"]
const urlList = ["https://hanbinchoi.github.io/Travelic/", "https://www.youtube.com/watch?v=E-d7NiPAkk8", "https://www.youtube.com/watch?v=aSmuxdxUXjU"]

const rightList = [
    `<p>
    <strong>Travelic</strong>은 전 세계 여행지를 소개하는 웹 페이지로 각 대륙 별로 카테고리를 나누었으며, 그 대륙 안에는 또
    여러 나라로 카테고리가 나눠져 있습니다.
    </p>
    <br>
    <p>
    저의 첫번째 <strong>Front-End</strong> 자체제작 사이트이며 <strong>타이핑 효과, 자동 배경 전환, 스크롤에 반응</strong>하는
    동적기능이 JavaScript로 구현되었으며,
    </p>
    <br>
    <p>
    그 외에 hover에 반응하는 <strong>tranlation, card-flip, sticky-nav 등</strong>이 css와 JavaScript로
    제작되었습니다.
    </p>
    <br>
    <p>
    첫 번째 Front-End 프로젝트인 만큼, 부족하고 보완할 점이 많은 웹 페이지이지만 하면서 내가 <strong>무엇이 부족하고 무엇을 더 공부하고 싶다는
        목표</strong>가 세워져 의미있는 프로젝트가 되었습니다. 개인적으로 아쉬운 점은, Back-end와 협업을 하지 않고 Front-End 기술만 들어간
    프로젝트여서
    낮은 완성도와 한계가 느껴졌습니다. <strong>앞으로 Back-End와에 협업이 기대되고 더욱 더 완성도 있는 웹 애플리케이션을 목표로 공부해 나갈것
        입니다.</strong>
    </p>`,

    `<p>
    저의 졸업작품 프로젝트 <strong>"선로추락감지시스템"</strong>은 최근 화제인 AI기술 중 <strong>Deep&nbsp;learning</strong> 기술을 활용하여, 컴퓨터가 자동으로 사람을 추적해서 선로에 추락하는지 감시합니다. 
    </p>
    <br>
    <p>
    빠른 데이터 송수신을 위해 소형 컴퓨팅 디바이슨 Jetson Nano를 통해 <strong>엣지 컴퓨팅</strong>을 활용하여
    데이터 전송시간과 서버 과부화를 줄이는데 집중하였습니다.
    </p>
    <br>
    <p>
    사람을 감지하는 YOLO 알고리즘에 <strong>TensorRT</strong>를 통해 최적화를 진행하여 감지시간을 대폭 줄였으며,
    선로에 해당하는 선을 사람이 직접 그리는 것이 아닌 OpenCV에 <strong>Hough Line Transform</strong>을 활용하여 자동 선로 검출을 통해 편의성을 높였으며
    자체 제작한 <strong>Android 앱</strong>과 서버이자 동시에 카메라인 Jetson Nano와 <strong>TCP 연결</strong>을 통해 감지한 위험 정보를 firebase에 올려 앱을 통해 알림을 받을 수 있도록 설계 하였습니다.
    </p>
    <br>
    <p>
    저는 자동 선로 검출을 담당하여 이 프로젝트에 적극 참여하였고, 저희 팀은 졸업작품 평가순위에서 <strong>1위</strong>라는 우수한 성적을 받았습니다. 
    또한 소프트웨어 중심 사업단에서 주최하는 SW인재 페스티벌에 <strong>학교대표</strong> 작품으로 선정되어 참가하였습니다. 
    </p>`,

    `<p>
    <strong>HellSchedule</strong>은 사용자의 체형을 분석하고 분석한 체형을 통해 맞춤형 운동 루틴과 식단, 산책로 추천등에 기능을 제공하며, 
    그 외에 스톱워치, 칼로리 계산, 운동 검색 기능 등을 하나의 안드로이드 어플리케이션에서 제공하는 <strong>종합 헬스 도우미 어플</strong>입니다.
    </p>
    <br>
    <p>
    학과 전공인 모바일 프로그래밍에 팀 프로젝트로 제작된 이 어플은 Main Activity에서 <strong>Fragment전환</strong>을 통해 다양한 화면을 구성하였으며,
    해당하는 화면으로 이동하기 위한 메뉴는 <strong>Bottom Navigation</strong>을 통해 제공하였습니다.
    </p>
    <br>
    <p>
    그 외에 기능들은 API를 통해 받아오는 것이 아닌 <strong>직접 구현</strong>해봄으로써 다양한 제작 기술을 활용하였습니다.
    </p>
    <br>
    <p>
    단 기간인 전공 팀 프로젝트인 만큼 완성도가 높다고 평가할수 없지만 수업에서 배운 내용들과 그 외에 여러가지 구현을 직접 해보는 재밌는 경험이었으며,
    많은 기능을 추가한 것과 아이디어를 인정받아 가장 <strong>최고순위</strong>를 받아 만족스러운 프로젝트 였습니다.
    </p>`,
]

function changeCategory(index) {
    const title = document.querySelector('.work_title')
    const desc = document.querySelector('.work_description')
    const main_skill = document.querySelector('.main_skill')
    const git_link = document.querySelector('.git_link')
    const url_link = document.querySelector('.url_link')
    const work_right = document.querySelector('.work_right')
    imgList = imgSet[index]
    end.innerHTML = imgList.length - 1
    now.innerHTML = 1
    imgBox.style.background = `url(${imgList[1]}) no-repeat center`
    imgBox.style.backgroundSize = "contain"
    title.innerHTML = titleList[index]
    desc.innerHTML = descList[index]
    main_skill.innerHTML = main_skillList[index]
    git_link.href = gitList[index]
    git_link.innerHTML = gitList[index]
    url_link.href = urlList[index]
    url_link.innerHTML = urlList[index]
    work_right.innerHTML = rightList[index]
}

function drawImage(index) {
    imgBox.style.background = `url(${imgList[index]}) no-repeat center`
    imgBox.style.backgroundSize = "contain"
}



arrow_left.addEventListener("click", () => {
    if (parseInt(now.innerHTML) != 1) {
        now.innerHTML = parseInt(now.innerHTML) - 1
        arrow_left.style.cursor = "pointer"
        drawImage(parseInt(now.innerHTML))
    }

    if (parseInt(now.innerHTML) == 1) {
        arrow_right.style.cursor = "pointer"
        arrow_left.style.cursor = "default"
    }

})

arrow_right.addEventListener("click", () => {
    if (parseInt(now.innerHTML) != parseInt(end.innerHTML)) {
        now.innerHTML = parseInt(now.innerHTML) + 1
        arrow_right.style.cursor = "pointer"
        drawImage(parseInt(now.innerHTML))
    }

    if (parseInt(now.innerHTML) === parseInt(end.innerHTML)) {
        arrow_left.style.cursor = "pointer"
        arrow_right.style.cursor = "default"
    }

})

window.addEventListener('load', changeCategory(1));