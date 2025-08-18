let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

// ==== Carousel buttons ====
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (nextBtn && prevBtn && slides.length > 0) {
  nextBtn.addEventListener('click', () => {
    changeSlide(1);
  });

  prevBtn.addEventListener('click', () => {
    changeSlide(-1);
  });

  function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
  }

  // ==== Auto-slide every 5 seconds ====
  setInterval(() => {
    changeSlide(1);
  }, 5000);
}

// ==== Hamburger Menu ====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navbar-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ==== Toggle Show/Hide Products ====
const showMoreBtn = document.getElementById("showMore");
const hiddenProducts = document.querySelectorAll(".card.hidden");

if (showMoreBtn && hiddenProducts.length > 0) {
  showMoreBtn.addEventListener("click", () => {
    hiddenProducts.forEach(product => product.classList.toggle("hidden")); // alterna la clase
    // Cambia el texto del botón
    if (hiddenProducts[0].classList.contains("hidden")) {
      showMoreBtn.textContent = "Show More";
    } else {
      showMoreBtn.textContent = "Show Less";
    }
  });
}





