
function lightbox () {
    const imgs = document.querySelectorAll('[data-lightbox]');
    const popup = document.createElement('div');
    popup.classList.add('popup');
    const img = document.createElement('img')
    img.classList.add('popup__img');
    const popupButtons = document.createElement('div');
    popupButtons.classList.add('popup__btns');
    const close = document.createElement('span');
    const fullscreen = document.createElement('span');
    const zoom = document.createElement('span');
    const numberOfImg = document.createElement('div');
    numberOfImg.classList.add('popup__numbers');
    const currentNumber = document.createElement('span');
    const allNumbers = document.createElement('span');
    const prev = document.createElement('i');
    const next = document.createElement('i');
    prev.classList.add('slider__prev');
    next.classList.add('slider__next');
    zoom.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="white">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z" fill="white"/>
    </svg>`;
    close.innerHTML = '<svg width="22px" height="22px" viewBox="0 0 24 24"><path class="fslightbox-svg-path" d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path></svg>'; 
    close.setAttribute('data-close', '');
    zoom.setAttribute('data-zoom', '');
    fullscreen.innerHTML = '<svg width="22px" height="22px" viewBox="0 0 18 18"><path class="fslightbox-svg-path" d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"></path></svg>';
    let currentImg = 0;
    imgs.forEach((item,i) => {
       item.addEventListener('click', (e)=> { 
            e.preventDefault();
        document.body.style.paddingRight = '17px';
        document.body.style.overflow = 'hidden';
        document.body.append(popup);
        popup.append(img);
        popup.append(prev);
        popup.append(next);
        popup.append(numberOfImg);
       
        img.setAttribute('src', item.getAttribute('href'));  
        popup.append(popupButtons);
        popupButtons.append(fullscreen);
        popupButtons.append(zoom);
        popupButtons.append(close);
        currentImg = i; 
        numberOfImg.append(currentNumber);
        numberOfImg.append(allNumbers)
        currentNumber.innerHTML = `${currentImg + 1}`;
        allNumbers.innerHTML = ` / ${imgs.length}`;
       }); 
    });  
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closeModal(popup);
           
        }
    }); 

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal(popup);
        }
    });
    function closeModal(modal) {
        document.body.style.paddingRight = '';
        document.body.style.overflow = '';
        document.exitFullscreen();
        img.classList.remove('popup__img-zomming');
        modal.remove();
    } 
    fullscreen.addEventListener('click', ()=> { 
         if (!document.fullscreenElement) { 
            popup.requestFullscreen();    
            fullscreen.innerHTML='<svg width="24px" height="24px" viewBox="0 0 950 1024"><path class="fslightbox-svg-path" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path></svg>';
         }
          else { 
            fullscreen.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 18 18"><path class="fslightbox-svg-path" d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"></path></svg>'; 
            document.exitFullscreen(); 
           
          }
       
         
   
    });  
    let isclick = false;
    zoom.addEventListener('click', ()=> {   
        img.classList.toggle('popup__img-zomming')
        if (isclick) {
            isclick = false; 
            zoom.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z" fill="white"/>
            </svg>`;
        }
        else {
            isclick = true; 
            zoom.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"  enable-background="new 0 0 32 32" id="Editable-line" version="1.1" viewBox="0 0 32 32" xml:space="preserve"><circle cx="14" cy="14" fill="none" id="XMLID_131_" r="9" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" id="XMLID_130_" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="20.366" y1="27" y2="20.366"/><line fill="none" id="XMLID_128_" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="10" x2="18" y1="14" y2="14"/></svg>`;
        }
        
    });
    close.addEventListener('click', ()=> {  
        closeModal(popup);
    });

function getNext () {
    if (currentImg >= +imgs.length - 1 )
    currentImg = -1;
       img.setAttribute('src', imgs[++currentImg].getAttribute('href'));
       currentNumber.innerHTML = `${currentImg + 1}`;
}
function getPrev() {
    if (currentImg <=  0 )
    currentImg = +imgs.length;
   img.setAttribute('src', imgs[--currentImg].getAttribute('href')); 
   currentNumber.innerHTML = `${currentImg + 1}`;
} 

next.addEventListener('click', getNext);
prev.addEventListener('click', getPrev); 

img.addEventListener('touchstart', (e) => {
    if (e.changedTouches > 500) {
        getNext();
    }
    else {
        getPrev();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight') {
        getNext();
    }
    else if (e.code === 'ArrowLeft') {
        getPrev();
    }
});
}

export default lightbox;