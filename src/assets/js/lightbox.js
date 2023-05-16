
function lightbox () {
    const el = document.querySelectorAll('[data-lightbox]');
    const modal = document.createElement('div');
    const img = document.createElement('img');
    const modalBtns = document.createElement('div');
    const close = document.createElement('span');
    const fullscreen = document.createElement('span');
    const zoom = document.createElement('span');
    zoom.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="white">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z" fill="white"/>
    </svg>`;
    close.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 24 24"><path class="fslightbox-svg-path" d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path></svg>'; 
    close.setAttribute('data-close', '');
    zoom.setAttribute('data-zoom', '');
    close.style.cssText = `cursor:pointer`;
    fullscreen.style.cssText = `cursor:pointer`;
    zoom.style.cursor = 'pointer';
    fullscreen.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 18 18"><path class="fslightbox-svg-path" d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"></path></svg>';

    modalBtns.style.cssText = `
    position: absolute;
     top: 0px;
     right:0px;
     background: rgba(3,3,3,0.45);
     display:flex;
     align-items: center;
     justify-content: space-between;
    padding: 10px;
    gap:20px;
    `;
    modal.style.cssText = `
    position:fixed;
    height: 100%;
    width:100%;
    background-color: rgba(0, 0, 0, 0.85);
    left: 0;
    top:0;
    z-index:99999;
    overflow:hidden;
    `;   
    img.style.cssText = `
         position:absolute;
         height: 60%;
         width: 60%;
         left: 50%;
         top:50%;
         transform:translateX(-50%) translateY(-50%);
         object-fit: contain;
         transition: all .6s;
         `;
    el.forEach(item => {
       item.addEventListener('click', (e)=> {
            e.preventDefault();
        document.body.append(modal);
        document.body.style.overflow = 'hidden';
         modal.append(img);
         modal.append(modalBtns);
         modalBtns.append(fullscreen);
         modalBtns.append(zoom);
         modalBtns.append(close);
         
        
         img.setAttribute('src', item.getAttribute('src'));  
       });
    });  
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    }); 

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal(modal);
        }
    });
    function closeModal(modal) { 
        modal.remove();
        document.body.style.overflow = '';
    
    } 
  
    fullscreen.addEventListener('click', ()=> {  
         if (!document.fullscreenElement) { 
            document.body.style.overflow = 'hidden';
            modal.requestFullscreen(); 
            fullscreen.innerHTML='<svg width="24px" height="24px" viewBox="0 0 950 1024"><path class="fslightbox-svg-path" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path></svg>';
         }
          else {
            document.exitFullscreen();
            document.body.style.overflow = 'hidden';
            fullscreen.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 18 18"><path class="fslightbox-svg-path" d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"></path></svg>';
          }
     
   
    });  
    let isclick = false;
    zoom.addEventListener('click', ()=> {  
  
        if (isclick) {
            console
            isclick = false;
            img.style.cssText  = `
            position:absolute;
             height: 60%;
             width: 60%;
             left: 50%;
             top:50%;
             transform:translateX(-50%) translateY(-50%);
             object-fit: contain;
             transition: all .6s;
            `; 
           
        }
        else {
            isclick = true;
            img.style.cssText  = `
            position:absolute;
             height: 100%;
             width: 100%;
             left: 50%;
             top:50%;
             transform:translateX(-50%) translateY(-50%);
             object-fit: contain;
             transition: all .6s;
            `;
        }
        
    });
    close.addEventListener('click', ()=> {
        closeModal(modal);
    });


}

export default lightbox;