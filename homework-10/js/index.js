let notesBlock = document.querySelector(".block");
let inputText = document.querySelector("#inputText");
let btnCreate = document.querySelector("#firstBtn");

let notesStore = [
  {
    id: 1,
    text: "Text",
  },
];

let genereteNotes = () => {
  notesBlock.innerHTML = "";
  if (notesStore.length != 0) {
    notesStore.map((el, index) => {
      notesBlock.innerHTML += `
                <div id="note${el.id}" class="note">
                    <p class="noteText">${el.text}</p>
                    <button class="noteDelete" id="btnDelete${el.id}">Delete</button>
                </div>
            `;
    });
  }
};

genereteNotes();

let createNote = () => {
  if (inputText.value.length != 0) {
    notesStore.push({
      id: notesStore.length > 0 ? notesStore[notesStore.length - 1].id + 1 : 1,
      text: inputText.value,
    });
    inputText.value = "";
    genereteNotes();
  }
};

btnCreate.addEventListener("click", createNote);
