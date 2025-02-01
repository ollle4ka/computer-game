const slides = document.querySelector('.slides');
const slideWidth = 300;
let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.children.length;
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(nextSlide, 3000);