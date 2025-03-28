document.addEventListener("DOMContentLoaded", function () {
    // **Fix voor het hamburger-menu**
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-container");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // **Fix voor de carousel**
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    if (carouselInner && carouselItems.length > 0 && prevButton && nextButton) {
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
    }

    // **Fix voor testimonials**
    const testimonials = document.querySelectorAll('.testimonial-box');
    const dots = document.querySelectorAll('.dot');

    if (testimonials.length > 0 && dots.length > 0) {
        let currentIndex2 = 0;

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
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect on scroll
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".decode");

    elements.forEach(el => {
      const encoded = el.dataset.plain;
      try {
        const decoded = decodeURIComponent(escape(atob(encoded)));
        // Detect if it's a phone number or email for auto-linking
        if (decoded.includes('@')) {
          el.innerHTML = `<a href="mailto:${decoded}">${decoded}</a>`;
        } else if (/^\d{10}$/.test(decoded)) {
          el.innerHTML = `<a href="tel:${decoded}">${decoded}</a>`;
        } else {
          el.textContent = decoded;
        }
      } catch (e) {
        console.error('Failed to decode:', encoded);
      }
    });
  });