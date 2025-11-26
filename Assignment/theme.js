[...document.querySelectorAll('.themeBtn')].forEach((b) => {
    b.addEventListener('click', () => {
        const t = b.getAttribute('data-theme') || b.textContent.toLowerCase();
        document.body.setAttribute('class', t);
        document.body.setAttribute('data-theme', t);
    });
});