document.addEventListener("DOMContentLoaded", function () {
    // İlk pagination: Başvurunu Bekleyen Etkinlikler için (12 kart)
    const eventCards = document.querySelectorAll('.events-section .card');
    const eventPaginationLinks = document.querySelectorAll('.events-section .pagination .page-link');
    const eventItemsPerPage = 12;
    let currentEventPage = 1;

    function showEventPage(page) {
        currentEventPage = page;
        const start = (page - 1) * eventItemsPerPage;
        const end = start + eventItemsPerPage;

        eventCards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    eventPaginationLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            if (!isNaN(page)) {
                showEventPage(page);
            }
        });
    });

    showEventPage(currentEventPage);

    // İkinci pagination: Başvuruya Kapanan Etkinlikler için (6 kart)
    const closedEventCards = document.querySelectorAll('.closed-events-section .card');
    const closedEventPaginationLinks = document.querySelectorAll('.closed-events-section .pagination .page-link');
    const closedEventItemsPerPage = 6;
    let currentClosedEventPage = 1;

    function showClosedEventPage(page) {
        currentClosedEventPage = page;
        const start = (page - 1) * closedEventItemsPerPage;
        const end = start + closedEventItemsPerPage;

        closedEventCards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    closedEventPaginationLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            if (!isNaN(page)) {
                showClosedEventPage(page);
            }
        });
    });

    showClosedEventPage(currentClosedEventPage);
});
