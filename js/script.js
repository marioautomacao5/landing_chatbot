// ======================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ======================================

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


// ======================================
// BOTÕES COMEÇAM PARADOS POR 3s
// ======================================

const botoes = document.querySelectorAll('.cta-button, .whatsapp-float');

botoes.forEach(btn => {
    btn.classList.add('animacao-parada');
});

setTimeout(() => {
    botoes.forEach(btn => {
        btn.classList.remove('animacao-parada');
    });
}, 3000);


// ======================================
// DESTAQUE AUTOMÁTICO (efeito psicológico)
// ======================================

setTimeout(() => {
    const principal = document.querySelector('.cta-button');

    if (principal) {
        principal.classList.add('cta-highlight');
        principal.classList.add('btn-balanco');
    }
}, 3000);


// ======================================
// PULSO DO BOTÃO WHATSAPP
// ======================================

setTimeout(() => {
    const whatsapp = document.querySelector('.whatsapp-float');

    if (whatsapp) {
        whatsapp.classList.add('whatsapp-pulse');
    }
}, 3000);


// ======================================
// LINK DO WHATSAPP EM TODOS OS BOTÕES
// ======================================

const linkWhats = "https://wa.me/14155238886?text=Olá%20quero%20meu%20vendedor%20digital%para%20WhatsApp";

botoes.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(linkWhats, "_blank");
    });
});