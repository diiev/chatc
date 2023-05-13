
import { tns } from 'tiny-slider';
import  gos from './gos';
 

document.addEventListener('DOMContentLoaded', () => {       
  function isHomepage() {
    const pathName = window.location.pathname;
    if (pathName == '/' || pathName == '/index.html' || pathName == '/chatc/dist/index.html') {
      return true;
    } else {
      return false; 
    }
  }  

  if (isHomepage()) { 
     
    gos();
 
  const sliderBanner = tns({
    container: '.slider_banner',
    items: 1,
    nav: false,
    controls: false
  });
  document.querySelector('#promo__slider-prev').addEventListener('click', () => {
    sliderBanner.goTo('prev');
  });
  document.querySelector('#promo__slider-next').addEventListener('click', () => {
    sliderBanner.goTo('next');
  }); 
 
  const sliderSpec = tns({
    container: '.slider',
    items: 1,
    nav: false,
    navContainer: '.sdots',
    controls: false,
    responsive: {
      500: {
          items: 2
      },
     
      900: {
        items: 3
      }
    }
  });  
  setDotsSlider(sliderSpec, '.our_spec .container'); 
  document.querySelector('#spec__slider-prev').addEventListener('click', () => {
    sliderSpec.goTo('prev');
  });
  document.querySelector('#spec__slider-next').addEventListener('click', () => {
    sliderSpec.goTo('next');
  }); 
 

  const sliderQuoter = tns({
    container: '.quoter_slider',
    items: 1,
    nav: false,
    controls: false,
    navContainer: '.sdots', 
  }); 
  setDotsSlider(sliderQuoter, '.quoter .container');
  document.querySelector('#quoter__slider-prev').addEventListener('click', () => {
    sliderQuoter.goTo('prev');
  });
  document.querySelector('#quoter__slider-next').addEventListener('click', () => {
    sliderQuoter.goTo('next');
  }); 
  
 
  const sliderLinks = tns({
    container: '.logo_slider',
    items: 1,
    controls: false,
    lazyload: true,
    navContainer: '.sdots',
    nav: false,
    responsive: {
      500: {
          items: 2
      },

      900: {
        items: 3,

      }
    }
  });    
  setDotsSlider(sliderLinks, '.links .container');
  document.querySelector('#links__slider-prev').addEventListener('click', () => {
    sliderLinks.goTo('prev'); 
  });
  document.querySelector('#links__slider-next').addEventListener('click', () => {  

    sliderLinks.goTo('next');  
  });   


  function setDotsSlider (slider, section) {   
   const dots = document.querySelector(`${section} .sdots`);
    for (let i = 0; i <  slider.getInfo().slideCount; i++) { 
      const dot = document.createElement('li');
      dot.classList.add('sdots__dot')
      dots.append(dot);
    }  
    const dot = document.querySelectorAll(`${section} .sdots__dot`);
    dot[0].classList.add('sdots__dot-active');
    dot.forEach((item,i) => { 
        item.addEventListener('click', ()=>{
          slider.goTo(i); 
              item.classList.add('sdots__dot-active');
              dot.forEach(otherItem => {
                   if (otherItem != item) {
                    otherItem.classList.remove('sdots__dot-active')
                   }
              });
            
        });
    });  
     slider.events.on('indexChanged', (info)=> { 
    dot.forEach((item,i) => { 
      if (info.displayIndex == i + 1) {
        item.classList.add('sdots__dot-active');
        dot.forEach(otherItem => {
             if (otherItem != item) {
              otherItem.classList.remove('sdots__dot-active')
             }
        });
      }
    });
    });
  } 
} 

  const accordion = document.querySelectorAll('.accordion_item'),
    burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    arrows = document.querySelectorAll('.arrow'),
    quoter_slider = document.querySelector('.quoter'),
    search_icon = document.querySelector('.fa-magnifying-glass');

  //accordion
  accordion.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
      item.nextElementSibling.classList.toggle('accordion_item_active');
      accordion.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.nextElementSibling.classList.remove('accordion_item_active');
         
        }
      });
    });
  });

   
  // menu 
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
  burger.addEventListener('click', (e) => { 
    e.preventDefault();
    burger.classList.toggle('active');
    menu.classList.toggle('menu__active');
    document.body.classList.toggle('lock');
  });

  if (isMobile.any()) {
    document.body.classList.add('touch');
    arrows.forEach(arrow => {
      arrow.addEventListener('click', (e) => {
        e.preventDefault();
        arrow.classList.toggle('active');
        arrow.classList.toggle('parent');
        arrow.nextElementSibling.classList.toggle('submenu__active');

      });
    });

  } else {
    document.body.classList.add('mouse');
  }

  // Кнопка навверх
  const btnUp = {
    el: document.querySelector('.top_arrow'),
    show() {
      // удалим у кнопки класс scrollTop_hide
      this.el.classList.remove('top_arrow_hide');
    },
    hide() {
      // добавим к кнопке класс scrollTop_hide
      this.el.classList.add('top_arrow_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 900px, то делаем кнопку видимой, иначе скрываем
        scrollY > 900 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.top_arrow').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  btnUp.addEventListener();

  // svg
  const imgElements = document.querySelectorAll('img.img-svg');
  imgElements.forEach((img) => {
    const imgClass = img.getAttribute('class');
    const imgURL = img.getAttribute('src');

    fetch(imgURL)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const svgElement = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

        if (typeof imgClass !== 'undefined') {
          svgElement.setAttribute('class', `${imgClass} replaced-svg`);
        }

        svgElement.removeAttribute('xmlns:a');

        if (!svgElement.getAttribute('viewBox') && svgElement.getAttribute('height') && svgElement.getAttribute('width')) {
          svgElement.setAttribute('viewBox', `0 0 ${svgElement.getAttribute('height')} ${svgElement.getAttribute('width')}`);
        }

        img.parentNode.replaceChild(svgElement, img);
      });
  });


  // для ios
  if (isMobile.iOS()) {
    quoter_slider.classList.add('ios');
    search_icon.classList.add('search_icon_ios');
  } 


});

