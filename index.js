const notesContainer = document.querySelector(".NOTES");
const createBtn = document.querySelector(".btn");

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    // Créer un conteneur pour une nouvelle note
    const noteContainer = document.createElement("div");
    noteContainer.className = "note-container";

    // Créer le champ pour le titre de la note
    const titleInput = document.createElement("input");
    titleInput.className = "note-title";
    titleInput.setAttribute("placeholder", "Enter note title...");
    titleInput.setAttribute("value", "Titre de la note");

    // Créer la zone d'édition pour le contenu de la note
    const inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.style.border = "1px solid #ccc";
    inputBox.style.padding = "10px";
    inputBox.style.margin = "10px 0";

    // Créer l'icône de suppression
    const img = document.createElement("img");
    img.src = "Pictures/bin.png";
    img.style.width = "20px";
    img.style.height = "20px";
    img.style.float = "right";
    img.style.cursor = "pointer";

    // Supprime la note si on clique sur l'image
    img.addEventListener("click", () => {
        notesContainer.removeChild(noteContainer);
        updateStorage();
    });

    // Ajouter l'icône de suppression à la zone de contenu
    inputBox.appendChild(img);

    // Ajouter le titre et le contenu à la nouvelle note
    noteContainer.appendChild(titleInput);
    noteContainer.appendChild(inputBox);

    // Ajouter la nouvelle note à la page
    notesContainer.appendChild(noteContainer);

    // Mettre à jour le stockage local
    updateStorage();
});
