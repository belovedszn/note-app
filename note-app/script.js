

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".createBtn");
let notes = document.querySelectorAll(".input-box");

function storage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

function storageView () {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

storageView();

createBtn.addEventListener('click', ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./media/icons8-delete-30.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener('click', (e)=> {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        storage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = ()=> {
                storage();
            }
        })
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})