document.addEventListener("DOMContentLoaded", function () {
    const cardsPerPage = 12; // Her sayfada gösterilecek kart sayısı
    let currentPage = 1;

    const cards = Array.from(document.querySelectorAll('.row .col-md-4')); // Kartları seçin
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    function showPage(page) {
        currentPage = page;
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        // Kartları gizle ve sadece bu sayfada olanları göster
        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // Sayfa düğmelerini güncelle
        document.querySelectorAll('.pagination .page-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.pagination .page-item a[data-page="${page}"]`).parentElement.classList.add('active');
    }

    // Sayfa değişimi için event listener ekleyin
    document.querySelectorAll('.pagination .page-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            if (!isNaN(page)) {
                showPage(page);
            }
        });
    });

    // Önceki ve sonraki sayfa düğmeleri için event listener ekleyin
    document.getElementById('prev-page').addEventListener('click', function (event) {
        event.preventDefault();
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    document.getElementById('next-page').addEventListener('click', function (event) {
        event.preventDefault();
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    // İlk sayfayı göster
    showPage(1);
});
