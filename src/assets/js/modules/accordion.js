export default class Accordion { 
    constructor (elem) {
            this.accordion = document.querySelectorAll(elem);
           
    }
    init () { 
       
        this.accordion.forEach(item => {
            item.addEventListener('click', () => {
              item.classList.toggle('active'); 
              item.nextElementSibling.classList.toggle('accordion_item_active');
              if (item.nextElementSibling.classList.contains('accordion_item_active')) {
                item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 80 + "px";
                item.nextElementSibling.style.opacity = 1;
            } 
            else {
                item.nextElementSibling.style.maxHeight = "0px";
                item.nextElementSibling.style.opacity = 0;
                
            }
              this.accordion.forEach(otherItem => {
                if (otherItem !== item) {
                  otherItem.classList.remove('active');
                  otherItem.nextElementSibling.classList.remove('accordion_item_active');
                  otherItem.nextElementSibling.style.maxHeight = "0px";
                 
                }
              });
            });
          });
    }
   
}