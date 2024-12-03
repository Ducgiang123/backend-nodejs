const images = ["pic1.jpg", "pic2.jpg","pic4.jpg", "pic3.jpg", "pic5.jpg"]; 
let currentIndex = 0; 

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");


document.querySelector(".profile-photo img").addEventListener("click", () => {
    currentIndex = 0;
    updateModalImage();
    modal.style.display = "flex"; 
});
function updateModalImage() {
    modalImage.src = images[currentIndex];
}
closeModal.addEventListener("click", () => {
    modal.style.display = "none"; 
});

prevImage.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalImage();
});

nextImage.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalImage();
});


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
});

window.onload = () => {
    modal.style.display = "none";
};


window.addEventListener("keydown", (event) => {
    if (modal.style.display === "flex") {
        if (event.key === "ArrowLeft") {
            // Nhấn phím mũi tên trái
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateModalImage();
        } else if (event.key === "ArrowRight") {
            // Nhấn phím mũi tên phải
            currentIndex = (currentIndex + 1) % images.length;
            updateModalImage();
        }
    }
    if(event.key === "Escape"){
        modal.style.display = "none";
    }
});