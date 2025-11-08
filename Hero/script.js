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


const sliderContainer = document.querySelector('.slider-container'); // ADD THIS
const slides = document.querySelectorAll('.slide'); // Change to .slide (based on HTML)
const dots = document.querySelectorAll('.dot'); // ADD THIS
// NOTE: Your JS uses .carousel-slide, but your HTML uses .slide. I've corrected it to .slide.
// Also, your JS is missing the element selection for the dots.

const next = document.querySelector('.nex');
const prev = document.querySelector('.pre');
let current = 0;
const totalSlides = slides.length; // Use slides.length (which is 5 in your current HTML)

function showSlide(index) {
    // Wrap around logic
    index = (index + totalSlides) % totalSlides;
    if (index < 0) {
        index = totalSlides - 1;
    }

    // 1. Move the container (The actual sliding animation)
    sliderContainer.style.transform = `translateX(-${index * 100}vw)`;

    // 2. Update active class for content animations and dots
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    dots.forEach(dot => dot.classList.remove('active'));
    // Make sure the dot elements exist before trying to access them
    if (dots.length > index) {
        dots[index].classList.add('active');
    }

    current = index;
}

next.addEventListener('click', () => {
    showSlide(current + 1);
});

prev.addEventListener('click', () => {
    showSlide(current - 1);
});

// Auto-slide every 7 seconds
setInterval(() => {
    showSlide(current + 1);
}, 7000);

// Initialize the first slide on load (since the first slide already has the 'active' class in HTML)
showSlide(current); 

function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}


const subscribe = document.querySelector('.subscribe');
console.log(subscribe);

subscribe.addEventListener("click", () => {
    alert(`Subscription successful! \nYou will receive a reply via email`)
})