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



const video = document.getElementById('waterVideo');
const overlayText = document.getElementById('overlayText');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    video.play();
    overlayText.classList.add('visible');
    } else {
    video.pause();
    overlayText.classList.remove('visible');
    }
});
}, {
threshold: 0.5
});

observer.observe(document.getElementById('ingredient-video-section'));

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
