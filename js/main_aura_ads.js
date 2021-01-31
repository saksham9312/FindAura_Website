$(document).ready(function() {
  // variables
  var $isAnimatedFirst = $('.first .is-animated'),
      $isAnimatedFirstSingle = $('.first .is-animated__single'),
      $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single');

  $('#fullpage').fullpage({
    //options here
    'scrollHorizontally': false,
    'css3': true,
    'navigation': true,
    'navigationPosition': 'right',
    afterRender: function() {
      $isAnimatedFirst.eq(0).css('animation-delay', '.3s');
      $isAnimatedFirst.addClass('animated fadeInUp').css('animation-delay', '0.3s'); 
      $isAnimatedFirstSingle.addClass('animated fadeIn').css('animation-delay', '0.4s');
    },
    onLeave: function(index, nextIndex, direction) {
    
      /**
      * use the following condition: 
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first section to another sections 
      */
      
      // first animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeIn').css('animation-delay', '0.4s'); 
        $isAnimatedSecondSingle.addClass('animated fadeInUp').css('animation-delay', '.8s');
      }

    /**
      * use the following condition: 
      *
      *   else if( index == 2 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) from the first section to the third one 
      */
      
      // second animation
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.addClass('animated fadeIn').css('animation-delay', '0.4s'); 
        $isAnimatedThirdSingle.addClass('animated fadeInUp').css('animation-delay', '.8s');
      }

    }

  });

  //methods
  //$.fn.fullpage.setAllowScrolling(true);

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
  });

  $('.moveSectionUp').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSectionUp();
  });


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