function up () {
    const btnUp = {
        el: document.querySelector('.top_arrow'),
        show() {
          // удалим у кнопки класс scrollTop_hide
          this.el.classList.remove('top_arrow_hide');
        },
        hide() {
          // добавим к кнопке класс scrollTop_hide
          this.el.classList.add('top_arrow_hide');
        },
        addEventListener() {
          // при прокрутке содержимого страницы
          window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 900px, то делаем кнопку видимой, иначе скрываем
            scrollY > 900 ? this.show() : this.hide();
          });
          // при нажатии на кнопку .btn-up
          document.querySelector('.top_arrow').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
      };
    
      btnUp.addEventListener();
}
export default up;