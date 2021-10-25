// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// let deger;

// document.querySelector(".yukari").onclick = async function () {
//   deger = window.scrollY;
//   for (deger > 0; (deger = deger - 5); ) {
//     await sleep(1);
//     window.scrollTo(pageXOffset, deger);
//     console.log(deger);
//   }
//   window.scrollTo(pageXOffset, 0);

//   // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
// };



$(document).ready(function () {
  $(".header-slide").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    // center:true,
    // responsiveClass:true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
        // nav:true,
      },
    },
  });
});

$(document).ready(function () {
  $(".recent-work-slider").owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    // nav:true,
    // responsiveClass:true,
    responsive: {
      0: {
        items: 1.3,
      },
      600: {
        items: 1.7,
      },
      768: {
        items: 2.3,
      },
      1000: {
        items: 2.7,
      },
      1200: {
        items: 4.3,
      },
    },
  });
});

$(document).ready(function () {
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    dots: true,
    // responsiveClass:true,
    responsive: {
      0: {
        items: 1.1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2.3,
      },
      1000: {
        items: 2.3,
      },
      1200: {
        items: 3.4,
      },
    },
  });
});

$(document).ready(function () {
  $(".DiscountedProducts-slide").owlCarousel({
    loop: true,
    margin: 30,
    // center:true,
    // responsiveClass:true,
    responsive: {
      0: {
        items: 1.3,
      },
      600: {
        items: 2,
        // nav:false
      },
      768: {
        items: 2.3,
        // nav:false
      },
      1000: {
        items: 3.3,
        // nav:true,
        loop: true,
      },
      1200: {
        items: 3.7,
        // nav:true,
        loop: true,
      },
      1300: {
        items: 4,
        // nav:true,
        loop: true,
      },
      1400: {
        items: 4.4,
        // nav:true,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".PlatformCategories-slide").owlCarousel({
    loop: true,
    margin: 30,
    // center:true,
    // responsiveClass:true,
    responsive: {
      0: {
        items: 1.3,
      },
      600: {
        items: 1.7,
        // nav:false
      },
      768: {
        items: 2.3,
        // nav:false
      },
      1000: {
        items: 2.7,
        // nav:true,
        loop: true,
      },
      1200: {
        items: 4,
        // nav:true,
        loop: true,
      },
    },
  });
});
