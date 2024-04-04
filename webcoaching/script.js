const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let sliderNumber = 1;
const length = images.length;


const nextSlide=( )=>
{
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
    sliderNumber++;
};

const prevSlide=( )=>
{
    slider.style.transform = `translateX(-${(sliderNumber-2) * 800}px)`;
    sliderNumber--;
};

const getFirstSlide=( )=>
{
    slider.style.transform = `translateX(0px)`;
        sliderNumber = 1;
};

const getLastSlide=( )=>
{
    slider.style.transform = `translateX(-${
      (length-1)*800}px)`;
        sliderNumber = length;
};


right.addEventListener('click', () => {
    sliderNumber < length ?
       nextSlide() :
    
        getFirstSlide();
       
    
});

left.addEventListener('click', () => {
    sliderNumber > 1 ?
        prevSlide() :
        getLastSlide();
});



