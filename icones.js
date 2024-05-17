
document.addEventListener("DOMContentLoaded", function() {
    const linkCorridas = document.getElementById("link-corridas");
    const calendario = document.getElementById("calendario");

    linkCorridas.addEventListener("click", function() {
        if (calendario.classList.contains("calendario-oculto")) {
            calendario.classList.remove("calendario-oculto");
        } else {
            calendario.classList.add("calendario-oculto");
        }
    });
});
