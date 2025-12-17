 function cookie () {
  

    // Ключи для localStorage и названия cookie
    const COOKIE_CONSENT_KEY = 'chatc_cookie_consent';
    const SETTINGS_CACHE_KEY = 'chatc_cookie_settings';

    // Элементы DOM
    const banner = document.getElementById('cookieConsentBanner');
    const acceptBtn = document.getElementById('cookieConsentAccept');
    const rejectBtn = document.getElementById('cookieConsentReject');
    const customizeBtn = document.getElementById('cookieConsentCustomize');
    const settingsPanel = document.getElementById('cookieSettingsPanel');
    const settingsCloseBtn = document.getElementById('cookieSettingsClose');
    const settingsSaveBtn = document.getElementById('cookieSettingsSave');
    const analyticsToggle = document.getElementById('cookieAnalytics');
    const marketingToggle = document.getElementById('cookieMarketing');

    // Настройки по умолчанию (opt-out для аналитики и маркетинга)
    const defaultSettings = {
      analytics: false,
      marketing: false,
      necessary: true,
      version: '1.0'
    };

    // Проверяем, давал ли пользователь уже согласие
    function hasConsent() {
      return localStorage.getItem(COOKIE_CONSENT_KEY) === 'true';
    }

    // Получаем текущие настройки пользователя
    function getUserSettings() {
      const saved = localStorage.getItem(SETTINGS_CACHE_KEY);
      return saved ? JSON.parse(saved) : { ...defaultSettings };
    }

    // Сохраняем настройки
    function saveUserSettings(settings) {
      localStorage.setItem(SETTINGS_CACHE_KEY, JSON.stringify(settings));
    }

    // Устанавливаем cookie (в демо-целях, реальные теги подключаются отдельно)
    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
    }

    // Функция для применения выбранных настроек
    function applyConsent(settings) {
      // 1. Сохраняем факт выбора пользователя
      localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
      saveUserSettings(settings);

      // 2. Пример установки cookie (реальные теги интегрируются здесь)
      setCookie('cookie_consent', 'given', 365);
      if (settings.analytics) setCookie('allow_analytics', 'true', 365);
      if (settings.marketing) setCookie('allow_marketing', 'true', 365);

      // 3. **Критически важный шаг**: Обновляем Google Consent Mode или другие системы
      // Пример для Google Tag Manager (раскомментируйте и настройте под ваш GTM):
      /*
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'cookie_consent_update',
        'analytics_storage': settings.analytics ? 'granted' : 'denied',
        'ad_storage': settings.marketing ? 'granted' : 'denied'
      });
      */

      // 4. Скрываем баннер
      hideBanner();
      console.log('Настройки применены:', settings);
    }

    // Показываем баннер
    function showBanner() {
      banner.classList.add('cookie-banner--active');
      document.body.style.overflow = 'hidden';
    }

    // Скрываем баннер
    function hideBanner() {
      banner.classList.remove('cookie-banner--active');
      document.body.style.overflow = '';
    }

    // Показываем панель настроек
    function showSettingsPanel() {
      const settings = getUserSettings();
      analyticsToggle.checked = settings.analytics;
      marketingToggle.checked = settings.marketing;
      settingsPanel.removeAttribute('hidden');
    }

    // Скрываем панель настроек
    function hideSettingsPanel() {
      settingsPanel.setAttribute('hidden', '');
    }

    // Инициализация: показываем баннер, если согласия еще нет
    function init() {
      if (!hasConsent()) {
        // Небольшая задержка для лучшего UX
        setTimeout(showBanner, 800);
      } else {
        // Если согласие уже дано, применяем сохраненные настройки при загрузке страницы
        const settings = getUserSettings();
        applyConsent(settings);
      }
    }

    // Обработчики событий для основной панели
    acceptBtn.addEventListener('click', () => {
      applyConsent({ analytics: true, marketing: true, necessary: true });
    });

    rejectBtn.addEventListener('click', () => {
      applyConsent(defaultSettings); // Отклоняем все необязательные
    });

    customizeBtn.addEventListener('click', showSettingsPanel);

    // Обработчики для панели настроек
    settingsCloseBtn.addEventListener('click', hideSettingsPanel);
    settingsSaveBtn.addEventListener('click', () => {
      const newSettings = {
        analytics: analyticsToggle.checked,
        marketing: marketingToggle.checked,
        necessary: true,
        version: '1.0'
      };
      applyConsent(newSettings);
      hideSettingsPanel();
    });

    // Закрытие панели настроек по клику вне ее области
    settingsPanel.addEventListener('click', (e) => {
      if (e.target === settingsPanel) {
        hideSettingsPanel();
      }
    });

    // Закрытие по клавише Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !settingsPanel.hasAttribute('hidden')) {
        hideSettingsPanel();
      }
    });

    // Запускаем инициализацию после загрузки DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

  } 

  export default cookie