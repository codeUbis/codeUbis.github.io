let navBar = document.getElementById('menu');
let navBarToggle = document.getElementById('navbar-toggle');
let contactsForm = document.getElementById("form");
let searchDiv = document.getElementById('search-div');
let searchArrow = document.getElementById('search-arrow');
let searchForm = document.getElementById('search-form');
let seeMore = document.getElementById('more-offers');
let hotels = document.getElementsByClassName('hotel');
let hotelsContainer = document.getElementById('recomended-hotels');
let contacts = document.getElementById('contacts');
let screenSize = window.innerWidth;
let hotelsNumb = 4;
// window.onresize(console.log(screenSize));
// console.log(hotelsContainer);
// BURGER MENU================================================
navBarToggle.addEventListener('click', function () {
  navBar.classList.toggle('active');
});
// EXPAND SEARCH==============================================
searchDiv.addEventListener('click', function(){
  searchArrow.classList.toggle('pressed');
  searchForm.classList.toggle('search-burger');
});
// SCROLL CLASS REMOVE========================================
window.addEventListener('scroll', function (){
  let scrollPosition = window.scrollY;
  if(scrollPosition >= 10){
    navBar.classList.remove('active');
  };
});
// SEE MORE CONTENT=========================================== 
  // Checks the screen size
function jsUpdateSize(){
  // Get the dimensions of the viewport
  screenSize = window.innerWidth;
  screenWidth(screenSize);
  console.log(hotelsNumb);
};
window.onload = jsUpdateSize;// When the page loads first time
window.onresize = jsUpdateSize;// When changes size
function screenWidth (size){
  if(size > 1000){
    hotelsNumb = 4;
  }else if(size > 800 && size < 1000){
    hotelsNumb = 3;
  }else if(size < 800){
    hotelsNumb = 2;
  };
  for(let i = 0; i <hotels.length; i++){
    if(i < hotelsNumb){
      hotels[i].classList.add('display');
      hotels[i].classList.remove('hide');
    }else{
      hotels[i].classList.add('hide');
    };
  };
};
seeMore.addEventListener('click', function(){
  for(let i = 0; i < hotels.length; i++){
    if(i >= hotelsNumb){
      hotels[i].classList.toggle('hide');
    }   
  }
  hotelsContainer.scrollIntoView();
});
// SLIDER=====================================================
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
// CONTACTS===================================================
function contact(){
  contactsForm.classList.toggle("contactsDisplay");
  setTimeout(() => {
    contacts.scrollIntoView(false);
  }, 150); 
}
// SELECT INPUT===============================================
$(document).ready(function() {
  $('.js-example-basic-single').select2({
    placeholder: "select",
    width: '100%'
  });
});