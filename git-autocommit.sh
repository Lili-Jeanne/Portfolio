#!/bin/bash

# Chemin vers votre dépôt
REPO_PATH=""

# Aller dans le dépôt
cd "$REPO_PATH" || exit

# Surveiller les changements dans les fichiers et exécuter les commandes Git
while true; do
    git add .
    git commit -m "Automatic commit on file change"
    # Optionnel : décommentez la ligne suivante pour pousser automatiquement
    # git push
    sleep 5
done

