function lazyvideo () {

    const videos = document.querySelectorAll('video[data-src]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.src = video.dataset.src;
                video.muted = true; // Обязательно для autoplay
                video.load();
                video.play().catch(e => console.log('Autoplay blocked:', e)); // Явный play()
                observer.unobserve(video);
            }
        });
    }, { rootMargin: '50px' }); // Загрузка заранее
    
    videos.forEach(video => observer.observe(video));


}

export default lazyvideo