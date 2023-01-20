
// let notes = ["text1", "tes t", "test1", "TEST", "Hello World"];
let trimFull = (str) => {
  let arrRes = [];
  for (let i = 0; i <= str.length - 1; i++) {
    // console.log(str[i]);
    if (str[i] === " ") {
      arrRes.push(i);
    }
  }
  for (let i = 0; i <= arrRes.length - 1; i++) {
    let str1 = str.slice(0, arrRes[i]);
    let str2 = str.slice(arrRes[i] + 1, str.length);
    str = str1 + str2;
  }
  return str;
};
let searchText = (inputValue,notes, noteStore) => {
  // 1.Видалемо відступи і великі літери
  // let inputValue = inputSearch.value;
  inputValue = inputValue.toLowerCase();
  inputValue = trimFull(inputValue);
  console.log(inputValue);
  let notesToSearch = notes.map((el) => trimFull(el.toLowerCase()));
  let result = []
  for(let i = 0; i<=notesToSearch.length-1;i++){
      result[i] = 0
      let newWord = notesToSearch[i]
      for(let j=0; j<= newWord.length-1;j++){
          if(newWord[j] == inputValue[j]) {
              result[i] += 1
          }
      }
  }
  let resultSearch = []
  for(let i = 0; i<=notes.length-1; i++) {
      if(result[i]> (inputValue.length)/100*40){
          resultSearch.push(notesStore[i])
      }
  }
  return resultSearch
}

// btnSearch.addEventListener("click", searchText);

let str = "Hello World";
trimFull(str);
// console.log(str.slice(0, 5) + str.slice(6, str.length));

let str2 = "txt";
