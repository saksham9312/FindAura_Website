// store intro has been seen identifier
if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem("intro")) {
    var intro = 'seen';
  }else{
    localStorage.setItem("intro", "seen");
    var intro = 'not';
  }
  
} else {
  // Sorry! No Web Storage support..
  console.log('web storage not supported on this browser!');
  var intro = 'not';
}

/*global $, document, setTimeout, i*/
$(document).ready(function () {

    'use strict';

    var slide  = $('.slide'),
        slideAelements = $('.slide-a-child'),
        slideBelements = $('.slide-b-child'),
        slideCelements = $('.slide-c-child'),
        slideDelements = $('.slide-d-child'),
        slideEelements = $('.slide-e-child');

    if (intro == 'not') {
      slide.each(function (i) {
          if (i < 2) {
             console.log('hiding the sec '+i);
              setTimeout(function () {
                  slide.eq(i).fadeOut();
              }, 5000 * (i + 1));
          }
      });
    }

    function animateSlideA() {
      console.log('doing the sec A');
      slideAelements.each(function (i) {
          setTimeout(function () {
              slideAelements.eq(i).addClass('is-visible');
          }, 300 * (i + 1));
      });
    }

    function animateSlideB() {
      console.log('doing the sec b');
      slideBelements.each(function (i) {
          setTimeout(function () {
              slideBelements.eq(i).addClass('is-visible');
          }, 300 * (i + 1));
      });
    }

    function animateSlideC() {
      console.log('doing the sec c');
      slideCelements.each(function (i) {
          setTimeout(function () {
              slideCelements.eq(i).addClass('is-visible');
          }, 150 * (i + 1));
      });
    }

    function animateSlideD() {
      console.log('doing the sec d');
      slideDelements.each(function (i) {
          setTimeout(function () {
              slideDelements.eq(i).addClass('is-visible');
          }, 300 * (i + 1));
      });
    }

    function animateSlideE() {
      console.log('doing the sec e');
      slideEelements.each(function (i) {
          setTimeout(function () {
              slideEelements.eq(i).addClass('is-visible');
          }, 300 * (i + 1));
      });
    }

    //first trigger function of the state
    if (intro == 'not') {
      animateSlideA();

      setTimeout(function () {
         animateSlideB();
      }, 5000);

      setTimeout(function () {
         animateSlideC();
         //debugger;
      }, 10000);

    }

    $(".move_on").on('click', function(event) {
      slide.each(function (i) {
          if (i == 2) {
            slide.eq(i).fadeOut();
          }else if(i > 2){
            setTimeout(function () {
                slide.eq(i).fadeOut();
            }, 5000 * (i + 1));
          }
      });

      animateSlideD();

      setTimeout(function () {
         slide.eq(3).fadeOut();
         animateSlideE();
      }, 5000);

      setTimeout(function () {
         $("#intro_container").fadeOut(500);
      }, 10000);

      setTimeout(function () {
         $(".sections_page").fadeIn(500);
      }, 10500);
    });

    $(".skip_link, .skip").on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
      $("#intro_container").fadeOut(500);
        setTimeout(function() {
          $(".sections_page").fadeIn(500);
        }, 800);
    });

    if (intro == 'seen') {
      $("#intro_container").fadeOut(500);
        setTimeout(function() {
          $(".sections_page").fadeIn(500);
        }, 800);
    }
    
});

