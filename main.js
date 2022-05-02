const playingCards = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * playingCards.length);
  const item = arr[randomIndex];
  return item;
}

const randomItem = getRandomItem(playingCards);
const txtName = document.getElementById("txtName");
const txtLastName = document.getElementById("txtLastName");
const txtAge = document.getElementById("txtAge");
const cardTemplate = document.getElementById("cardSchemeTemplate");
const showTime = document.getElementsByClassName("showTime")[0];
const txtDescription = document.getElementById("txtDescription");
const gender = document.getElementById("txtGender");
let cardSchemeID = document.getElementById("cardScheme");
let schemas = [];

function clear() {
  txtName.value = "";
  txtLastName.value = "";
  txtAge.value = "";
  txtDescription.value = "";
}

function saveTemplate() {
  if (
    txtName.value == 0 ||
    txtLastName.value == 0 ||
    txtAge.value == 0 ||
    txtDescription.value == 0
  ) {
    return;
  } else {
    if (gender.value == -1) {
      return;
    } else if (gender.value == 0) {
      cardTemplate.content.getElementById("gender").innerHTML = "Erkek";
    } else {
      cardTemplate.content.getElementById("gender").innerHTML = "Kadın";
    }
    cardTemplate.content.getElementById("firstName").innerHTML = txtName.value;
    cardTemplate.content.getElementById("lastName").innerHTML =
      txtLastName.value;
    cardTemplate.content.getElementById("age").innerHTML = txtAge.value;
    const item = getRandomItem(playingCards);
    cardTemplate.content.getElementById("arrayItem").innerHTML = item;
    cardTemplate.content.getElementById("arrayItem2").innerHTML = item;
    cardTemplate.content.getElementById("description").innerHTML =
      txtDescription.value;
    schemas.push(cardTemplate);
    showTime.innerHTML += cardTemplate.innerHTML;
    clear();
  }
}

function removeUser() {
  var elem = showTime.querySelectorAll(".cb");
  elem.forEach((item) => {
    if (item.checked) {
      showTime.removeChild(item.parentElement.parentElement);
    }
  });
}
