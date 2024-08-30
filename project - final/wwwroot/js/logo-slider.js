let currentLogoIndex = 0;
let autoScrollInterval;
let isLogoDragging = false;
let startLogoPos = 0;
let currentLogoTranslate = 0;
let prevLogoTranslate = 0;
const logoSlides = document.querySelectorAll('.logo-slide');
const logoSlider = document.querySelector('.logo-slider');
const totalLogos = logoSlides.length;

// Slider pozisyonunu ayarlama
function setLogoSlidePosition() {
    logoSlider.style.transform = `translateX(${-currentLogoIndex * (150 + 30)}px)`; // 150px = logo-slide width + 30px = margin
}

// Slider'ı belirli bir yönde kaydırma (manuel kontrol)
function moveLogoSlide(direction) {
    if (direction === 1) {
        currentLogoIndex = (currentLogoIndex + 1) % totalLogos; // Son resimden sonra ilk resme dön
    } else {
        currentLogoIndex = (currentLogoIndex - 1 + totalLogos) % totalLogos; // İlk resimden önce son resme dön
    }
    setLogoSlidePosition();
}

// Otomatik kaydırmayı başlatma
function startAutoScroll() {
    stopAutoScroll(); // Mevcut zamanlayıcıyı sıfırla
    autoScrollInterval = setInterval(() => {
        moveLogoSlide(1);
    }, 5000); // 5 saniyede bir kaydır
}

// Otomatik kaydırmayı durdurma
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Fare veya dokunma olaylarını işleme
function handleStart(e) {
    isLogoDragging = true;
    startLogoPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    currentLogoTranslate = prevLogoTranslate;
    stopAutoScroll();
}

function handleMove(e) {
    if (isLogoDragging) {
        const currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        currentLogoTranslate = prevLogoTranslate + currentPosition - startLogoPos;
        logoSlider.style.transform = `translateX(${currentLogoTranslate}px)`;
    }
}

function handleEnd() {
    if (isLogoDragging) {
        const movedBy = currentLogoTranslate - prevLogoTranslate;

        if (movedBy < -50) {
            moveLogoSlide(1); // Sağ tarafa kaydır
        } else if (movedBy > 50) {
            moveLogoSlide(-1); // Sol tarafa kaydır
        } else {
            setLogoSlidePosition(); // Hareket yeterli değilse geri döndür
        }

        isLogoDragging = false;
        prevLogoTranslate = currentLogoTranslate;
        startAutoScroll();
    }
}

// Etkinlikleri dinleme
logoSlider.addEventListener('mousedown', handleStart);
logoSlider.addEventListener('mousemove', handleMove);
logoSlider.addEventListener('mouseup', handleEnd);
logoSlider.addEventListener('mouseleave', handleEnd);

logoSlider.addEventListener('touchstart', handleStart);
logoSlider.addEventListener('touchmove', handleMove);
logoSlider.addEventListener('touchend', handleEnd);
logoSlider.addEventListener('touchcancel', handleEnd);

// Slider otomatik kaydırmayı başlat
startAutoScroll();
