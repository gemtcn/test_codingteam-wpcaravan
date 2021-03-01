import $ from "jquery";
import slick from "slick-slider";
import bootstrap from "bootstrap/dist/js/bootstrap";


function showMenu(buttonId, menuClass, body) {
  $(buttonId).on('click', function () {
    if ($(menuClass).hasClass('show')) {
      $(this).children('img').attr('src', '../dist/images/icon-ham.png');
      $(menuClass).removeClass('show');
      $(body).removeClass('no-scroll');
    } else {
      $(this).children('img').attr('src', '../dist/images/icon-close.png');
      $(menuClass).addClass('show');
      $(body).addClass('no-scroll');
    }
  })
}

// Show Sub menu
showMenu('#toggleSubMenu', '.crv-main--header__sub');

// Show mobile menu
showMenu('#toggleMobileMenu', '.crv-main--header__mobile--menu', 'body');

// Product slider
$('.crv-main--keyvisual__slider').slick({
  dots: false,
  arrow: false,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 300,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Scroll to top button
$(window).on('scroll', function () {
  if ($(this).scrollTop()) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
});

// Back to top
$("#toTop").on('click', function () {
  $("html, body").animate({ scrollTop: 0 }, 0);
});