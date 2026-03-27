const elements = document.querySelectorAll('.fade-in');

function showOnLoad() {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){
            el.classList.add('visible');
        }
    });
}

window.addEventListener('load', showOnLoad);
window.addEventListener('scroll', showOnLoad);
