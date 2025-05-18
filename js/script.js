document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Fecha outros itens abertos, se necessário
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
                }
            });

            // Alterna o estado do item clicado
            item.classList.toggle('open');
        });
    });
});