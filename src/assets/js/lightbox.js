
function lightbox() {
    const imgs = document.querySelectorAll('[data-fslightbox]');
    const popup = document.createElement('div');
    const img = document.createElement('img')
    const popupButtons = document.createElement('div');
    const close = document.createElement('span');
    const fullscreen = document.createElement('span');
    const zoom = document.createElement('span');
    const numberOfImg = document.createElement('div');
    const currentNumber = document.createElement('span');
    const allNumbers = document.createElement('span');
    const prev = document.createElement('i');
    const next = document.createElement('i');
    let currentImg = 0;
    let currentScrollPos = 0;
    let x1 = null;
    let y1 = null;
    let isclick = false;
    popup.classList.add('popup');
    popupButtons.classList.add('popup__btns');
    numberOfImg.classList.add('popup__numbers');
    img.classList.add('popup__img');
    prev.classList.add('slider__prev');
    next.classList.add('slider__next');
    zoom.innerHTML = `<svg  viewBox="0 0 512 512" height="18px" width="18px" fill="#fff"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></svg>`;
    close.innerHTML = '<svg  viewBox="0 0 384 512" height="26px" width="26px" fill="#fff"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
    fullscreen.innerHTML = '<svg  viewBox="0 0 448 512" height="20px" width="20px" fill="#fff"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>';
    imgs.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            currentScrollPos = window.scrollY;
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

    fullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            popup.requestFullscreen();
            fullscreen.innerHTML = '<svg  viewBox="0 0 448 512" height="20px" width="20px" fill="#fff" ><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/></svg>';
        }
        else {
            document.exitFullscreen();
            fullscreen.innerHTML = '<svg  viewBox="0 0 448 512" height="20px" width="20px" fill="#fff"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>';
        }
    });
    zoom.addEventListener('click', () => {
        img.classList.toggle('popup__img-zomming')
        if (isclick) {
            isclick = false;
            zoom.innerHTML = `<svg  viewBox="0 0 512 512" height="18px" width="18px" fill="#fff"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></svg>`;
        }
        else {
            isclick = true;
            zoom.innerHTML = `<svg  viewBox="0 0 512 512" height="18px" width="18px" fill="#fff" ><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"/></svg>`;
        }

    });
    close.addEventListener('click', () => {
        closeModal(popup);
    });
    next.addEventListener('click', getNext);
    prev.addEventListener('click', getPrev);

    popup.addEventListener('touchstart', (e) => {
        x1 = e.touches[0].clientX;
        y1 = e.touches[0].clientY;

    }, { passive: true });

    popup.addEventListener('touchmove', (e) => {
        if (!x1 || !y1) {
            return false;
        }
        let x2 = e.touches[0].clientX;
        let y2 = e.touches[0].clientY;
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                getPrev();
            }
            else { 
                getNext();
                
            }
        }
        else {
            if (yDiff > 0 || yDiff < 0) {
                closeModal(popup);
            }
        }
        x1 = null;
        y1 = null;
    }, { passive: true })
    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight') {
            getNext();
        }
        else if (e.code === 'ArrowLeft') {
            getPrev();
        }
    });

    document.addEventListener('fullscreenchange', () => {
        window.scrollTo(0, currentScrollPos);
    }, { passive: true });

    function closeModal(modal) {
        img.classList.remove('popup__img-zomming');
        modal.remove();
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 400);

    }
    function getNext() {
        if (currentImg >= +imgs.length - 1)
            currentImg = -1;
        img.setAttribute('src', imgs[++currentImg].getAttribute('href'));
        currentNumber.innerHTML = `${currentImg + 1}`;
    }
    function getPrev() {
        if (currentImg <= 0)
            currentImg = +imgs.length;
        img.setAttribute('src', imgs[--currentImg].getAttribute('href'));
        currentNumber.innerHTML = `${currentImg + 1}`;
    }



}

export default lightbox;