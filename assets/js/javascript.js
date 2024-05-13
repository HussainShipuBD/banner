//     function rototeCube (e){
//     var cube = document.getElementsByID("cube");

//     var x = e.elientX - window.innerWidth / 2;
//     var y = e.elientX - window.innerHeight / 2;
//     var q = 0.15;
//     var i;

//     x = x * q * 1.25;
//     y = -y * q * 1.25;

//     for (i = 0; i< cube.length; i++){
//         cube[i].style.transform = "rotateY(" + x +" deg) rotateX("+ y +"deg)";
//     }
// }


const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const slides = document.querySelectorAll('.slide');

const numberOfSlides = slides.length;
let slideNumber = 0;

// slide next button
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if( slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}

// slide next button
prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    if( slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}