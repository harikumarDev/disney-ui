let currentSlide = 1;
showSlides(currentSlide);

function setSlide(n) {
  showSlides((currentSlide = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[currentSlide - 1].style.display = "block";
  dots[currentSlide - 1].className += " active";
}
