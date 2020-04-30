const showCurrentDay = document.getElementById("currentDay");
showCurrentDay.innerText = moment().format("dddd, MMM Do YYYY");
const saveBtn = document.querySelector(".js-saveBtn");
const SAVED_HOUR_LS = "savedHour";
const SAVED_TEXT_LS = "savedText";
let savedHours = [];
let savedTexts = [];
let hours = moment().format("h");

// 1. you want to save text when you click save, click will set the item of textarea in local storage. also save time in localstorage if savedDate is saved ealier than currentdate, add class to the html of textarea that.past,

function saveHour() {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("savedHour", hours);
  }
}

function saveText() {
  let plans = document.querySelector(".textarea").value;
  if (typeof Storage !== "undefined") {
    localStorage.setItem("savedText", plans);
  }
  saveHour();
}

function loadHour() {
  const loadedHours = localStorage.getItem(SAVED_HOUR_LS);
  if (loadedHours !== null) {
    const parsedHours = JSON.parse(loadedHours);
    parsedHours;
    let currentHour = moment().format("h");
    if (parsedHours < currentHour) {
      saveBtn.setAttribute("id", "future");
    }
  }
}

function init() {
  loadHour();
}
init();
