/*
--------------------------------------------------------------------------------------------------------
* Project    : Sigtuple                                                                                *
* Author     :                                                                                         * 
* Support    :                                                                                         * 
*------------------------------------------------------------------------------------------------------- 
NOTE: This file contains all scripts for the actual Template.
*/ 
/*==============================================
[  Table of contents  ]
================================================ 
:: Document Ready  
    ::
:: On Load
 	::  
:: Page  Scroll 
================================================
[ End table content ]
==============================================*/ 
// $(function () {
//     $("#zoom").anythingZoomer({
//         clone: true,      // Make a clone of the small content area, use css to modify the style

//     });
// });
 

/*==========================================
        :: Product Slider
==========================================*/ 
$(".product-slider").slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: false, 
    arrows: false, 
});

/*==========================================
        :: Awards Slider
==========================================*/ 
$(".awards-slider").slick({
    slidesToShow: 3,
    infinite:false,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: true, 
    arrows: true, 
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
});

/*==========================================
        :: Brewing Slider
==========================================*/ 
$(".brewing-slider").slick({
    slidesToShow: 3,
    infinite:false,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: true, 
    arrows: true, 
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
});

/*==========================================
        :: Clients Slider
==========================================*/ 
var $counter = $('.Clients-count');
var $slider = $('.Clients-slider');
$slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $counter.text('0' + i + ' / ' + '0' + slick.slideCount);
});
$slider.slick({
    slidesToShow: 1,
    infinite: false,
    dots: false,
    arrows: true,
    //autoplay: true,
    //autoplaySpeed: 3000,
    //fade: true,
    //fadeSpeed: 1000
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
});

/*==========================================
        :: Extensive slider
==========================================*/ 
$(".Extensive-slider").slick({
    slidesToShow: 3,
    infinite:false,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: true, 
    arrows: true, 
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
});
 
 
/*==========================================
        :: Right Panel
==========================================*/ 
$(".menu-panel").click(function(){
    $(".right-panel-menu").removeClass("menu-active"); 
});
$(".toolbar-menu").click(function(){
    $(".right-panel-menu").addClass("menu-active"); 
});    
$(".panel-overlay").click(function(){
    $(".right-panel-menu").removeClass("menu-active"); 
}); 



// Book demo
$(".btn-continue").click(function(){
    $(".steps-one").addClass("show-otp"); 
}); 

// otp-continue
$(".otp-continue").click(function(){
    $(".steps-one").hide(); 
    $(".steps-two").show(); 
}); 

// Whenworks-continue
$(".Whenworks-continue").click(function(){
    $(".steps-one, .steps-two ").hide(); 
    $(".steps-three").show(); 
}); 

// Message Continue
$(".message-continue").click(function(){
    $(".steps-one, .steps-two, .steps-three ").hide(); 
    $(".steps-four").show(); 
});

// Multiple tests slider
$(".Multiple-tests-slider").slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1, 
    dots: true, 
    arrows: false, 
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
});

// Cell identification slider
$(".Cell-identification-slider").slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1, 
    dots: true, 
    arrows: false, 
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
}); 

// review-report slider
$(".review-report-slider").slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1, 
    dots: true, 
    arrows: false, 
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
}); 

// analysis-slider
$(".analysis-slider").slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1, 
    dots: true, 
    arrows: false, 
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
}); 

// Microscopic-slider
$(".Microscopic-slider").slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1, 
    dots: true, 
    arrows: false, 
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
}); 


/*==========================================
        :: Extensive slider
==========================================*/ 
$(".ShravaAI-slider").slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: false, 
    arrows: true, 
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
});


/*==========================================
        :: Shonit slider
==========================================*/ 
 

$(".Shonit-slider").slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
 


$('#play-pause-button').click(function () {
    var mediaVideo = $("#media-video").get(0);
    if (mediaVideo.paused) {
        mediaVideo.play();
        $("#play-pause-button").fadeOut();
    } else {
        mediaVideo.pause();
    }
    $('#media-video').on('ended', function () {
        $("#play-pause-button").fadeIn();
    });
});

$('.play-btn1').click(function () {
    var mediaVideo = $(".tab-video").get(0);
    if (mediaVideo.paused) {
        mediaVideo.play();
        $(".play-btn1").fadeOut();
    } else {
        mediaVideo.pause();
    }
    $('.tab-video').on('ended', function () {
        $(".play-btn1").fadeIn();
    });
});
$('.play-btn2').click(function () {
    var mediaVideo = $(".tab-video2").get(0);
    if (mediaVideo.paused) {
        mediaVideo.play();
        $(".play-btn2").fadeOut();
    } else {
        mediaVideo.pause();
    }
    $('.tab-video2').on('ended', function () {
        $(".play-btn2").fadeIn();
    });
}); 
