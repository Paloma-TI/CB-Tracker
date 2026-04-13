document.addEventListener('DOMContentLoaded', () => {
    const infoColumn = document.querySelector('.app-info-column');
    const appSection = document.querySelector('.app-section-flex');

    const observerOptions = {
        threshold: 0.2 // Dispara quando 20% da seção estiver visível
    };

    const appearanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ADICIONA A CLASSE
                infoColumn.classList.add('appear');
                // IMPORTANTE: Remove o observador para o texto NUNCA MAIS sumir
                appearanceObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (appSection && infoColumn) {
        appearanceObserver.observe(appSection);
    }
});