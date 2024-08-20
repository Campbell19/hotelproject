const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');

let index = 0;

function updateCarousel() {
    const offset = -index * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});