function changeBackgroundBlack() {
  document.body.style.backgroundColor = "black";
}

function changeBackgroundWhite() {
  document.body.style.backgroundColor = "white";
}

function changeBackgroundCustom(color) {
  let inputField = document.getElementById("input");
  let inputVal = inputField.value;
  console.log(inputVal, " >>input val");

  document.body.style.backgroundColor = inputVal
    ? inputVal
    : alert("No color value !!");
}

// Below Code For Todo Application Vanilla JS
let mainContainer = document.getElementById("todo-container");
let inputElem = document.getElementById("todo-input");
let todoAddButton = document.getElementById("todo-add");
let ulForAllTodo = document.getElementById("all-todos");

todoAddButton.addEventListener("click", () => {
  let inputVal = inputElem.value;
  let createListItem = document.createElement("li");

  createListItem.innerText = inputVal;
  ulForAllTodo.appendChild(createListItem);

  let createDelButton = document.createElement("button");
  createDelButton.innerHTML = "X";
  createListItem.appendChild(createDelButton);

  inputElem.value = "";

  createDelButton.addEventListener("click", () => {
    ulForAllTodo.removeChild(createListItem);
  });

  console.log(ulForAllTodo, ">>>ulForAllTodo");
});
