function feedback() {

    // JavaScript для аккордеона
    // Инициализация аккордеона
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Закрываем все открытые элементы
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.classList.remove('active');
            });
            
            // Если элемент был закрыт, открываем его
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });
    
    // Открываем первый элемент аккордеона по умолчанию
    if (accordionHeaders.length > 0) {
        accordionHeaders[0].classList.add('active');
        accordionHeaders[0].nextElementSibling.classList.add('active');
    }
    

    // Маска для телефона
    function initPhoneMask() {
        const phoneInput = document.getElementById('phone');
        
        if (phoneInput) {
            // При фокусе добавляем префикс +7, если поле пустое
            phoneInput.addEventListener('focus', function() {
                if (!this.value) {
                    this.value = '+7 (';
                }
            });
            
            // Обработка ввода
            phoneInput.addEventListener('input', function(e) {
                let value = this.value.replace(/\D/g, '');
                
                if (value.length === 0) {
                    this.value = '';
                    return;
                }
                
                if (value.length === 1 && value[0] !== '7') {
                    value = '7' + value;
                }
                
                if (value[0] !== '7') {
                    value = '7' + value.substring(1);
                }
                
                let formattedValue = '+7 (';
                
                if (value.length > 1) {
                    formattedValue += value.substring(1, 4);
                }
                if (value.length >= 4) {
                    formattedValue += ') ';
                }
                if (value.length >= 5) {
                    formattedValue += value.substring(4, 7);
                }
                if (value.length >= 7) {
                    formattedValue += '-';
                }
                if (value.length >= 8) {
                    formattedValue += value.substring(7, 9);
                }
                if (value.length >= 9) {
                    formattedValue += '-';
                }
                if (value.length >= 10) {
                    formattedValue += value.substring(9, 11);
                }
                
                this.value = formattedValue;
            });
            
            // Обработка клавиш Backspace и Delete
            phoneInput.addEventListener('keydown', function(e) {
                // Если курсор в начале и нажали Backspace, предотвращаем удаление "+7 ("
                if (e.key === 'Backspace' && this.selectionStart <= 4) {
                    e.preventDefault();
                }
                
                // Если нажали Delete и выделен префикс, предотвращаем удаление
                if (e.key === 'Delete' && this.selectionStart < 4) {
                    e.preventDefault();
                }
            });
            
            // Обработка потери фокуса
            phoneInput.addEventListener('blur', function() {
                if (this.value === '+7 (') {
                    this.value = '';
                }
            });
        }
    }
    
    // Инициализируем маску для телефона
    initPhoneMask();


    // AJAX обработка формы
    const feedbackForm = document.getElementById('feedbackForm');
    const ajaxStatus = document.getElementById('ajaxStatus');
    const submitBtn = document.getElementById('submitBtn');
    
    if (feedbackForm) {
        // Обработчик отправки формы
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Валидация формы
            if (!validateForm()) {
                return false;
            }
            
            // Блокируем кнопку отправки
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Отправка...';
            
            // Собираем данные формы
            const formData = new FormData(feedbackForm);
            
            // Добавляем действие для WordPress
            formData.append('action', 'send_feedback');
            
            // Отправляем AJAX запрос
            fetch(feedback_ajax.ajax_url, {
                method: 'POST',
                body: formData,
                credentials: 'same-origin'
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Успешная отправка
                    showStatus(ajaxStatus, data.data.message, 'success');
                    feedbackForm.reset();
                    
                    // Прокрутка к сообщению об успехе
                    ajaxStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Автоматически скрываем через 5 секунд
                    setTimeout(() => {
                        ajaxStatus.style.display = 'none';
                    }, 5000);
                } else {
                    // Ошибка
                    showStatus(ajaxStatus, data.data.message, 'error');
                }
            })
            .catch(error => {
                // Ошибка сети
                showStatus(ajaxStatus, 'Ошибка сети. Пожалуйста, попробуйте еще раз.', 'error');
                console.error('Ошибка:', error);
            })
            .finally(() => {
                // Разблокируем кнопку
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Отправить обращение';
            });
        });
    }
    
    // Функция валидации формы
    function validateForm() {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value.trim();
        const consent = document.getElementById('consent').checked;
        
        let errors = [];
        
        if (!fullName) {
            errors.push('ФИО');
            highlightField('fullName', true);
        } else {
            highlightField('fullName', false);
        }
        
        if (!email) {
            errors.push('Email');
            highlightField('email', true);
        } else {
            highlightField('email', false);
        }
        
        if (phone) {
            // Валидация телефона (учитываем маску)
            const phoneDigits = phone.replace(/\D/g, '');
            if (phoneDigits.length !== 11 || phoneDigits[0] !== '7') {
                errors.push('Номер телефона должен быть в формате +7 (XXX)-XXX-XX-XX');
                highlightField('phone', true);
            } else {
                highlightField('phone', false);
            }
        }
        
        if (!topic || topic === '') {
            errors.push('Тема обращения');
            highlightField('topic', true);
        } else {
            highlightField('topic', false);
        }
        
        if (!message) {
            errors.push('Сообщение');
            highlightField('message', true);
        } else {
            highlightField('message', false);
        }
        
        if (!consent) {
            errors.push('согласие на обработку данных');
            highlightField('consent', true);
        } else {
            highlightField('consent', false);
        }
        
        if (errors.length > 0) {
            showStatus(ajaxStatus, 'Пожалуйста, заполните все обязательные поля правильно: ' + errors.join(', '), 'error');
            return false;
        }
        
        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus(ajaxStatus, 'Пожалуйста, введите корректный email адрес', 'error');
            highlightField('email', true);
            return false;
        } else {
            highlightField('email', false);
        }
        
        return true;
    }
    
    // Функция для подсветки поля с ошибкой
    function highlightField(fieldId, isError) {
        const field = document.getElementById(fieldId);
        if (!field) return;
        
        if (fieldId === 'consent') {
            const consentLabel = document.querySelector('label[for="consent"]');
            if (consentLabel) {
                consentLabel.style.color = isError ? '#ff4444' : '';
            }
            return;
        }
        
        if (isError) {
            field.style.borderColor = '#ff4444';
            field.style.boxShadow = '0 0 0 1px #ff4444';
        } else {
            field.style.borderColor = '';
            field.style.boxShadow = '';
        }
    }
    
    // Функция для показа статусных сообщений
    function showStatus(element, message, type) {
        element.textContent = message;
        element.className = `status-message ${type} show`;
        element.style.display = 'block';
        
        // Прокрутка к сообщению
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Автоматически скрываем сообщение через 5 секунд (только для успеха)
        if (type === 'success') {
            setTimeout(() => {
                element.style.display = 'none';
            }, 5000);
        }
    }
    
    // Управление состоянием кнопки отправки
    const consentCheckbox = document.getElementById('consent');
    
    if (consentCheckbox && submitBtn) {
        consentCheckbox.addEventListener('change', function() {
            updateSubmitButton();
        });
        
        // Инициализация состояния кнопки
        updateSubmitButton();
    }
    
    function updateSubmitButton() {
        const isConsentChecked = consentCheckbox.checked;
        
        // Проверяем обязательные поля (без валидации формата)
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value.trim();
        
        const areRequiredFieldsFilled = fullName && email && topic && topic !== '' && message;
        
        submitBtn.disabled = !isConsentChecked || !areRequiredFieldsFilled;
        submitBtn.style.opacity = submitBtn.disabled ? '0.6' : '1';
    }
    
    // Слушатели изменений в полях формы для обновления состояния кнопки
    const formFields = ['fullName', 'email', 'topic', 'message'];
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', updateSubmitButton);
            field.addEventListener('change', updateSubmitButton);
        }
    });
    
    // Сброс подсветки ошибок при вводе
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', function() {
                highlightField(fieldId, false);
            });
        }
    });
    
    // Для телефона тоже добавляем сброс подсветки
    const phoneField = document.getElementById('phone');
    if (phoneField) {
        phoneField.addEventListener('input', function() {
            highlightField('phone', false);
        });
    }
    
    // Для согласия
    if (consentCheckbox) {
        consentCheckbox.addEventListener('change', function() {
            highlightField('consent', false);
        });
    }

} 

export default feedback;