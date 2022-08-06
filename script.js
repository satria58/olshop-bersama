const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 52 || document.documentElement.scrollTop > 52) {
    header.classList.add('sticky');
  }
  else {
    header.classList.remove('sticky');
  }
});

window.addEventListener('load', () => {
  if (document.body.scrollTop > 52 || document.documentElement.scrollTop > 52) {
    header.classList.add('sticky');
  }
  else {
    header.classList.remove('sticky');
  }
});

const navbar = document.querySelector('.navbar');
navbar.addEventListener('click', evt => {
  if (evt.target.classList.contains('nav-link') || evt.target.classList.contains('close-menu') ) {
    navbar.classList.remove('aktif');
  }
});

const openMenu = document.querySelector('.open-menu');
openMenu.addEventListener('click', () => {
  navbar.classList.toggle('aktif');
});


// ---------- clients ----------
var swiper = new Swiper(".clients-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 64,
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
    },
    autoplay: {
      delay: 5000,
    },
});

// ---------- features ----------
var swiper = new Swiper(".features-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1250: {
          slidesPerView: 4,
        },
    },
    autoplay: {
      delay: 5000,
    },
});

// ---------- review ----------
var swiper = new Swiper(".review-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1250: {
          slidesPerView: 4,
        },
    },
    autoplay: {
      delay: 5000,
    },
});
