// This Js file constrols the carousel in the main page
// The slides variable stores all the slides elements
var slides = document.querySelectorAll('.slide');
var index = 0;

// Functions to control the back and forth of the slides
// Is works by addind the active class to slide it wants to show and removing this class from the slide it wants to hide
function prevSlide(){
    slides[index].classList.remove('active');
    index--;

    if(index < 0)
        index = slides.length -1;

    slides[index].classList.add('active');      
}

document.querySelector('.prev').addEventListener('click', e => {
    prevSlide();
});

function nextSlide(){
    slides[index].classList.remove('active');
    index++;

    if(index > slides.length -1)
        index = 0;

    slides[index].classList.add('active');      
}

setInterval(nextSlide, 5000);

document.querySelector('.next').addEventListener('click', e => {
    nextSlide();
});