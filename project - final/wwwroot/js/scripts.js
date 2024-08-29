document.addEventListener("DOMContentLoaded", function() {
    const isIlaniLink = document.getElementById("isIlaniLink");
    const isIlaniText = document.getElementById("isIlaniText");

    isIlaniLink.addEventListener("mouseenter", function() {
        isIlaniText.style.display = "block";
    });

    isIlaniLink.addEventListener("mouseleave", function() {
        isIlaniText.style.display = "none";
    });
});
