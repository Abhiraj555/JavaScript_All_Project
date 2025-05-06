
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notesAll");
    attachEventListeners() ;
}
showNotes();

function updateStorage() {
    localStorage.setItem("notesAll", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img")
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true")
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

    inputBox.addEventListener("keyup", updateStorage);
    img.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });

    updateStorage()
})


function attachEventListeners() {
    let notesAll = document.querySelectorAll(".input-box");
    notesAll.forEach(note => {
        let img = note.querySelector("img");

        note.addEventListener("keyup", updateStorage);

        if (img) {
            img.addEventListener("click", () => {
                note.remove();
                updateStorage();
            });
        }
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
