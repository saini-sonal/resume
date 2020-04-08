(function ($) {
"use strict";

$(document).ready(function(){



 $(window).scroll(function(){
       $('nav').toggleClass('scrolled',$(this).scrollTop()>350);
    });


$(document).scroll(function() {
var scrollDistance = $(this).scrollTop();
if (scrollDistance > 100) {
$('.scroll-to-top').fadeIn();
} else {
$('.scroll-to-top').fadeOut();
}
});
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

});
})(jQuery);
