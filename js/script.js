$('.slider_banner').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false
});
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    lazyLoad: 'progressive',
     responsive: [
       {
         breakpoint:1024,
         settings: {
           slidesToShow: 3,
           arrows: false,
           dots:  true
         }
       },
       {
       breakpoint: 767,
       settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
       } 
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots:  true
        }
      }
     ] 
});

  $('.quoter_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint:1024,
        settings: {
          arrows: false
        }
      }
    ] 
   
  
  });
 

  $('.logo_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'progressive', 
    dots: true,
    responsive: [
      {
        breakpoint:1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
      breakpoint: 767,
      settings: {
         slidesToShow: 2,
         arrows: false
      }  
      
     },
     {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots:  true
      }
    }
   
    ] 
  });
  /* menu*/ 
  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
      let body=document.querySelector('body');
  if(isMobile.any()){
      body.classList.add('touch');
      let arrow=document.querySelectorAll('.arrow');
    for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i];
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];
        thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function(){
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    }
  }else{
    body.classList.add('mouse');
  }
  /* burger */ 
  $(document).ready(function(){
    $('.burger').click(function(event) {
      $('.burger, .menu').toggleClass('active').next().slideToggle(500);
      $('body').toggleClass('lock');
    });

  }); 

  // $(document).ready(function(){
  //   $('.questions_accordion_item').click(function(event){
  //     $(this).toggleClass('active').next().slideToggle(400);
  //     $('.questions_accordion_item').not($(this)).removeClass('active');
  //     $('.accordion_item_content').not($(this).next()).slideUp(400);
  //   });
  // });