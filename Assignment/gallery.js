const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

[...document.querySelectorAll('.thumb')].forEach((img) => {
    img.addEventListener('click', () => {
        if (!modal || !modalImg) return;
        modalImg.src = img.src;
        modal.style.display = 'flex';
    });
});

modal && modal.addEventListener('click', () => (modal.style.display = 'none'));
modalImg && modalImg.addEventListener('click', (e) => e.stopPropagation());