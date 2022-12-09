let btnsDelete = [];
let btnsChange = [];

let notesHtml = document.querySelector("#notes");
let btnPost = document.querySelector("#btnPost");
let inputs = {
  title: document.querySelector("#inputTitle"),
  text: document.querySelector("#inputText"),
  color: document.querySelector("#inputColor"),
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
    color: "#803939",
    timeCreated: {
      hours: 10,
      minutes: 20,
      seconds: 25,
    },
  },
];

let genereteNotes = () => {
  notesHtml.innerHTML = null;
  console.log(notesStore);
  notesStore.map((el, index) => {
    if (!el.statusDelete) {
      notesHtml.innerHTML += `
      <div class="noteBlock" id="note${index}" style="background:${el.color}">
      <h2>${el.title}</h2>
      <p>${el.text}</p>
      <p id='noteText${index}' class='time'>${el.timeCreated.hours}:${el.timeCreated.minutes}:${el.timeCreated.seconds}</p>
      <button id='btnChange${index}'><img class='icon' alt='change' src='/homework-10/book-svgrepo-com.svg'>
      </button>
      <button class="btnDelete" id="btnDel${index}">Delete</button>
      </div>
      `;
    }
  });
  for (let i = 0; i <= notesStore.length - 1; i++) {
    if (!notesStore[i].statusDelete) {
      btnsDelete[i] = document.querySelector(`#btnDel${i}`);
      console.log(btnsDelete);
      btnsDelete[i].addEventListener("click", () => {
        notesStore[i].statusDelete = true;
        console.log(notesStore);
      });

      btnsChange[i] = document.querySelector(`#btnChange${i}`);
      btnsChange[i].addEventListener("click", () => {
        document.querySelector(`#noteText${i}`).innerHTML = `
          <textarea id='textarea${i}' placeholder='Write new text'></textarea>
        `;
        btnsChange[
          i
        ].innerHTML = `<button id='btnSave${i}'><img class='icon' alt='change' src='/homework-10/png-clipart-floppy-disc-computer-icons-iconfinder-desktop-floppy-save-icon-miscellaneous-blue-thumbnail.png'></button>`;
        document.querySelector(`#btnSave${i}`).addEventListener("click", () => {
          let newTxt = document.querySelector(`#textarea${i}`).value;
          if (newTxt.length != 0) {
            notesStore[i].text = newTxt;
            genereteNotes();
          }
        });
      });
    }
  }
};

let getCurrentTime = () => {
  let time = new Date();
  console.log(time);
  return {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };
};
let checkTimeFormat = (time) => {
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
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
  // console.log(time)

  // console.log(inputs.color.value);
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
    console.log(notesStore);
    genereteNotes();
    inputs.title.value = "";
    inputs.text.value = "";
  } else {
    alert("Pls, write title or text");
  }
};

genereteNotes();

btnPost.addEventListener("click", btnPostClick);
