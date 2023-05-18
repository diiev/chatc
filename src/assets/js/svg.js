function svg () {
      // svg
      const imgElements = document.querySelectorAll('img.img-svg');
      imgElements.forEach((img) => {
        const imgClass = img.getAttribute('class');
        const imgURL = img.getAttribute('src');
    
        fetch(imgURL)
          .then((response) => response.text())
          .then((data) => {
            const parser = new DOMParser();
            const svgElement = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
    
            if (typeof imgClass !== 'undefined') {
              svgElement.setAttribute('class', `${imgClass} replaced-svg`);
            }
    
            svgElement.removeAttribute('xmlns:a');
    
            if (!svgElement.getAttribute('viewBox') && svgElement.getAttribute('height') && svgElement.getAttribute('width')) {
              svgElement.setAttribute('viewBox', `0 0 ${svgElement.getAttribute('height')} ${svgElement.getAttribute('width')}`);
            }
    
            img.parentNode.replaceChild(svgElement, img);
          });
      });
    
}
export default svg;