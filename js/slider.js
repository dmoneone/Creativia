document.addEventListener("DOMContentLoaded", e => {
    const slides = document.querySelectorAll('.slider__slide');
    let current = 0;
    const runSlider = () => {
       for ( let i = 0; i < slides.length; i++ ) {
           slides[i].classList.add('opacity_0');
       } 
       slides[current].classList.remove('opacity_0');
    }
    
    setInterval(() => {
       if ( current + 1 == slides.length ) current = 0;
       else current++;
       runSlider(); 
    },5000)
    
    document.querySelector('.slider__btn_left').addEventListener('click', () => {
       if ( current - 1 == -1 ) current = slides.length - 1;
       else current--;
       runSlider();
    });
    
    document.querySelector('.slider__btn_right').addEventListener('click', () => {
       if ( current + 1 == slides.length ) current = 0;
       else current++;
       runSlider(); 
    });   
});