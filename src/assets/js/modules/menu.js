// Константы и утилиты
const MOBILE_AGENTS = {
  Android: /Android/i,
  BlackBerry: /BlackBerry/i,
  iOS: /iPhone|iPad|iPod/i,
  Opera: /Opera Mini/i,
  Windows: /IEMobile/i,
};

const SELECTORS = {
  burger: '.burger',
  menu: '.menu',
  menuArrow: '.menu__link.arrow',
  submenuArrow: '.sub-menu__link.arrow',
  quoterSlider: '.quoter',
  searchIcon: '.fa-magnifying-glass',
};

// Утилитарные функции
const DeviceDetector = {
  isMobile: () => Object.values(MOBILE_AGENTS).some(regex => 
    navigator.userAgent.match(regex)
  ),
  
  isIOS: () => navigator.userAgent.match(MOBILE_AGENTS.iOS),
  
  getDeviceClass: () => DeviceDetector.isMobile() ? 'touch' : 'mouse',
};

const DomHelper = {
  getElement: (selector) => document.querySelector(selector),
  getElements: (selector) => document.querySelectorAll(selector),
  
  toggleClass: (element, className) => element?.classList.toggle(className),
  addClass: (element, className) => element?.classList.add(className),
  removeClass: (element, className) => element?.classList.remove(className),
  
  hasClass: (element, className) => element?.classList.contains(className),
};

// Обработчики событий
const EventHandlers = {
  handleBurgerClick: (burger, menu) => (e) => {
    e.preventDefault();
    DomHelper.toggleClass(burger, 'active');
    DomHelper.toggleClass(menu, 'menu__active');
    DomHelper.toggleClass(document.body, 'lock');
  },
  
  createArrowHandler: (arrows) => (e) => {
    e.preventDefault();
    const clickedArrow = e.currentTarget;
    
    // Переключаем классы для кликнутой стрелки
    DomHelper.toggleClass(clickedArrow, 'active');
    DomHelper.toggleClass(clickedArrow, 'parent');
    DomHelper.toggleClass(clickedArrow.nextElementSibling, 'submenu__active');
    
    // Сбрасываем другие стрелки
    arrows.forEach(arrow => {
      if (arrow !== clickedArrow) {
        DomHelper.removeClass(arrow, 'active');
        DomHelper.removeClass(arrow, 'parent');
        DomHelper.removeClass(arrow.nextElementSibling, 'submenu__active');
      }
    });
  },
};

// Основная логика меню
const MenuManager = {
  elements: {},
  
  init() {
    this.cacheElements();
    this.setupDeviceClasses();
    this.setupEventListeners();
    this.handleIOSSpecifics();
  },
  
  cacheElements() {
    this.elements = {
      burger: DomHelper.getElement(SELECTORS.burger),
      menu: DomHelper.getElement(SELECTORS.menu),
      menuArrows: DomHelper.getElements(SELECTORS.menuArrow),
      submenuArrows: DomHelper.getElements(SELECTORS.submenuArrow),
      quoterSlider: DomHelper.getElement(SELECTORS.quoterSlider),
      searchIcon: DomHelper.getElement(SELECTORS.searchIcon),
    };
  },
  
  setupDeviceClasses() {
    DomHelper.addClass(document.body, DeviceDetector.getDeviceClass());
  },
  
  setupEventListeners() {
    if (!this.elements.burger || !this.elements.menu) return;
    
    // Бургер меню
    this.elements.burger.addEventListener(
      'click',
      EventHandlers.handleBurgerClick(this.elements.burger, this.elements.menu)
    );
    
    // Мобильные стрелки
    if (DeviceDetector.isMobile()) {
      this.setupMobileArrows();
    }
  },
  
  setupMobileArrows() {
    const menuArrowHandler = EventHandlers.createArrowHandler(this.elements.menuArrows);
    const submenuArrowHandler = EventHandlers.createArrowHandler(this.elements.submenuArrows);
    
    this.elements.menuArrows.forEach(arrow => {
      arrow.addEventListener('click', menuArrowHandler);
    });
    
    this.elements.submenuArrows.forEach(arrow => {
      arrow.addEventListener('click', submenuArrowHandler);
    });
  },
  
  handleIOSSpecifics() {
    if (!DeviceDetector.isIOS()) return;
    
    if (this.elements.quoterSlider) {
      DomHelper.addClass(this.elements.quoterSlider, 'ios');
    }
    
    if (this.elements.searchIcon) {
      DomHelper.addClass(this.elements.searchIcon, 'search_icon_ios');
    }
  },
  
  // Публичные методы для внешнего контроля
  open() {
    DomHelper.addClass(this.elements.burger, 'active');
    DomHelper.addClass(this.elements.menu, 'menu__active');
    DomHelper.addClass(document.body, 'lock');
  },
  
  close() {
    DomHelper.removeClass(this.elements.burger, 'active');
    DomHelper.removeClass(this.elements.menu, 'menu__active');
    DomHelper.removeClass(document.body, 'lock');
  },
  
  isOpen() {
    return DomHelper.hasClass(this.elements.menu, 'menu__active');
  },
};

// Основная функция
function menu() {
  MenuManager.init();
}

// Экспорт
export default menu;
export { MenuManager, DeviceDetector }; // Дополнительный экспорт для расширенного использования