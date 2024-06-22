let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
}
let refreshSlider = setInterval(() => {next.click()}, 5000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 5000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})
list.addEventListener('mouseenter', function() {
    clearInterval(refreshSlider); // Xóa bỏ khoảng thời gian để tạm dừng chuyển đổi tự động
});

list.addEventListener('mouseleave', function() {
    refreshSlider = setInterval(() => { next.click() }, 5000); // Tiếp tục chuyển đổi tự động khi hover kết thúc
});



let list__items = document.querySelector('.slider__items .list__items');
let items__slideshow = document.querySelectorAll('.slider__items .list__items .items__slideshow');
let slider__dots = document.querySelectorAll('.slider__items .slider__dots li');
let sli__prev = document.getElementById('sli__prev');
let sli__next = document.getElementById('sli__next');

let sli__active = 0;
let lengthitems__slideshow = items__slideshow.length - 1;

sli__next.onclick = function(){
    if(sli__active + 2 > lengthitems__slideshow){
        sli__active = 0;
    }else{
        sli__active = sli__active + 2;
    }
    reloadSlider__items();
}
sli__prev.onclick = function(){
    if(sli__active - 2 < 0){
        sli__active = lengthitems__slideshow;
    }else{
        sli__active = sli__active - 2;
    }
}
let refreshSlider__items = setInterval(() => {sli__next.click()}, 2500);
function reloadSlider__items(){
    let checkLeft = items__slideshow[sli__active].offsetLeft;
    list__items.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider__items .slider__dots li.sli__active');
    lastActiveDot.classList.remove('sli__active');
    slider__dots[sli__active].classList.add('sli__active');
    clearInterval(refreshSlider__items);
    refreshSlider__items = setInterval(() => {sli__next.click()}, 2500);
}
slider__dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        sli__active = key;
        reloadSlider__items();
    })
})
list__items.addEventListener('mouseenter', function() {
    clearInterval(refreshSlider__items);
});

list__items.addEventListener('mouseleave', function() {
    refreshSlider__items = setInterval(() => { sli__next.click() }, 2500);
});