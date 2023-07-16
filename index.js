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





// sliders from Swipper.js Déclarations 

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
// slider strategy section 


// collaspse animation button 

function toggleCollapse(e) {
  console.log(e)
  e.preventDefault()
  console.log("ok")
  var content = e.nextElementSibling;
  console.log(content)
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
  
}
const clicked = (event) => {
  var button = event.target;
  if (button.tagName !== 'BUTTON') {
      button = button.parentElement;
  }
  var content = button.nextElementSibling;
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}








  