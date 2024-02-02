// Toggle navigation menu
document.getElementById('toggleNav').addEventListener('click', function () {
    document.getElementById('mainNav').style.display = (document.getElementById('mainNav').style.display === 'block') ? 'none' : 'block';
});

// Accordion functionality
var accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(function (accordion) {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.querySelector('.accordion-content');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// Modal functionality
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModal');
var closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Slider functionality
var slider = document.querySelector('.slider');
var slides = document.querySelectorAll('.slide');

var currentIndex = 0;

function showSlide(index) {
    slider.style.transform = 'translateX(' + (-index * 100) + '%)';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds