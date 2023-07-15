var header = document.querySelector('.parallax-header');
var headerContent = document.querySelector('.header-content');

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset ;
  header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  headerContent.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
});

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var h1 = document.querySelector('h1');
    h1.classList.add('appear');
  }, 800);
});


document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});


// sliders from Swipper.js Déclarations 

// slider strategy section 

