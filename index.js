let items = document.querySelectorAll('.slider .list .item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let item_count = items.length;
let act = 0;

next.onclick = function() {
    act = (act + 1) % item_count;
    showSlider();
}

prev.onclick = function() {
    act = (act - 1 + item_count) % item_count;
    showSlider();
}

function showSlider() {
    let oldItem = document.querySelector('.slider .list .item.active');
    let oldThumbnail = document.querySelector('.thumbnail .item.active');

    oldItem.classList.remove('active');
    oldThumbnail.classList.remove('active');

    items[act].classList.add('active');
    thumbnails[act].classList.add('active');
}