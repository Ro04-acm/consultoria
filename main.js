document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bg-video");
    
    if (video) {
      video.addEventListener("ended", () => {
        video.pause();
        video.currentTime = video.duration; // Se queda congelado al final
      });
      
      // Si el video no se carga, mostrar el overlay de todos modos
      video.addEventListener("error", () => {
        const overlay = document.querySelector('.overlay');
        if (overlay) {
          overlay.style.display = 'block';
        }
      });
      
      // Asegurar que el overlay se muestre cuando el video esté listo
      video.addEventListener("loadeddata", () => {
        const overlay = document.querySelector('.overlay');
        if (overlay) {
          overlay.style.display = 'block';
        }
      });
    }
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });