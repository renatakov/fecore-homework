const inputText = document.getElementById("inputText");
const h1 = document.querySelector("h1");

  let nameCookies = document.cookie.match(/username=([^;]*)/);
  console.log(nameCookies);
  if(nameCookies === null){
    h1.innerHTML = "Hello, stranger";
  } else {
    h1.innerHTML = "Hello, " + nameCookies[1];
  }

  inputText.addEventListener("change", function(event){
    if(inputText.value !== null){
      document.cookie = "username=" + inputText.value;
      h1.innerHTML = "Hello, " + inputText.value;
    } else{
    h1.innerHTML = "Hello, stranger";
    }
  })
