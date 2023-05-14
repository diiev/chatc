
function lightbox () {
    const el = document.querySelectorAll('[data-lightbox]');
    const modal = document.createElement('div');
    const img = document.createElement('img');
    const modalBtns = document.createElement('div');
    const close = document.createElement('div');
    const fullscreen = document.createElement('div');
    close.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 24 24"><path class="fslightbox-svg-path" d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path></svg>'; 
    close.setAttribute('data-close', '');
    close.style.cssText = `cursor:pointer`;
    fullscreen.style.cssText = `cursor:pointer`;
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
    z-index:1000;
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
                modal.requestFullscreen();
    });
    close.addEventListener('click', ()=> {
        closeModal(modal);
    });
}

export default lightbox;