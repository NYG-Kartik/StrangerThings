let items = document.querySelectorAll('.slider .list .item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let thumbnail = document.querySelectorAll('.thumbnail .item');

let item_count = items.length;
let act = 0;

next.onclick = function() {
    act = act + 1;
    if (act >= item_count) {
        act = 0;
    }
    showSlider();
}

prev.onclick = function() {
    act = act - 1;
    if (act < 0) {
        act = item_count - 1;
    }
    showSlider();
}

function showSlider() {
    let old = document.querySelector('.slider .list .item.active');
    let oldT = document.querySelector('.thumbnail .item.active');
    old.classList.remove('active');
    oldT.classList.remove('active');

    items[act].classList.add('active');
    thumbnail[act].classList.add('active');
}