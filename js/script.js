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
// TODOS OS BOTÕES
// ======================================

const botoes = document.querySelectorAll('.cta-button, .whatsapp-float');


// ======================================
// COMEÇAM PARADOS POR 3s
// ======================================

botoes.forEach(btn => {
    btn.classList.add('animacao-parada');
});


// ======================================
// APÓS 3 SEGUNDOS → TODOS ANIMAM IGUAL
// ======================================

setTimeout(() => {

    botoes.forEach(btn => {

        // remove o estado parado
        btn.classList.remove('animacao-parada');

        // aplica a MESMA animação em todos
        btn.classList.add('cta-highlight');
        btn.classList.add('btn-balanco');
        btn.classList.add('whatsapp-pulse');

    });

}, 3000);


// ======================================
// LINK WHATSAPP EM TODOS OS BOTÕES
// ======================================

const linkWhats = "https://wa.me/14155238886?text=Olá%20quero%20meu%20vendedor%20digital%para%20WhatsApp";

botoes.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(linkWhats, "_blank");
    });
});