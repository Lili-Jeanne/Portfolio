// Faire référence à toutes les images
let tabImg = document.querySelectorAll("img.mot-doux-photo");


// Placer l'action qui va être appelée lors de la pression d'une touche
function replacePic(event) {
    if (event.code === "ArrowLeft") { // Flèche gauche pressée
        keepInMind = tabImg[tabImg.length-1].src;
        tabImg[tabImg.length-1].src = tabImg[0].src;
        for (let f = 0; f <tabImg.length-2; f = f+1){
            tabImg[f].src = tabImg[f+1].src;
        }
        tabImg[tabImg.length-2].src = keepInMind;
    }

    if (event.code === "ArrowRight") { // Flèche droite pressée
        keepInMind = tabImg[0].src; // Garde la première image en mémoire
        tabImg[0].src = tabImg[tabImg.length - 1].src; // Remplace la première image par la dernière
        for (let f = tabImg.length - 1; f > 0; f--) { // Décale les autres images vers la droite
            tabImg[f].src = tabImg[f - 1].src;
        }
        tabImg[1].src = keepInMind; // Place l'ancienne première image à la deuxième position
    }
}

// Ajouter un écouteur d'événements pour la pression des touches
document.addEventListener("keydown", replacePic);
