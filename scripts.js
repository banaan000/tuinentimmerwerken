
// Carousel Functionality
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

// Auto-rotate carousel
setInterval(() => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}, 10000);

let currentIndex2 = 0;
const testimonials = document.querySelectorAll('.testimonial-box');
const dots = document.querySelectorAll('.dot');

function changeTestimonial(index) {
    testimonials[currentIndex2].classList.remove('active');
    dots[currentIndex2].classList.remove('active');

    currentIndex2 = index;

    testimonials[currentIndex2].classList.add('active');
    dots[currentIndex2].classList.add('active');
}

// Automatisch wisselen
function autoChange() {
    let nextIndex = (currentIndex2 + 1) % testimonials.length;
    changeTestimonial(nextIndex);
}

setInterval(autoChange, 10000); // Elke 10 seconden wisselen

// Maak de dots klikbaar
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => changeTestimonial(index));
});

document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("nav-menu").classList.toggle("active");
});