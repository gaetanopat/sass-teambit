var $ = require('jquery');

$(document).ready(function() {
  var lastScrollTop = 75;
  $(document).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
       // tolgo il bordo dall'header_left
       $('.header_left').removeClass('border-bot');
       // tolgo il bordo dall'header_right
       $('.header_right').removeClass('border-bot');
      // aggiungo il bordo all'header
      $('header').addClass('border-bot');
      // modifico il colore sel Sign up
      $('a.sign_up').removeClass('button-color');
      $('a.sign_up').addClass('color_after_scroll');
     }else if (st == 0){
       // tolgo il bordo dall'header
       $('header').removeClass('border-bot');
       // aggiungo il bordo all'header_left
       $('.header_left').addClass('border-bot');
       // aggiungo il bordo all'header_right
       $('.header_right').addClass('border-bot');
       // modifico il colore sel Sign up
       $('a.sign_up').removeClass('color_after_scroll');
       $('a.sign_up').addClass('button-color');
     }
     lastScrollTop = st;
   });
});
