
import svg from './modules/svg';
import slider from './modules/slider';
import  gos from './modules/gos';
import bvi from 'bvi';
import lightbox  from './modules/lightbox';
import Accordion from './modules/accordion';
import menu from './modules/menu';
import up from './modules/up';
import isHomepage from './modules/isHomePage';
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
    up();
  } 
  catch (e) {} 
});

