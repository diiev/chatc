import { tns } from 'tiny-slider';
function slider () {
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

export default slider;