(function($) {
  "use strict";

  $(window).on('load', function () {
		preloader();
		wowAnimation();
	});


  /*------------------------------------------
	= preloader
	-------------------------------------------*/
	function preloader() {
		$('#xb-loadding').fadeOut('slow', function () { $(this).remove(); });
	};

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(".scroll").on('click', function() {
    $("html, body").animate({scrollTop: 0}, 0);
    return false; 
  });
  // Back To Top - End
  // --------------------------------------------------

  // preloader - start
  // --------------------------------------------------
  /*$(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){
      $(this).remove();
    });
  });*/
  // preloader - end
  // --------------------------------------------------

  // Mobile Menu Button Class Chnage - Start
  // --------------------------------------------------
  $(".mobile_menu_btn").on('click', function(){
    $(".mobile_menu_btn > i").toggleClass("far fa-bars fa-solid fa-xmark");
  });
  // Mobile Menu Button Class Chnage - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  if ($('.stricky').length) {
    $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
  }
  $(window).on('scroll', function () {
    if ($('.stricked-menu').length) {
      var headerScrollPos = 150;
      var stricky = $('.stricked-menu');
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass('stricky-fixed');
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass('stricky-fixed');
      }
    }
  });
  // Sticky Header - End
  // --------------------------------------------------

  // Wow JS - Start
  // --------------------------------------------------


  function wowAnimation() {
    var wow = new WOW({
      animateClass: 'animated',
      offset: 100,
      mobile: true,
      duration: 1000,
    });
    wow.init();
	}
  // Wow JS - End
  // --------------------------------------------------

  // Scroll Spy - Start
  // --------------------------------------------------
  $('a.scrollspy-btn[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 60)
        }, 0, "easeInOutExpo");
        return false;
      }
    }
  });
  // Scroll Spy - End
  // --------------------------------------------------

  // Inner Pages Carousel - Start
  // --------------------------------------------------
  const innerPagesCarousel = new Swiper('.inner_pages_carousel', {
    loop: true,
    speed: 10000,
    freeMode: true,
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
  const innerPagesCarouselTwo = new Swiper('.inner_pages_carousel_2', {
    loop: true,
    speed: 10000,
    freeMode: true,
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
  // Inner Pages Carousel - End
  // --------------------------------------------------

  // Review Section Collapse - Start
  $('.loadmore_button .btn').on('click', function() {
    $('.review_blocks_wrapper').addClass("active");
  });
  // Review Section Collapse - End


  // Scroll Spy - Start
  // --------------------------------------------------
  $('a.scrollspy-btn[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 60)
        }, 0, "easeInOutExpo");
        return false;
      }
    }
  });
  // Scroll Spy - End
  // --------------------------------------------------

})(jQuery);