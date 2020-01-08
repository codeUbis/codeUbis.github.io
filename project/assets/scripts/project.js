
let navBar = document.getElementById('menu');
let navBarToggle = document.getElementById('navbar-toggle');
let contactsForm = document.getElementById("form");

// Burger menu;
navBarToggle.addEventListener('click', function () {
  navBar.classList.toggle('active');
});
// Scroll class remove;
window.addEventListener('scroll', function (){
  let scrollPosition = window.scrollY;
  if(scrollPosition >= 10){
    navBar.classList.remove('active');
    console.log(scrollPosition);
  }
});
let mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }   
  })

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

// // map functions
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

// Contacts
function contact(){
  contactsForm.classList.toggle("formDisplay");
}