 function gos () {
    function ownKeys(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            if (t)
                o = o.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                });
            n.push.apply(n, o);
        }
        return n;
    }

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            if (t % 2)
                ownKeys(Object(n), true).forEach(function (t) {
                    _defineProperty(e, t, n[t]);
                });
            else if (Object.getOwnPropertyDescriptors)
                Object.defineProperties(e, Object
                    .getOwnPropertyDescriptors(n));
            else
                ownKeys(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
    }

    function _defineProperty(e, t, n) {
        if (t in e)
            Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
            });
        else
            e[t] = n;
        return e;
    }
    var POS_PREFIX_19 = "--pos-banner-fluid-19__", posOptionsInitialBanner19 = {
        background: "#5571",
        "grid-template-columns": "100%",
        "grid-template-rows": "262px auto",
        "max-width": "100%",
        "text-font-size": "20px",
        "text-margin": "0 0 24px 0",
        "button-wrap-max-width": "100%",
        "bg-url": "url('https://pos.gosuslugi.ru/bin/banner-fluid/18/banner-fluid-bg-18-2.svg')",
        "bg-url-position": "right bottom",
        "content-padding": "26px 24px 24px",
        "content-grid-row": "0",
        "logo-wrap-padding": "16px 12px 12px",
        "logo-width": "65px",
        "logo-wrap-top": "0",
        "logo-wrap-left": "0",
        "slogan-font-size": "12px"
    }, setStyles = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_19;
        Object.keys(e).forEach(function (o) {
            t.style.setProperty(n + o, e[o]);
        });
    }, removeStyles = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_19;
        Object.keys(e).forEach(function (e) {
            t.style.removeProperty(n + e);
        });
    };

    function changePosBannerOnResize() {
        var e = document.documentElement, t = _objectSpread({}, posOptionsInitialBanner19), n = document.getElementById("js-show-iframe-wrapper"), o = n ? n.offsetWidth : document.body.offsetWidth;
        if (o > 340)
            t["button-wrap-max-width"] = "209px";
        if (o > 482)
            t["content-padding"] = "24px", t["text-font-size"] = "24px";
        if (o > 568)
            t["grid-template-columns"] = "1fr 292px", t["grid-template-rows"] = "100%", t["content-grid-row"] = "1", t["content-padding"] = "32px 24px", t["bg-url-position"] = "calc(100% + 35px) bottom";
        if (o > 610)
            t["bg-url-position"] = "calc(100% + 12px) bottom";
        if (o > 726)
            t["bg-url-position"] = "right bottom";
        if (o > 783)
            t["grid-template-columns"] = "1fr 390px";
        if (o > 820)
            t["grid-template-columns"] = "1fr 420px", t["bg-url-position"] =
                "right bottom";
        if (o > 1098)
            t["bg-url"] =
                "url('https://pos.gosuslugi.ru/bin/banner-fluid/18/banner-fluid-bg-18-3.svg')", t["bg-url-position"] = "calc(100% + 55px) bottom", t["grid-template-columns"] =
                "1fr 557px", t["text-font-size"] = "32px", t["content-padding"] = "32px 32px 32px 50px",
                t["logo-width"] = "78px", t["slogan-font-size"] = "15px", t["logo-wrap-padding"] =
                "20px 16px 16px";
        if (o > 1422)
            t["max-width"] = "1422px", t["grid-template-columns"] = "1fr 720px", t["content-padding"] = "32px 48px 32px 160px", t.background =
                "linear-gradient(90deg, #5571 50%, #f8efec 50%)";
        setStyles(t, e);
    }
    changePosBannerOnResize(), window.addEventListener("resize", changePosBannerOnResize), window
        .onunload = function () {
            var e = document.documentElement, t = _objectSpread({}, posOptionsInitialBanner19);
            window.removeEventListener("resize", changePosBannerOnResize), removeStyles(t, e);
        };
