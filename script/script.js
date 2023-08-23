// Obtener los elementos del carousel
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

// Función para mostrar el slide actual y ocultar los demás
function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}

// Función para cambiar al slide anterior
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

// Función para cambiar al slide siguiente
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Agregar eventos a los botones de control
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Iniciar el carousel
showSlide();

// Automatizar el cambio de slides cada 10 segundos
setInterval(nextSlide, 3000);


// JavaScript para el desplazamiento del logo y las cards
const logo1 = document.querySelector('.logo1 img');
const cards = document.querySelectorAll('.card');

function checkScroll() {
  const logoScrollPosition = logo1.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (logoScrollPosition < windowHeight - 100) {
    logo1.style.opacity = '1';
    logo1.style.animation = 'slideIn 0.5s ease';
  }

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardScrollPosition = card.getBoundingClientRect().top;

    if (cardScrollPosition < windowHeight - 100) {
      card.classList.add('show');
    }
  }
}

window.addEventListener('scroll', checkScroll);
