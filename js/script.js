let sliderImages = document.querySelectorAll('.slider image');
let slider = document.querySelector('.slider');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let currentSlide = 0;

function nextSlide() {
  if (currentSlide === sliderImages.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slider.style.transform = `translateX(-${currentSlide}00%)`;
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = sliderImages.length - 1;
  } else {
    currentSlide--;
  }
  slider.style.transform = `translateX(-${currentSlide}00%)`;
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
