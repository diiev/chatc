const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector); 
  window.addEventListener('scroll', () => {
         if (document.documentElement.scrollTop > 1000) {
                      upElem.style.opacity = 1;
                      upElem.style.visibility = 'visible';
         } 
         else {
          upElem.style.opacity = 0;
          upElem.style.visibility = 'hiiden';
         }
  }); 


  let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.18;
      links.forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();
              let widthTop = document.documentElement.scrollTop,
                  hash = this.hash, 
                  toBlock = document.querySelector(hash).getBoundingClientRect().top, 
                  start = null;
                  console.log(hash);
                  requestAnimationFrame(step); 
                  function step (time) { 
                      if (start === null) {
                          start = time;
                      }
                      let progress = time - start,
                          r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock))
                          document.documentElement.scrollTo(0,r);
      
                          if (r != widthTop + toBlock) {
                              requestAnimationFrame(step);
                          } 
                          else {
                              location.hash = hash;
                          }
      
                  }
          }); 
     
      });



};

export default scrolling;