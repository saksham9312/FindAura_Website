$(document).ready(function() {
  
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

  $("#switch").on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('hover');

    $(".center_image_div").css('background-image','url(http://email.rapidbooster.com/find_aura/images/demo/bg1.png)');

    if ($(this).hasClass('hover')) {
      $("#center_image").hide();
      $("#center_image_g").show();
      $("#demo_arrow").hide('slow');
      $("#demo_info").hide('slow');

      $(".bg_options").show('slow');
    }else{
      $("#center_image_g").hide();
      $("#center_image").show();
      $(".center_image_div").css('background-image', '');

      $(".bg_options").hide('slow');

      $("#demo_arrow").show('slow');
      $("#demo_info").show('slow');
    }
  
  });

  $("#set_bg1").on('click', function function_name() {
    $(".center_image_div").css('background-image',
      'url(http://email.rapidbooster.com/find_aura/images/demo/bg1.png)')
  });

  $("#set_bg2").on('click', function function_name() {
    $(".center_image_div").css('background-image',
      'url(http://email.rapidbooster.com/find_aura/images/demo/bg2.png)')
  });

  $("#set_bg3").on('click', function function_name() {
    $(".center_image_div").css('background-image',
      'url(http://email.rapidbooster.com/find_aura/images/demo/bg3.png)')
  });


});