// console.log('1 >>> window.parent.location: \n', window.parent.location);
// console.log('2 >>> window.parent.location.href: \n', window.parent.location.href);
// console.log('3 >>> window.location: \n', window.location);
// console.log('4 >>> window.location.href: \n', window.location.href);
// console.log('5 >>> window.location.host: \n', window.location.host);
// console.log('6 >>> window.location.origin: \n', window.location.origin);


/* eslint-disable */
function Widget(src, opaId, isFz59) {
    const ACTION_ID = 'js-show-iframe-wrapper';
    const BLOCK_ACTION_CLASS = 'pos-block-action';
  
    let fz59 = isFz59 ? 'true' : 'false';
    src += '?opaId=' + opaId + '&fz59=' + fz59;
  
    let div = document.createElement('div');
    let header = document.createElement('header');
    let overlay = document.createElement('div');
    let body = document.getElementsByTagName('body')[0];
  
    //  css
    div.style.background = 'white';
    div.style.position = 'fixed';
    div.style.maxWidth = '620px';
    div.style.maxHeight = '768px';
    div.style.margin = 'auto';
    div.style.top = '0';
    div.style.bottom = '0';
    div.style.left = '0';
    div.style.right = '0';
    div.style.zIndex = '999999999';
  
    overlay.style.position = 'fixed';
    overlay.style.zIndex = '999999998';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.backgroundColor = 'rgba(0,0,0,.3)';
  
    // attr
    div.setAttribute('id', 'js-iframe-wrapper');
    overlay.setAttribute('id', 'js-iframe-overlay');
    let iframe = document.createElement('iframe');
  
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
  
    iframe.setAttribute('src', src);
    iframe.setAttribute('id', 'js-iframe-widget');
    iframe.referrerPolicy = 'unsafe-url';
  
    div.appendChild(iframe);
    header.innerHTML = 'Новое обращение';
  
    function destroy() {
      let body = document.getElementsByTagName('body')[0];
      let wOverlay = document.getElementById('js-iframe-overlay');
      let wWrapper = document.getElementById('js-iframe-wrapper');
      wWrapper && body.removeChild(wWrapper);
      wOverlay && body.removeChild(wOverlay);
    }
  
    function create() {
      body.appendChild(div);
      body.appendChild(overlay);
    }
  
    function closeWidget() {
      destroy();
    }
  
    function showWidget() {
      create();
    }
  
    const openWidgetBtn = document.getElementById(ACTION_ID);
  
    if (openWidgetBtn) {
  
      openWidgetBtn.addEventListener('click', function (e) {
  
        e.preventDefault();
        showWidget();
      });
  
      openWidgetBtn.addEventListener('touchend', function (e) {
  
        if (!document.getElementById(ACTION_ID).classList.contains(BLOCK_ACTION_CLASS)) {
  
          showWidget();
        } else {
  
          setTimeout(function () {
            document.getElementById(ACTION_ID).classList.remove(BLOCK_ACTION_CLASS);
          }, 0);
  
        }
  
      });
  
      openWidgetBtn.addEventListener('touchmove', function (e) {
  
        document.getElementById(ACTION_ID).classList.add(BLOCK_ACTION_CLASS); // предотвращаем экшен при скролле на лаптопах
      });
    }
  
    window.addEventListener('message', function (event) {
      if (event.data.close) {
        closeWidget();
      }
    }, false);
  
    // переопределяем слоган
    (function overrideSlogan() {
      const posBanner = document.getElementById(ACTION_ID);
      const posButton = posBanner.querySelector('.bf-1 .pos-banner-btn_2') || posBanner.querySelector('.bf-2 .pos-banner-btn_2');
      
      if (posBanner) {
        const sloganTag = posBanner.querySelector('.bf-1__slogan') || posBanner.querySelector('.bf-2__slogan');
  
        if (sloganTag) {
          sloganTag.innerHTML = 'Решаем вместе';
        }
        
        if(posButton){
          posButton.innerHTML = 'Сообщить о проблеме';
          posButton.style.width = '240px';
        }
      }
  
    })();
  
  }
  Widget("https://pos.gosuslugi.ru/form", 271976);
 }        

export default gos;
       