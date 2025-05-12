// Fonction exécutée lorsque la page est complètement chargée
window.addEventListener("load", function () {
    // Cible le loader et le contenu principal
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Masque le loader
    loader.style.display = "none";

    // Affiche le contenu principal
    mainContent.style.display = "block";
});
