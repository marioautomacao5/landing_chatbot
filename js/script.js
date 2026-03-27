// animação ao rolar a página
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

window.addEventListener('load', showElements);
window.addEventListener('scroll', showElements);

// ===============================
// BOTÃO COMEÇA PARADO POR 3s
// ===============================

const botoes = document.querySelectorAll('.cta-button, .whatsapp-float');

botoes.forEach(btn => {
    btn.classList.add('animacao-parada');
});

setTimeout(() => {
    botoes.forEach(btn => {
        btn.classList.remove('animacao-parada');
    });
}, 3000);