let nex = document.querySelector(".next");
let pre = document.querySelector(".prev");
let slider = document.querySelector(".slider");

nex.addEventListener('click', function(){
    let slides = document.querySelectorAll(".slides");
    slider.appendChild(slides[0]);
})
pre.addEventListener('click', function(){
    let slides = document.querySelectorAll(".slides");
    slider.prepend(slides[slides.length - 1]);
})


const slides = document.querySelectorAll('.carousel-slide');
const next = document.querySelector('.nex');
const prev = document.querySelector('.pre');
let current = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
});
}

next.addEventListener('click', () => {
current = (current + 1) % slides.length;
showSlide(current);
});

prev.addEventListener('click', () => {
current = (current - 1 + slides.length) % slides.length;
showSlide(current);
});

// Auto-slide every 7 seconds
setInterval(() => {
current = (current + 1) % slides.length;
showSlide(current);
}, 7000);

const scrollBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
    scrollBtn.style.display = 'flex';
} else {
    scrollBtn.style.display = 'none';
}
});

function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}
