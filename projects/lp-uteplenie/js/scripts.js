$(document).ready(function(){

     $('.button-order').click(function(e) {
         e.preventDefault();
         $('.popup-bg').fadeIn(250);
         $('.popup-add-zvonok').fadeIn(250);
     });
    
     $('.button-price').click(function(e) {
         e.preventDefault();
         $('.popup-bg').fadeIn(250);
         $('.popup-add-zayavka').fadeIn(250);
     });
    
     $('.popup-bg, .button-back, .close_popup').click(function(e) {
         e.preventDefault(e);
         $('.popup').fadeOut(250);
         $('.popup-bg').fadeOut(250);
     });

});