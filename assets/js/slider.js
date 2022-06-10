var swiper = new Swiper(".trust-companies-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0:{
      slidesPerView: 2.6,
    },
    640: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    1279: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiper2 = new Swiper(".voitex-solutions-slider", {
    slidesPerView: 7,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      400: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      719: {
        slidesPerView: 3,
      },
      955: {
        slidesPerView: 4,
      },
      1023: {
        slidesPerView: 4.5,
      },
      1139: {
        slidesPerView: 5.2,
      },
      1247: {
        slidesPerView: 5.7,
      },
      1336: {
        slidesPerView: 7,
        spaceBetween: 15,
      },
    },
});

var swiper = new Swiper(".technologies-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0:{
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1279: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:1023px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {
      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
	  // or/and do nothing
	  return;
      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        return enableSwiper();
      }

  };

  const enableSwiper = function() {
    mySwiper = new Swiper ('.home-town-technologies', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      // pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2.2,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2.9,
          spaceBetween: 15,
        },
      },
    });

  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();

})(); /* IIFE end */


var swiper = new Swiper(".about-trust-companies-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0:{
      slidesPerView: 1.9,
    },
    640: {
      slidesPerView: 3.4,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});



var swiper = new Swiper(".about-many-productSwiper", {
  spaceBetween: 0,
  // autoHeight: true,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",
});
var swiper2 = new Swiper(".about-many-product", {
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",clickable: true,
  },
  direction: "vertical",
  thumbs: {
    swiper: swiper,
  },
});