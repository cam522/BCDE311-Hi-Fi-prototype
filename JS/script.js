// Slideshow functionality
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


// Accordion functionality
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// Form submission with pop-up message
const form = document.getElementById('customForm');
const modal = document.getElementById('popupModal');
const closeBtn = document.getElementById('closeBtn');

if (form && modal && closeBtn) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    modal.classList.add('modal-show');
    form.reset();
  });

  closeBtn.addEventListener('click', function() {
    modal.classList.remove('modal-show');
  });
}