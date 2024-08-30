let currentSlideIndex = 0;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;
let animationID;
let autoSlideInterval = 5000; // 5 saniye
let slideInterval;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');

slides.forEach((slide, index) => {
    // Touch events
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);

    // Mouse events
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);
});

window.addEventListener('resize', setPositionByIndex);

// Bağlam Menüsünü Engelle
slider.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Resmin Sürüklenmesini Engelle
const images = document.querySelectorAll('.slide img');
images.forEach(img => {
    img.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });
});

// Otomatik geçişi başlat
startAutoSlide();

function touchStart(index) {
    return function(event) {
        currentSlideIndex = index;
        startPos = getPositionX(event);
        isDragging = true;

        // Transition iptal edilir
        slider.style.transition = 'none';

        // Otomatik geçişi durdur
        clearInterval(slideInterval);

        // Cancel the animation frame if it is in progress
        cancelAnimationFrame(animationID);
    };
}

function touchEnd() {
    isDragging = false;

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentSlideIndex < slides.length - 1) {
        currentSlideIndex += 1;
    } else if (movedBy > 100 && currentSlideIndex > 0) {
        currentSlideIndex -= 1;
    }

    setPositionByIndex();
    updateDots();

    slider.style.transition = 'transform 0.3s ease-out';

    // Otomatik geçişi tekrar başlatmadan önce sıfırlayın
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, autoSlideInterval);
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
        setSliderPosition();
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
    currentTranslate = currentSlideIndex * -slider.offsetWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, autoSlideInterval);
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    setPositionByIndex();
    updateDots();
}

function moveSlide(direction) {
    if (direction === -1 && currentSlideIndex > 0) {
        currentSlideIndex -= 1;
    } else if (direction === 1 && currentSlideIndex < slides.length - 1) {
        currentSlideIndex += 1;
    } else if (direction === 1 && currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0; // Last slide to first slide
    } else if (direction === -1 && currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1; // First slide to last slide
    }
    setPositionByIndex();
    updateDots(); // Update dots after slide changes

    // Otomatik geçişi tekrar başlatmadan önce sıfırlayın
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, autoSlideInterval);
}

function currentSlide(index) {
    currentSlideIndex = index;
    setPositionByIndex();
    updateDots(); // Update dots when a dot is clicked

    // Otomatik geçişi tekrar başlatmadan önce sıfırlayın
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, autoSlideInterval);
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active-dot');
        if (index === currentSlideIndex) {
            dot.classList.add('active-dot');
        }
    });
}
