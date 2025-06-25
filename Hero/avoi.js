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

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 7000; // Change slide every 7 seconds

    const showSlide = (index) => {
        // Ensure index wraps around correctly
        index = (index + totalSlides) % totalSlides;

        // Reset animations on all slides for content
        slides.forEach(slide => {
            slide.querySelectorAll('.animate-in').forEach(el => {
                // Remove all specific animation classes and generic animate-in
                el.classList.remove('fade-in-left', 'fade-in-right', 'fade-in-up', 'scale-in', 'zoom-in', 'animate-in', 'delay-1', 'delay-2', 'delay-3');
                // Trigger reflow by accessing offsetWidth
                void el.offsetWidth;
            });
            slide.classList.remove('active'); // Remove active from all slides
        });

        // Update slide position
        sliderContainer.style.transform = `translateX(-${index * 100}vw)`;

        // Update active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // Add 'active' class to current slide to trigger content animations
        const currentActiveSlide = slides[index];
        currentActiveSlide.classList.add('active');

        // Apply animations based on slide content elements and their initial classes
        currentActiveSlide.querySelectorAll('.animate-in').forEach(el => {
            // Re-add generic animate-in and specific animation classes if they were present
            // This is a more robust way to handle multiple animation types
            if (el.dataset.initialClasses) {
                 el.classList.add(...el.dataset.initialClasses.split(' '));
            } else {
                 // If no initial classes stored, add default ones or infer
                 el.classList.add('animate-in');
                 // For elements that only have animate-in, we might need a default animation
                 if (!el.classList.contains('fade-in-left') && !el.classList.contains('fade-in-right') &&
                     !el.classList.contains('fade-in-up') && !el.classList.contains('scale-in') &&
                     !el.classList.contains('zoom-in')) {
                     el.classList.add('fade-in-up'); // Fallback default
                 }
            }
        });

        currentSlide = index;
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const startSlider = () => {
        stopSlider(); // Clear any existing interval before starting a new one
        slideInterval = setInterval(nextSlide, intervalTime);
    };

    const stopSlider = () => {
        clearInterval(slideInterval);
    };

    // Store initial animation classes for each element for re-application
    slides.forEach(slide => {
        slide.querySelectorAll('.animate-in').forEach(el => {
            // Store all classes that begin with 'animate-in', 'fade-in', 'scale-in', 'zoom-in', 'delay'
            const classesToStore = Array.from(el.classList).filter(cls =>
                cls.startsWith('animate-in') || cls.startsWith('fade-in') ||
                cls.startsWith('scale-in') || cls.startsWith('zoom-in') || cls.startsWith('delay')
            );
            el.dataset.initialClasses = classesToStore.join(' ');
        });
    });


    // Event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            stopSlider(); // Stop auto-slide when a dot is clicked
            const slideIndex = parseInt(e.target.dataset.slide);
            showSlide(slideIndex);
            startSlider(); // Restart auto-slide after manual selection
        });
    });

    // Pause slider on hover
    sliderContainer.addEventListener('mouseenter', stopSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);

    // Initialize the first slide and start the slider
    showSlide(currentSlide);
    startSlider();
});