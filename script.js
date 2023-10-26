function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



var items = document.querySelectorAll('.carousel-item');
var totalItems = items.length;
var currentIndex = 0;

items[currentIndex].classList.add('active');

document.querySelector('.next').addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  items[currentIndex].classList.add('active');
});