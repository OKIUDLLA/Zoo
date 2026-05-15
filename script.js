// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Lightbox for gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

if (lightbox) {
    document.querySelectorAll('.g-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const src = item.getAttribute('data-img');
            if (!src) return;
            lightboxImg.src = src;
            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });
    const closeBox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImg.src = '';
    };
    lightboxClose?.addEventListener('click', closeBox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeBox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeBox();
    });
}
