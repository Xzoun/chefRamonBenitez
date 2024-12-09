
window.addEventListener("scroll", () => {
    const servicios = document.getElementById("serv");
    const galeria = document.getElementById("gal");
    const acercaDe = document.getElementById("acd");
    const banner = document.getElementById("banner");
    const inicio = document.getElementById("init");
    const scroll = window.scrollY;

    if (scroll < 250) {
        banner.style.background = "none";
        servicios.style.color = "#0F0F11";
        galeria.style.color = "#0F0F11";
        acercaDe.style.color = "#0F0F11";
        inicio.style.color = "#0F0F11";
    } else {
        banner.style.background = "#0F0F11";
        servicios.style.color = "#ffffff";
        galeria.style.color = "#ffffff";
        acercaDe.style.color = "#ffffff";
        inicio.style.color = "#ffffff";
    }
});
