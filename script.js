/* 
Name: Zimeng Wang
File Name: script.js
Create Date: Oct 29, 2023 
Purpose: This JavaScript file contains functions to control the navigation menu and image carousel on the web page.
*/

// Function to toggle the mobile navigation menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Variables for controlling the image carousel
var items = document.querySelectorAll('.carousel-item');
var totalItems = items.length;
var currentIndex = 0;

// Initialize the first item as active
items[currentIndex].classList.add('active');

// Event listener for the "Next" button
document.querySelector('.next').addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add('active');
});

// Event listener for the "Previous" button
document.querySelector('.prev').addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  items[currentIndex].classList.add('active');
});