
function lightbox () {
    const el = document.querySelectorAll('#gallery1');
    el.forEach(item => {
       item.addEventListener('click', (e)=> {
            e.preventDefault();
            const modal = document.createElement('div');
            modal.style.cssText = `
            position:fixed;
            height: 100%;
            width:100%;
            background-color: rgba(0, 0, 0);
            left: 0;
            top:0;
            z-index:1000;
            overflow:hidden;
            transition: all .6s;
            `;
        const modalContainer = document.createElement('img');
         modal.append(modalContainer);
         modalContainer.setAttribute('src', item.getAttribute('src'));
         modalContainer.style.cssText = `
         position:absolute;
         height: 70%;
         width: 70%;
         left: 50%;
         top:50%;
         transform:translateX(-50%) translateY(-50%);
         object-fit: cover;
         transition: all .6s;

         `;
            document.body.append(modal);
       });
    });
}

export default lightbox;