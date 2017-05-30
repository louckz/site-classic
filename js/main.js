// global $, alert console


$(function () {
  'use strict'

  // adjust header height
  var myHeader = $('.header')

  myHeader.height($(window).height());

  $(window).resize(function (){

      myHeader.height($(window).height());


  });

  // links add active

  $('.links li a').click(function () {

    $(this).parent().addClass('active').siblings().removeClass('active');

  });

  // smooth scroll to div

  $('.links li a').click(function(){
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value') ).offset().top
    }, 1000);
  });


  // trigger the bx slider
  $(document).ready(function(){
  $('.bxslider').bxSlider({
    pager:false
  });
});
//our auto slider
(function autoSlider() {

  $('.slider .active').each(function (){

    if (!$(this).is(':last-child')) {

 $(this).delay(3000).fadeOut(1000, function () {

   $(this).removeClass('active').next().addClass('active').fadeIn();

   autoSlider();

 });
    }else {
      $(this).delay(3000).fadeOut(1000, function() {

         $(this).removeClass('active');

         $('.slider div').eq(0).addClass('active').fadeIn();

          autoSlider();
      });
    }
  });

}());

// trigger mixitup

$('#container').mixItUp();

// add shuffle links

$('.shuffle li').click(function () {


  $(this).addClass('selected').siblings().removeClass('selected');

});
// trigger nicescroll

$('html').niceScroll({

  cursorcolor: '#1ABC9C',

  cursorwidth: '10px',

  cursorborder: '1px solid #1ABC9C'
});

});
