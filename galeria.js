const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex"; // Pokazuje modal
        modalImg.src = img.src; // Przypisuje obraz do modala
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Ukrywa modal
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Ukrywa modal po kliknięciu w tło
    }
});