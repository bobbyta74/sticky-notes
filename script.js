const addnote = document.querySelector("#addnote");
const container = document.querySelector(".container")

function addsticky() {
    const note = document.createElement("div");
    note.classList.add("sticky");
    const textarea = document.createElement("textarea");
    textarea.placeholder = "Enter text: "
    const newbtn = document.createElement("button");
    newbtn.textContent = "x";
    newbtn.addEventListener("click", function () {
        newbtn.parentElement.remove();
    })
    note.appendChild(textarea);
    note.appendChild(newbtn);
    container.appendChild(note);
}

addnote.addEventListener("click", addsticky);

