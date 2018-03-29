$(document).ready(function() {
  $(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    
    if(wScroll > $('#about-section').offset().top - 500){
      
      $('.about-item').each(function(i) {
        
        setTimeout(function() {
         $('.about-item').eq(i).addClass('is-visible');
        }, 350 * (i+1));
      });
      
      $('.about-img').addClass('is-visible');
    }
    
    if(wScroll > $('.product-inner').offset().top - 400){
      
      $('.polo-product').each(function(i) {
        
        setTimeout(function() {
         $('.polo-product').eq(i).addClass('is-visible');
        }, 250 * (i+1));
      });
    }
    
    if(wScroll > $('#gallery-section').offset().top - 400){
      
      $('.gallery-item').each(function(i) {

        setTimeout(function() {
         $('.gallery-item').eq(i).addClass('is-vs-scaling');
      }, 250 * (i+1));  
      });
    }
    
  }); 

  $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
          if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      });
  });

  function popUpEvent() {
    $('body').addClass('pop-up-screen')
    $('body').addClass('pop-up-no-scroll');
    $('.pop-up-close').click(function() {
        $('.pop-up').fadeOut('fast');
        $('body').removeClass('pop-up-no-scroll');
    });
  }

  $('.mush-polo-cta').click(function() {
    
    $('.mush-pop-up').toggle();
    popUpEvent();

  });

  $('.pumpkin-polo-cta').click(function() {
    
    $('.pumpkin-pop-up').toggle();
    popUpEvent();
    
  });

  $('.houses-polo-cta').click(function() {
    
    $('.houses-pop-up').toggle();
    popUpEvent();
    
  });

  $('.small-menu').click(function() {
      $(this).toggleClass('transform');
      $('.is-shrinked').toggle();

      $('.is-shrinked ul li a').click(function()  {
        $('.is-shrinked').hide();
        $('.small-menu').removeClass('transform');
      }); 
  });

});