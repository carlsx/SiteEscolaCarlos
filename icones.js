document.addEventListener('DOMContentLoaded', function() {
    const linkCorridas = document.querySelector('.link-corridas');
    const calendario = document.getElementById('calendario');

    linkCorridas.addEventListener('click', function() {
        calendario.classList.toggle('calendario-oculto');
    });
});
