
import svg from './svg';
import slider from './slider';
import  gos from './gos';
import bvi from 'bvi';
import lightbox  from './lightbox';

document.addEventListener('DOMContentLoaded', () => {   
  function isHomepage() {
    let pathName = window.location.pathname;
    if (pathName == '/' || pathName == '/index.html' || pathName == '/chatc/dist/index.html') {
      return true;
    } else {
      return false; 
    }
  }
  try { 
    if (isHomepage()) {
      gos();
      slider();
    } 
    svg();
    new isvek.Bvi();  
    lightbox();
   
   
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
  
      // для ios
    if (isMobile.iOS()) {
      quoter_slider.classList.add('ios');
      search_icon.classList.add('search_icon_ios');
    } 
  }
  catch (e) {
    console.log(e);
  } 
});

