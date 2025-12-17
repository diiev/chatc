function lightbox() {
  const imgs = document.querySelectorAll('[data-fslightbox]');
  if (!imgs.length) return;

  // ---------- SVG (как было у тебя) ----------
  const ICON_ZOOM_PLUS = `
    <svg viewBox="0 0 512 512" height="18px" width="18px" fill="#fff">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/>
    </svg>
  `;

  const ICON_ZOOM_MINUS = `
    <svg viewBox="0 0 512 512" height="18px" width="18px" fill="#fff">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"/>
    </svg>
  `;

  const ICON_CLOSE = `
    <svg viewBox="0 0 384 512" height="26px" width="26px" fill="#fff">
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
    </svg>
  `;

  const ICON_FULLSCREEN_ENTER = `
    <svg viewBox="0 0 448 512" height="20px" width="20px" fill="#fff">
      <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/>
    </svg>
  `;

  const ICON_FULLSCREEN_EXIT = `
    <svg viewBox="0 0 448 512" height="20px" width="20px" fill="#fff">
      <path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/>
    </svg>
  `;

  // ---------- DOM (структура как была) ----------
  const popup = document.createElement('div');
  const img = document.createElement('img');

  const popupButtons = document.createElement('div');
  const close = document.createElement('span');
  const fullscreen = document.createElement('span');
  const zoom = document.createElement('span');

  const numberOfImg = document.createElement('div');
  const currentNumber = document.createElement('span');
  const allNumbers = document.createElement('span');

  const popupBtnPrev = document.createElement('div');
  const popupBtnNext = document.createElement('div');
  const prev = document.createElement('i');
  const next = document.createElement('i');

  popup.classList.add('popup');
  popupButtons.classList.add('popup__btns');
  numberOfImg.classList.add('popup__numbers');
  img.classList.add('popup__img');

  popupBtnNext.classList.add('popup__slideBtnsNext');
  popupBtnPrev.classList.add('popup__slideBtnsPrev');
  prev.classList.add('slider__prev');
  next.classList.add('slider__next');

  zoom.innerHTML = ICON_ZOOM_PLUS;
  close.innerHTML = ICON_CLOSE;
  fullscreen.innerHTML = ICON_FULLSCREEN_ENTER;

  popupBtnPrev.append(prev);
  popupBtnNext.append(next);

  numberOfImg.append(currentNumber);
  numberOfImg.append(allNumbers);

  popupButtons.append(fullscreen);
  popupButtons.append(zoom);
  popupButtons.append(close);

  popup.append(img);
  popup.append(popupBtnPrev);
  popup.append(popupBtnNext);
  popup.append(numberOfImg);
  popup.append(popupButtons);

  // ---------- state ----------
  let currentImg = 0;
  let currentScrollPos = 0;
  let isOpen = false;

  // swipe
  let x1 = null;
  let y1 = null;

  // zoom/pan
  let scale = 1;
  let tx = 0;
  let ty = 0;

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let startTx = 0;
  let startTy = 0;

  // fade token
  let changeId = 0;

  function scrollbarWidth() {
    return Math.max(0, window.innerWidth - document.documentElement.clientWidth);
  }

  function setZoomIcon() {
    zoom.innerHTML = scale > 1 ? ICON_ZOOM_MINUS : ICON_ZOOM_PLUS;
  }

  function applyTransform(withTransition = true) {
    img.style.transition = withTransition ? '' : 'opacity .25s ease';
    img.style.setProperty('--scale', String(scale));
    img.style.setProperty('--tx', `${tx}px`);
    img.style.setProperty('--ty', `${ty}px`);
    setZoomIcon();
  }

  function resetTransform(withTransition = true) {
    scale = 1;
    tx = 0;
    ty = 0;
    applyTransform(withTransition);
  }

  function updateCounter() {
    currentNumber.textContent = String(currentImg + 1);
    allNumbers.textContent = ` / ${imgs.length}`;
  }

  function setFullscreenIcon() {
    fullscreen.innerHTML = document.fullscreenElement ? ICON_FULLSCREEN_EXIT : ICON_FULLSCREEN_ENTER;
  }

  function setFullScreenImg() {
    if (!document.fullscreenElement) popup.requestFullscreen?.();
    else document.exitFullscreen?.();
  }

  function setImage(index, animate = true) {
    changeId += 1;
    const myId = changeId;

    currentImg = index;
    updateCounter();
    resetTransform(true);

    const src = imgs[currentImg].getAttribute('href');

    const swapToNewSrc = () => {
      if (myId !== changeId) return;

      img.onload = () => {
        if (myId !== changeId) return;
        img.classList.remove('popup__img--fadeout');
        img.onload = null;
      };

      img.src = src;

      // кэш
      if (img.complete) requestAnimationFrame(img.onload);
    };

    if (!animate) {
      img.classList.remove('popup__img--fadeout');
      swapToNewSrc();
      return;
    }

    img.classList.add('popup__img--fadeout');

    const onFadeOutEnd = (e) => {
      if (e.propertyName !== 'opacity') return;
      img.removeEventListener('transitionend', onFadeOutEnd);
      swapToNewSrc();
    };

    img.addEventListener('transitionend', onFadeOutEnd);
  }

  function openModal(index) {
    if (isOpen) return;
    isOpen = true;

    currentScrollPos = window.scrollY;

    const sbw = scrollbarWidth();
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = sbw ? `${sbw}px` : '';

    document.body.append(popup);
    requestAnimationFrame(() => popup.classList.add('is-open'));

    setImage(index, false);
  }

  function closeModal() {
    if (!isOpen) return;
    isOpen = false;

    resetTransform(true);
    img.classList.remove('popup__img--fadeout');

    popup.classList.remove('is-open');

    const onEnd = () => {
      popup.removeEventListener('transitionend', onEnd);

      document.body.style.overflow = '';
      document.body.style.paddingRight = '';

      if (popup.parentNode) popup.remove();
      window.scrollTo(0, currentScrollPos);
    };

    popup.addEventListener('transitionend', onEnd);
    setTimeout(onEnd, 350);
  }

  function getNext() {
    const nextIndex = (currentImg + 1) % imgs.length;
    setImage(nextIndex, true);
  }

  function getPrev() {
    const prevIndex = (currentImg - 1 + imgs.length) % imgs.length;
    setImage(prevIndex, true);
  }

  // ---------- bindings ----------
  imgs.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(i);
    });
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) closeModal();
  });

  close.addEventListener('click', (e) => {
    e.stopPropagation();
    closeModal();
  });

  popupBtnNext.addEventListener('click', (e) => {
    e.stopPropagation();
    getNext();
  });

  popupBtnPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    getPrev();
  });

  fullscreen.addEventListener('click', (e) => {
    e.stopPropagation();
    setFullScreenImg();
  });

  zoom.addEventListener('click', (e) => {
    e.stopPropagation();
    // "лупа": toggle 1x <-> 2x, а колесо работает поверх
    if (scale <= 1) {
      scale = 2;
      applyTransform(true);
    } else {
      resetTransform(true);
    }
  });

  document.addEventListener('fullscreenchange', () => {
    // не даем странице прыгать при выходе из fullscreen
    if (isOpen) window.scrollTo(0, currentScrollPos);
    setFullscreenIcon();
  }, { passive: true });

  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;

    if (e.code === 'Escape') closeModal();
    if (e.code === 'ArrowRight') getNext();
    if (e.code === 'ArrowLeft') getPrev();
    if (e.code === 'KeyF') setFullScreenImg();
  });

  // wheel zoom (к курсору)
  popup.addEventListener('wheel', (e) => {
    if (!isOpen) return;
    e.preventDefault();

    const rect = img.getBoundingClientRect();
    const cx = e.clientX - (rect.left + rect.width / 2);
    const cy = e.clientY - (rect.top + rect.height / 2);

    const prevScale = scale;
    const delta = e.deltaY > 0 ? -0.12 : 0.12;

    scale = Math.min(5, Math.max(1, scale + delta));

    if (scale === 1) {
      tx = 0;
      ty = 0;
      applyTransform(true);
      return;
    }

    const k = scale / prevScale;
    if (k && k !== 1) {
      tx = tx - cx * (k - 1);
      ty = ty - cy * (k - 1);
    }

    applyTransform(true);
  }, { passive: false });

  // drag/pan (только если scale > 1)
  img.addEventListener('pointerdown', (e) => {
    if (!isOpen) return;
    if (scale <= 1) return;

    dragging = true;
    img.classList.add('is-dragging');
    img.setPointerCapture(e.pointerId);

    startX = e.clientX;
    startY = e.clientY;
    startTx = tx;
    startTy = ty;
  });

  img.addEventListener('pointermove', (e) => {
    if (!dragging) return;

    tx = startTx + (e.clientX - startX);
    ty = startTy + (e.clientY - startY);

    applyTransform(false);
  });

  function endDrag() {
    dragging = false;
    img.classList.remove('is-dragging');
    applyTransform(true);
  }

  img.addEventListener('pointerup', endDrag);
  img.addEventListener('pointercancel', endDrag);

  // swipe (как было по смыслу), но отключаем при увеличении
  popup.addEventListener('touchstart', (e) => {
    if (!isOpen) return;
    if (scale > 1) return;

    x1 = e.touches[0].clientX;
    y1 = e.touches[0].clientY;
  }, { passive: true });

  popup.addEventListener('touchmove', (e) => {
    if (!isOpen) return;
    if (scale > 1) return;
    if (x1 === null || y1 === null) return;

    const x2 = e.touches[0].clientX;
    const y2 = e.touches[0].clientY;

    const xDiff = x2 - x1;
    const yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) getPrev();
      else getNext();
    } else {
      if (Math.abs(yDiff) > 40) closeModal();
    }

    x1 = null;
    y1 = null;
  }, { passive: true });
}

export default lightbox;
