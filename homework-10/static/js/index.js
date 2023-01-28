let notesHtml = document.querySelector("#notes");
let btnPost = document.querySelector("#btnPost");
let inputSearch = document.querySelector("#inputSearch");
let inputs = {
  title: document.querySelector("#inputTitle"),
  text: document.querySelector("#inputText"),
  color: document.querySelector("#inputColor"),
  clearInput() {
    this.title.value = null;
    this.text.value = null;
  },
  getInfo() {
    if (this.title.value.length != 0 && this.text.value.length != 0) {
      return {
        title: this.title.value,
        text: this.text.value,
        color: this.color.value,
      };
    } else {
      return null;
    }
  },
};

let notesStore = [
  {
    id: 1,
    title: "Title 1",
    text: "Зробити дз",
    color: "#FFF",
    timeCreated: {
      hours: 10,
      minutes: 20,
      seconds: 25,
    },
    statusEdit: 0,
  },
];

let notes = [];
let genereteNotes = () => {
  notesHtml.innerHTML = null;
  btnsDelete = [];
  btnsChange = [];
  notesStore.map((el, index) => {
    if (!el.statusDelete) {
      notesHtml.innerHTML += `
        <div class="noteBlock" id="note${index}" style="background:${el.color}">
            <h2>${el.title}</h2>
            <p id="noteText${index}">${el.text}</p>
            <p class="time">${el.timeCreated.hours}:${el.timeCreated.minutes}:${el.timeCreated.seconds}</p>
            <button class="btnChange" id="btnChange"></button>
            <button class="btnDelete" id="btnDelete">Delete</button>
        </div>
        `;
    }
    //console.log(document.querySelector(`#note${index}`))
  });
  for (let i = 0; i <= notesStore.length - 1; i++) {
    if (!notesStore[i].statusDelete) {
      notes[i] = document.querySelector(`#note${i}`);
      notes[i].addEventListener("click", (e) => {
        console.log(`Current target`, e.currentTarget);
        if (e.target.id == "btnDelete") {
          notesStore[i].statusDelete = true;
          genereteNotes();
        }
        if (e.target.id == "btnChange") {
          document.querySelector(`#note${i}`).innerHTML = `
                    <textarea id="changeTitle${i}" placeholder="Write new title"></textarea>
                    <textarea id="changeText${i}" placeholder="Write new text"></textarea>
                    <p class="time">${notesStore[i].timeCreated.hours}:${notesStore[i].timeCreated.minutes}:${notesStore[i].timeCreated.seconds}</p>
                    <button class="btnSave" id="btnSave">Save</button>
                    `;
        }
        if (e.target.id == "btnSave") {
          if (document.querySelector(`#changeTitle${i}`).value.length != 0) {
            notesStore[i].title = document.querySelector(
              `#changeTitle${i}`,
            ).value;
          }
          if (document.querySelector(`#changeText${i}`).value.length != 0) {
            notesStore[i].text = document.querySelector(
              `#changeText${i}`,
            ).value;
          }
          genereteNotes();
        }
        console.log(e.target);
      });
    }
  }
  /*for(let i=0;i<=notesStore.length-1;i++){
        if(!notesStore[i].statusDelete){
            btnsDelete[i] = document.querySelector(`#btnDel${i}`)
            btnsDelete[i].addEventListener('click', () => {
                notesStore[i].statusDelete = true
                genereteNotes()
            })

            btnsChange[i] = document.querySelector(`#btnChange${i}`)
            btnsChange[i].addEventListener('click', () => {
                document.querySelector(`#note${i}`).innerHTML = `
                <textarea id="changeTitle${i}" placeholder="Write new title"></textarea>
                <textarea id="change${i}" placeholder="Write new text"></textarea>
                <p class="time">${notesStore[i].timeCreated.hours}:${notesStore[i].timeCreated.minutes}:${notesStore[i].timeCreated.seconds}</p>
                <button id="btnSave${i}"><img class="icon" src="../png-clipart-floppy-disc-computer-icons-iconfinder-desktop-floppy-save-icon-miscellaneous-blue-thumbnail.png" alt="change"/></button>
                <button class="btnDelete" id="btnDel${i}">Delete</button>
                `
                document.querySelector(`#btnSave${i}`).addEventListener('click', () => {
                    let inputChange = {
                        title: document.querySelector(`#change${i}`),
                        text: document.querySelector(`#changeTitle${i}`)
                    }
                    if (inputChange.title.value.length != 0){
                        notesStore[i].text = inputChange.text.value
                    }
                    if (inputChange.text.value.length !=0) {
                        notesStore[i].title = inputChange.title.value
                    }
                    genereteNotes()
                })
            })
        }
    }*/
};

let getCurrentTime = () => {
  let time = new Date();
  return {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };
};

let checkTimeFormat = (time) => {
  if (time.hours < 10) {
    time.hours = "0" + time.hours; // 1
  }
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }
  return time;
};

let btnPostClick = () => {
  let timeNow = checkTimeFormat(getCurrentTime());
  if (inputs.getInfo()) {
    notesStore = [
      ...notesStore,
      {
        id: notesStore.length + 1,
        title: inputs.getInfo().title,
        text: inputs.getInfo().text,
        color: inputs.getInfo().color,
        timeCreated: {
          ...timeNow,
        },
      },
    ];
    inputs.clearInput();
    genereteNotes();
  } else {
    alert("Pls, write title or text");
  }
};

genereteNotes();

let genereteNotesSearch = (notes) => {
  notesHtml.innerHTML = null;
  notes.map((el, index) => {
    if (!el.statusDelete) {
      notesHtml.innerHTML += `
        <div class="noteBlock" id="note${index}" style="background:${el.color}">
            <h2>${el.title}</h2>
            <p id="noteText${index}">${el.text}</p>
            <p class="time">${el.timeCreated.hours}:${el.timeCreated.minutes}:${el.timeCreated.seconds}</p>
        </div>
        `;
    }
  });
};

let startSearch = () => {
  if (inputSearch.value.length != 0) {
    notesHtml.innerHTML = null;
    let notesStoreToSearch = [];
    notesStore.map((el) => {
      if (!el.statusDelete) {
        notesStoreToSearch.push(el.text);
      }
    });
    let resultSearch = searchText(
      inputSearch.value,
      notesStoreToSearch,
      notesStore,
    );
    if (resultSearch.length == 0) {
      notesStoreToSearch = [];
      notesStore.map((el) => {
        if (!el.statusDelete) {
          notesStoreToSearch.push(el.title);
        }
      });
      resultSearch = searchText(
        inputSearch.value,
        notesStoreToSearch,
        notesStore,
      );
    }
    genereteNotesSearch(resultSearch);
  } else {
    genereteNotes();
  }
};

inputSearch.addEventListener("change", startSearch);
btnPost.addEventListener("click", btnPostClick);
