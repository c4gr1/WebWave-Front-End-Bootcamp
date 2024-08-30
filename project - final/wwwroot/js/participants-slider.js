let currentIndex_2 = 0;
const slidesToShow_2 = 2; // Her seferinde kaç slayt gösterilecek
const totalSlides_2 = document.querySelectorAll('.participant-slide_2').length;

const participantSlider_2 = document.querySelector('.participant-slider_2');
const nextButton_2 = document.querySelector('.next_2');
const prevButton_2 = document.querySelector('.prev_2');

let autoScrollInterval_2;
let isDragging_2 = false;
let startPos_2 = 0;
let currentTranslate_2 = 0;
let prevTranslate_2 = 0;

function updateSliderPosition_2() {
    const offsetX = currentIndex_2 * (-100 / slidesToShow_2); 
    participantSlider_2.style.transform = `translateX(${offsetX}%)`;
}

function showNext_2() {
    if (currentIndex_2 < totalSlides_2 - slidesToShow_2) {
        currentIndex_2 += slidesToShow_2;
    } else {
        currentIndex_2 = 0; // Başa dön
    }
    updateSliderPosition_2();
}

function showPrev_2() {
    if (currentIndex_2 > 0) {
        currentIndex_2 -= slidesToShow_2;
    } else {
        currentIndex_2 = totalSlides_2 - slidesToShow_2; // Sona dön
    }
    updateSliderPosition_2();
}

function startAutoScroll_2() {
    stopAutoScroll_2(); // Mevcut intervali durdurur.
    autoScrollInterval_2 = setInterval(showNext_2, 5000); // 5 saniyede bir kaydır
}

function stopAutoScroll_2() {
    if (autoScrollInterval_2) {
        clearInterval(autoScrollInterval_2);
    }
}

// Fare ve dokunma olaylarını işleme
function handleDragStart_2(e) {
    isDragging_2 = true;
    startPos_2 = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    stopAutoScroll_2();
}

function handleDragMove_2(e) {
    if (isDragging_2) {
        const currentPosition_2 = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        currentTranslate_2 = prevTranslate_2 + currentPosition_2 - startPos_2;
        participantSlider_2.style.transform = `translateX(${currentTranslate_2}px)`;
    }
}

function handleDragEnd_2() {
    isDragging_2 = false;

    const movedBy = currentTranslate_2 - prevTranslate_2;

    if (movedBy < -50 && currentIndex_2 < totalSlides_2 - slidesToShow_2) {
        showNext_2();
    } else if (movedBy > 50 && currentIndex_2 > 0) {
        showPrev_2();
    } else {
        updateSliderPosition_2();
    }

    prevTranslate_2 = currentTranslate_2;
    startAutoScroll_2();
}

// Etkinlikleri dinleme
participantSlider_2.addEventListener('mousedown', handleDragStart_2);
participantSlider_2.addEventListener('mousemove', handleDragMove_2);
participantSlider_2.addEventListener('mouseup', handleDragEnd_2);
participantSlider_2.addEventListener('mouseleave', handleDragEnd_2);

participantSlider_2.addEventListener('touchstart', handleDragStart_2);
participantSlider_2.addEventListener('touchmove', handleDragMove_2);
participantSlider_2.addEventListener('touchend', handleDragEnd_2);
participantSlider_2.addEventListener('touchcancel', handleDragEnd_2);

// Düğmelere tıklama olaylarını ekle
nextButton_2.addEventListener('click', showNext_2);
prevButton_2.addEventListener('click', showPrev_2);

// Otomatik kaydırmayı başlat
startAutoScroll_2();
