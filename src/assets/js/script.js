
import svg from './modules/svg';
import slider from './modules/slider';
import  gos from './modules/gos';
import bvi from 'bvi';
import lightbox  from './modules/lightbox';
import Accordion from './modules/accordion';
import menu from './modules/menu';
import scrolling from './modules/scrolling';
import isHomepage from './modules/isHomePage';
import cookie from './modules/cookies';
import newyear from './modules/newyear';
import Snow from './modules/snow';
import feedback from './modules/feedback';
document.addEventListener('DOMContentLoaded', () => {   
  try { 
    
    svg();
    new isvek.Bvi();  
    lightbox();
    if (isHomepage()) {
      gos();
      slider();
    } 
    new Accordion ('.accordion_item').init();
    menu();
    scrolling('.top_arrow');
    newyear()
   
    new Snow({
      showSnowBalls: false
    })  
   feedback()
  } 
  catch (e) {} 
}); 



