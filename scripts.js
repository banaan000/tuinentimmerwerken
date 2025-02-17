document.addEventListener("DOMContentLoaded", function() {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

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

// document.addEventListener('DOMContentLoaded', function() {
//     var encodedPhone = 'MDYgNDIyIDY1IDQ2MA=='; 
//     var encodedAddress = 'SnVsaWFuYWxhYW4gNzAsIDM4NDMgQ0MgSGFyZGVyd2lqaw=='; 
//     var encodedUser = 'YmF1a2pldmFuZWx0ZW4='; 
//     var encodedDomain = 'Z21haWwuY29t'; 

//     var phone = atob(encodedPhone);
//     var address = atob(encodedAddress);
//     var user = atob(encodedUser);
//     var domain = atob(encodedDomain);

//     var contact = user + '@' + domain;

//     var phoneElement = document.getElementById('phone-code');
//     phoneElement.textContent = phone; 
//     phoneElement.removeAttribute('href'); 

//     var addressElement = document.getElementById('address-code');
//     addressElement.innerHTML = address.replace(/,/g, '<br>'); 

//     var contactElement = document.getElementById('contact-code');
//     contactElement.textContent = contact; 
//     contactElement.removeAttribute('href'); 

//     var iconLink = document.getElementById('icon-code');
//     iconLink.href = 'mailto:' + contact;
// });
