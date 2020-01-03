
var mySwiper = new Swiper ('.swiper-container', {
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