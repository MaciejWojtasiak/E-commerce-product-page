const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');

hamburgerBtn.addEventListener('click', () => {
    document.querySelector('.header-nav').classList.toggle('menu-active');
});

closeBtn.addEventListener('click', () => {
    document.querySelector('.header-nav').classList.toggle('menu-active');
});

// slider

const sliderImages = document.querySelectorAll('.slider-item');
console.log(sliderImages)