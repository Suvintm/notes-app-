const notescontainer = document.querySelector(".notes-cont");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shownotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");

}
shownotes();
function updatestorage(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}
createbtn.addEventListener("click", ()=>{
    let inputbox = document.createElement("p");
    let img= document.createElement("img");
    inputbox.className = "input-box";
    inputbox.className = 'input=box'
})