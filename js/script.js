const elements = document.querySelectorAll('.fade-in');

function showElements() {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            el.classList.add('visible');
        }
    });
}

// Executa quando a página carrega
window.addEventListener('load', showElements);

// Executa quando rolar
window.addEventListener('scroll', showElements);