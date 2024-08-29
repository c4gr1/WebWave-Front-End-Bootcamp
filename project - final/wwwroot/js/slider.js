let currentSlideIndex = 0;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

const slides = document.querySelectorAll('.slide');
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

function touchStart(index) {
    return function(event) {
        currentSlideIndex = index;
        startPos = getPositionX(event);
        isDragging = true;

        // Prevent any default behavior
        slider.classList.add('grabbing');

        // Stop any current animations
        cancelAnimationFrame(animationID);
    };
}

function touchEnd() {
    isDragging = false;

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50) {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex += 1;
        } else {
            currentSlideIndex = 0; // Last slide to first slide
        }
    }

    if (movedBy > 50) {
        if (currentSlideIndex > 0) {
            currentSlideIndex -= 1;
        } else {
            currentSlideIndex = slides.length - 1; // First slide to last slide
        }
    }

    setPositionByIndex();

    slider.classList.remove('grabbing');
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
}

function currentSlide(index) {
    currentSlideIndex = index;
    setPositionByIndex();
}
