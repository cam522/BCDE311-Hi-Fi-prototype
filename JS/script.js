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


// Confetti animation functionality
function launchConfetti() {
  const confettiLayer = document.getElementById('confetti-layer');

  if (!confettiLayer) return;

  const colors = ['#ff4d4d', '#ffd93d', '#4bc0c8', '#7ccf5a', '#ff8fab', '#8b5cf6', '#F28C28'];
  confettiLayer.innerHTML = '';

  for (let i = 0; i < 120; i++) {
    const piece = document.createElement('span');
    const size = Math.random() * 10 + 6;
    const xOffset = (Math.random() - 0.5) * 200;
    const fallDistance = window.innerHeight + 120;
    const rotation = (Math.random() * 720) - 360;

    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * window.innerWidth}px`;
    piece.style.width = `${size}px`;
    piece.style.height = `${size * 0.75}px`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--x', `${xOffset}px`);
    piece.style.setProperty('--fall-distance', `${fallDistance}px`);
    piece.style.setProperty('--rotation', `${rotation}deg`);
    piece.style.animationDelay = `${(Math.random() * 0.5).toFixed(2)}s`;
    confettiLayer.appendChild(piece);
  }

  setTimeout(() => {
    confettiLayer.innerHTML = '';
  }, 4000);
}


// Form submission with pop-up message for donation page
const form = document.getElementById('customForm');
const modal = document.getElementById('popupModal');
const closeBtn = document.getElementById('closeBtn');

if (form && modal && closeBtn) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    modal.classList.add('modal-show');
    launchConfetti();
    form.reset();
  });

  closeBtn.addEventListener('click', function() {
    modal.classList.remove('modal-show');
  });
}