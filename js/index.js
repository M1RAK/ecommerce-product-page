// Mobile menu
const menuToggler = document.querySelector(".toggle")
const linksContainer = document.querySelector(".links-container")
const listLinks = document.querySelectorAll(".list-link")

function toggle() {
  menuToggler.classList.toggle("active")
  linksContainer.classList.toggle("active")
}

menuToggler.addEventListener("click", toggle)

listLinks.forEach((link) => {
  link.addEventListener("click", () => {
    linksContainer.classList.remove("active")
  })
})

// Lightbox toggle
const heroImg = document.querySelector(".hero-image")
const overLay = document.querySelector("#overlay")
const lightboxContainer = document.querySelector(".lightbox-container")
const lightboxClose = document.querySelector(".lightbox-close")

// Close Functionality makes image-grid work by removing ".active"
const toggleLightbox = () => {
  overLay.classList.toggle("active")
  lightboxContainer.classList.toggle("active")
}

heroImg.addEventListener("click", toggleLightbox)
lightboxClose.addEventListener("click", toggleLightbox)

// Image Grid

let slideIndex = 1
slideShow(slideIndex)

// Next/previous controls
function toggleSlide(n) {
  slideShow((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  slideShow((slideIndex = n))
}

function slideShow(n) {
  const slides = document.querySelector(".hero-image")
  const lightboxSlide = document.querySelector(".hero-lg")
  const smImages = document.querySelectorAll(".lg")

  
  if (n === 0) {
    slideIndex = 4
  }
  if (n === 5) {
    slideIndex = 1
  }

  lightboxSlide.innerHTML = `
   <img src="./images/image-product-${slideIndex}.jpg" class="hero" alt="hero-image" />`

  // Checks if lightbox Container is active; disables image toggle on main hero
  slides.innerHTML = `
   <img src="./images/image-product-${
     lightboxContainer.classList.contains("active") ? 1 : slideIndex
   }.jpg" alt="hero-image" />`

  smImages.forEach((img) => img.classList.remove("active"))

  smImages[slideIndex - 1].classList.add("active")

  // Because [] are zero indexed; Element 1 - 1 = 1
}
