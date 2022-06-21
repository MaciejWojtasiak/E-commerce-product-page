const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');

hamburgerBtn.addEventListener('click', () => {
    document.querySelector('.header-nav').classList.toggle('menu-active');
});

closeBtn.addEventListener('click', () => {
    document.querySelector('.header-nav').classList.toggle('menu-active');
});

// slider

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const sliderImages = document.querySelectorAll('.slider-item');
const sliderLength = sliderImages.length;
let current = 0;

function initializeSlider() {
    document.querySelector(`[data-id = "${current}"]`).classList.add('active');
}
initializeSlider();

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
    document.querySelector(`[data-id = "${current}"]`).classList.remove('active');
    current++;
    if (current == sliderLength) current = 0;
    document.querySelector(`[data-id = "${current}"]`).classList.add('active');
}

function prevSlide() {
    document.querySelector(`[data-id = "${current}"]`).classList.remove('active');
    current--;
    if (current == -1) current = sliderLength - 1;
    document.querySelector(`[data-id = "${current}"]`).classList.add('active');
}