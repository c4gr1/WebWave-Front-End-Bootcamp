let currentLogoIndex = 0;
let autoScrollInterval;

const logoSlides = document.querySelectorAll('.logo-slide');
const logoSlider = document.querySelector('.logo-slider');
const totalLogos = logoSlides.length;

function moveLogoSlide(direction) {
    if (direction === 1) {
        if (currentLogoIndex < totalLogos - 1) {
            currentLogoIndex++;
        } else {
            currentLogoIndex = 0; // Son resimden sonra ilk resme dön
        }
    } else {
        if (currentLogoIndex > 0) {
            currentLogoIndex--;
        } else {
            currentLogoIndex = totalLogos - 1; // İlk resimden önce son resme dön
        }
    }
    setLogoSlidePosition();
}

function setLogoSlidePosition() {
    logoSlider.style.transform = `translateX(${-currentLogoIndex * (150 + 30)}px)`; // 150px = logo-slide width + 30px = margin
}

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        moveLogoSlide(1);
    }, 5000); // 5 saniyede bir kaydır
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Fareyle basılı tutarak sürükleme işlevi
let isLogoDragging = false;
let startLogoPos = 0;
let currentLogoTranslate = 0;
let prevLogoTranslate = 0;

logoSlider.addEventListener('mousedown', (e) => {
    isLogoDragging = true;
    startLogoPos = e.pageX;
    stopAutoScroll();
});

logoSlider.addEventListener('mouseup', (e) => {
    isLogoDragging = false;
    const movedBy = currentLogoTranslate - prevLogoTranslate;

    if (movedBy < -50 && currentLogoIndex < totalLogos - 1) {
        currentLogoIndex++;
    }

    if (movedBy > 50 && currentLogoIndex > 0) {
        currentLogoIndex--;
    }

    setLogoSlidePosition();
    startAutoScroll();
});

logoSlider.addEventListener('mousemove', (e) => {
    if (isLogoDragging) {
        const currentPosition = e.pageX;
        currentLogoTranslate = prevLogoTranslate + currentPosition - startLogoPos;
        logoSlider.style.transform = `translateX(${currentLogoTranslate}px)`;
    }
});

logoSlider.addEventListener('mouseleave', () => {
    isLogoDragging = false;
    setLogoSlidePosition();
    startAutoScroll();
});

logoSlider.addEventListener('touchstart', (e) => {
    isLogoDragging = true;
    startLogoPos = e.touches[0].clientX;
    stopAutoScroll();
});

logoSlider.addEventListener('touchend', () => {
    isLogoDragging = false;
    const movedBy = currentLogoTranslate - prevLogoTranslate;

    if (movedBy < -50 && currentLogoIndex < totalLogos - 1) {
        currentLogoIndex++;
    }

    if (movedBy > 50 && currentLogoIndex > 0) {
        currentLogoIndex--;
    }

    setLogoSlidePosition();
    startAutoScroll();
});

logoSlider.addEventListener('touchmove', (e) => {
    if (isLogoDragging) {
        const currentPosition = e.touches[0].clientX;
        currentLogoTranslate = prevLogoTranslate + currentPosition - startLogoPos;
        logoSlider.style.transform = `translateX(${currentLogoTranslate}px)`;
    }
});

logoSlider.addEventListener('touchcancel', () => {
    isLogoDragging = false;
    setLogoSlidePosition();
    startAutoScroll();
});

// Slider otomatik kaydırmayı başlat
startAutoScroll();
