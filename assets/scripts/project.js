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
let mailSubmit = document.getElementById('mail-submit');
let nameInput = document.getElementById('name');
let subjectInput = document.getElementById('subject');
let textAreaInput = document.getElementById('textarea');
let screenSize = window.innerWidth;
let hotelsNumb = 4;
// console.log(hotelRating);
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
function updateSize(){
  // Get the dimensions of the viewport
  screenSize = window.innerWidth;
  screenWidth(screenSize);
  console.log(hotelsNumb);
  seeMore.textContent = "See More";
};
window.onload = updateSize;// When the page loads first time
window.onresize = updateSize;// When changes size
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
  if(seeMore.textContent === "See More"){
    seeMore.textContent = "See Less";
  }else{
    seeMore.textContent = "See More";
  };
  for(let i = 0; i < hotels.length; i++){
    if(i >= hotelsNumb){
      hotels[i].classList.toggle('hide');
    };   
  };
  hotelsContainer.scrollIntoView();
});
// OWL
// SLIDER=====================================================
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});
// CONTACTS===================================================
function contact(){
  contactsForm.classList.toggle("contactsDisplay");
  setTimeout(() => {
    contacts.scrollIntoView(false);
  }, 500); 
}
  //Reset values of input form
mailSubmit.addEventListener('click', function(){
  if(nameInput.value != "" && subjectInput.value != "" && textAreaInput.value != ""){
    alert('Message was sent sucessfuly!');
    nameInput.value = "";
    subjectInput.value = "";
    textAreaInput.value = "";
    contact();
  }else{
    alert('Please fill in all required fields');
  }
});
// SELECT INPUT===============================================
$(document).ready(function() {
  $('.js-example-basic-single').select2({
    placeholder: "select",
    width: '100%'
  });
});