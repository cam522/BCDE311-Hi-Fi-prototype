let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (!slides.length) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";

  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

window.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  setInterval(() => {
    showSlides(slideIndex += 1);
  }, 4000);
});