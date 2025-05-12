// Fonction exécutée lorsque la page est complètement chargée
window.addEventListener("load", function () {
    // Cible le loader et le contenu principal
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Vérifier si le loader existe avant de le manipuler
    if (loader) {
        loader.style.display = "none";  // Masquer le loader
    }

    // Vérifier si le contenu principal existe avant de l'afficher
    if (mainContent) {
        mainContent.style.display = "block";  // Afficher le contenu principal
    }
});
