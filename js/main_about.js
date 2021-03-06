$(document).ready(function() {
  // variables
  var $isAnimatedFirst = $('.first .is-animated'),
      $isAnimatedFirstSingle = $('.first .is-animated__single');

  $('#fullpage').fullpage({
    //options here
    afterRender: function() {
      $isAnimatedFirst.addClass('animated zoomIn').css('animation-delay', '0.3s'); 
      $isAnimatedFirstSingle.addClass('animated fadeInRight').css('animation-delay', '0.4s');
    },
    autoScrolling:true,
    scrollHorizontally: false
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);

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