$(document).ready(function() {
  
  // variables
  var $isAnimatedFirst = $('.first .is-animated'),
      $isAnimatedFirstSingle = $('.first .is-animated__single'),
      $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFifth = $('.fifth .is-animated'),
      $isAnimatedFifthSingle = $('.fifth .is-animated__single'),
      $isAnimatedSixth = $('.sixth .is-animated'),
      $isAnimatedSixthSingle = $('.sixth .is-animated__single'),
      $isAnimatedSeventh = $('.seventh .is-animated'),
      $isAnimatedSeventhSingle = $('.seventh .is-animated__single'),
      $isAnimatedEighth = $('.eighth .is-animated'),
      $isAnimatedEighthSingle = $('.eighth .is-animated__single'),
      $isAnimatedNinth = $('.ninth .is-animated'),
      $isAnimatedNinthSingle = $('.ninth .is-animated__single');

  $('#fullpage').fullpage({
    //options here
    anchors:['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth'],
    autoScrolling:true,
    scrollHorizontally: false,
    scrollBar: false,
    //first section animations
    afterRender: function() {
      $isAnimatedFirst.addClass('animated zoomIn'); 
      $isAnimatedFirstSingle.addClass('animated fadeInRight').css('animation-delay', '0.4s');
    },
    onLeave: function(index, nextIndex, direction) {
      // console.log('index: '+index+' NextIndex: '+nextIndex);

      if( nextIndex > 1 ){
        $("#toTop").fadeIn('slow');
      }else{
        $("#toTop").fadeOut('slow');
      }
      
      // second animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeInRight'); 
        $isAnimatedSecondSingle.addClass('animated fadeInLeft').css('animation-delay', '0.7s');
      }
      
      // third animation
      else if( index == 2 && nextIndex == 3 ) {
        $isAnimatedThird.addClass('animated zoomIn'); 
      }

      // Fourth animation
      else if( index == 3 && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated zoomIn'); 
      }

      // Fifth animation
      else if( index == 4 && nextIndex == 5 ) {
        $isAnimatedFifth.addClass('animated zoomIn'); 
      }

      // Sixth animation
      else if( index == 5 && nextIndex == 6 ) {
        $isAnimatedSixth.addClass('animated zoomIn'); 
      }

      // Sixth animation
      else if( index == 6 && nextIndex == 7 ) {
        $isAnimatedSeventh.addClass('animated zoomIn'); 
      }

      // Sixth animation
      else if( index == 7 && nextIndex == 8 ) {
        $isAnimatedEighth.addClass('animated zoomIn'); 
      }

      // Sixth animation
      else if( index == 8 && nextIndex == 9 ) {
        $isAnimatedNinth.addClass('animated fadeInLeft'); 
      }
      
    }


  });

  //move to the next section of the full page js
  $('.moveSectionDown').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  });

  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

  // web view mobile image screen animate on hover
  $("#first_mobile").mouseenter(function(){
    $("#first_mobile2").fadeIn(500);
    setTimeout(function() {
      $("#first_mobile3").fadeIn(500);
    }, 200);
    
  });
  $("#first_mobile").mouseleave(function(){
    $("#first_mobile2").fadeOut(500);
    setTimeout(function() {
      $("#first_mobile3").hide();
    }, 200);
    
  });

  // mobile view mobile image screen animate on hover
  $("#first_mobile_m").mouseenter(function(){
    setTimeout(function() {
      $("#first_mobile_m3").fadeIn(500);
    }, 100);
    $("#first_mobile_m2").fadeIn(500);
    
  });
  $("#first_mobile_m").mouseleave(function(){
    setTimeout(function() {
      $("#first_mobile_m3").hide();
    }, 100);
    $("#first_mobile_m2").fadeOut(500);
    
  });

  //emoji select handler
  $(".c_emoji").on('click', function() {
    if($("#em1").hasClass('c_emoji_scaled')){
      $("#em1").removeClass('c_emoji_scaled');
    }
    if($("#em2").hasClass('c_emoji_scaled')){
      $("#em2").removeClass('c_emoji_scaled');
    }
    if($("#em3").hasClass('c_emoji_scaled')){
      $("#em3").removeClass('c_emoji_scaled');
    }
    if($("#em4").hasClass('c_emoji_scaled')){
      $("#em4").removeClass('c_emoji_scaled');
    }
    if($("#em5").hasClass('c_emoji_scaled')){
      $("#em5").removeClass('c_emoji_scaled');
    }

    $(this).addClass('c_emoji_scaled');
  })
  

});

const menu = document.querySelector('.menu');
const btn = menu.querySelector('#mobile_nav_toggler');
btn.addEventListener('click', evt => {
  if (menu.className.indexOf('active') === -1) {
    menu.classList.add('active');
    $("#mobile_menu").fadeIn(500);
    $("#mobile_logo").fadeIn(500);
    // btn.classList.remove('nav-tgl');
    // btn.classList.add('nav-tgl-a');
  } else {
    // btn.classList.remove('nav-tgl-a');
    // btn.classList.add('nav-tgl');
    $("#mobile_menu").fadeOut('500');
    $("#mobile_logo").fadeOut('500');
    menu.classList.remove('active');
  }
});
