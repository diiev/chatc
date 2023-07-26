 function menu() { 
   const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        menuArrows = document.querySelectorAll('.menu__link.arrow'),
        submenuArrows = document.querySelectorAll('.sub-menu__link.arrow'),
        quoter_slider = document.querySelector('.quoter'),
        search_icon = document.querySelector('.fa-magnifying-glass');
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
        menuArrows.forEach(arrow => {
          arrow.addEventListener('click', (e) => {
            e.preventDefault();
            arrow.classList.toggle('active');
            arrow.classList.toggle('parent');
            arrow.nextElementSibling.classList.toggle('submenu__active');
            menuArrows.forEach(otherArrow => {
              if (otherArrow !== arrow) {
                otherArrow.classList.remove('active');
                otherArrow.classList.remove('parent');
                otherArrow.nextElementSibling.classList.remove('submenu__active')
              }
            });
    
          });
        }); 
        submenuArrows.forEach(arrow=> {
            arrow.addEventListener('click', ()=> {
              arrow.classList.toggle('active');
              arrow.classList.toggle('parent');
              arrow.nextElementSibling.classList.toggle('submenu__active'); 
              submenuArrows.forEach(otherArrow => {
                if (otherArrow !== arrow) {
                  otherArrow.classList.remove('active');
                  otherArrow.classList.remove('parent');
                  otherArrow.nextElementSibling.classList.remove('submenu__active')
                }
              });
      
            });
        });
    
      } else {
        document.body.classList.add('mouse');
      }
      if (isMobile.iOS()) {
        quoter_slider.classList.add('ios');
        search_icon.classList.add('search_icon_ios');
      } 
 }
 export default menu;
