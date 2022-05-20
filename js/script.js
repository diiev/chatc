$('.slider_banner').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      arrows: false
    }
  },
  {
    breakpoint: 767,
    settings: {
      arrows: false
    }
  }
 ]
   
});
$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  lazyLoad: 'progressive',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true
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
        dots: true
      }
    }
  ]
});

$('.quoter_slider').slick({
  slidesToShow: 1,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  lazyLoad: 'progressive',
  responsive: [{
    breakpoint: 1024,
    settings: {
      arrows: false
    }
  }]


});


$('.logo_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: 'progressive',
  dots: true,
  responsive: [{
      breakpoint: 1024,
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
        dots: true
      }
    }

  ]
});
/* menu*/
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
 
/* burger */
$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .menu').toggleClass('active').next().slideToggle(600);
    $('body').toggleClass('lock');
  });
}); 
// меню 
if (isMobile.any()) {
 $('body').addClass('touch'); 
 $(document).ready(function () {
  $('.arrow').click(function (event) {     
      $(this).addClass('parent').toggleClass('active').next().toggleClass('open').slideToggle(600);       
  }); 
});  
}
else {
  $('body').addClass('mouse'); 
} 
// для ios
let quoter_slider = document.querySelector('.quoter');
let search_icon = document.querySelector('.fa-magnifying-glass');

if (isMobile.iOS()) { 
    quoter_slider.classList.add('ios');
    search_icon.classList.add('search_icon_ios');
}
// кнопка навверх  
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0 ) {
      $('.top_arrow').fadeIn();
    } else {
      $('.top_arrow').fadeOut();
    }
  });
  $('.top_arrow').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });
 
}); 
 // accordion
$(document).ready(function () {
  $('.accordion_item').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(600);
    $('.accordion_item').not($(this)).removeClass('active');
    $('.accordion_item_content').not($(this).next()).slideUp(600);
  });
});

// svg 
$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});