const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon')
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close')

function toggleMenu() {
    if(menu.classList.contains("show-menu")){
        menu.classList.remove("show-menu");
        icon.style.display = 'block';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        menu.classList.add("show-menu");
        icon.style.display = 'none';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}
icon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);




const slides = document.querySelectorAll('.carousel-slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
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
