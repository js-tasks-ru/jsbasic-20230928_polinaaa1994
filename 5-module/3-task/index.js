function initCarousel() {
let carousel = document.querySelector('.carousel'); 
let slide = document.querySelector('.carousel__inner');
let width = slide.offsetWidth;
let count = 0;
let arrowLeft = document.querySelector('.carousel__arrow_left');
arrowLeft.style.display = 'none';
let arrowRight = document.querySelector('.carousel__arrow_right');


carousel.addEventListener('click', function(event) {
if (event.target.closest('.carousel__arrow_right')) {
  count++; 
  let pos =  width * count; 
  slide.style.transform = `translateX(${-pos}px)`;
  arrowLeft.style.display = ''
  if (pos > width * 2) {
    arrowRight.style.display = 'none';
  }else{
    arrowRight.style.display = '';
  }
}

if (event.target.closest('.carousel__arrow_left')) {
  count--;
  let pos =  width * count; 
  slide.style.transform = `translateX(${-pos}px)`; 
  arrowRight.style.display = ''
  if (pos < width * 1) {
  arrowLeft.style.display = 'none';
  }
}
})
}
