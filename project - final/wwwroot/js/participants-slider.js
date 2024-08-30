let currentIndex_2 = 0;
const slidesToShow_2 = 2; // Her seferinde kaç slayt gösterilecek
const totalSlides_2 = document.querySelectorAll('.participant-slide_2').length;

const participantSlider_2 = document.querySelector('.participant-slider_2');
const nextButton_2 = document.querySelector('.next_2');
const prevButton_2 = document.querySelector('.prev_2');

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

nextButton_2.addEventListener('click', showNext_2);
prevButton_2.addEventListener('click', showPrev_2);

// Otomatik kaydırma (isteğe bağlı)
setInterval(showNext_2, 5000); // 5 saniyede bir kaydır
