const button = document.querySelector("button")
const note = document.querySelector("textarea")
const bgColor = document.querySelector("#bg")
const textColor = document.querySelector("#text")
const rightDiv = document.querySelector(".right")

button.addEventListener("click", createStickyNote);

function createStickyNote(){
    const text = note.value;
    if(text.length  ===0)return;
   
    const stickyNote = document.createElement("div")
    stickyNote.innerText = text;
    stickyNote.classList.add("note")

    const cross = document.createElement("span")
    cross.innerHTML ="&times;"
    cross.classList.add("close");
    stickyNote.append(cross);

    //working on bg-color & color
    stickyNote.style.backgroundColor = bgColor.value
    stickyNote.style.color = textColor.value
    rightDiv.append(stickyNote);
    
    note.value ="";



    function removeStickyNote(evt){
       evt.target.parentElement.remove()
    }
}
