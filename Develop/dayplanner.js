const showCurrentDay = document.getElementById("currentDay");
showCurrentDay.innerText = moment().format("dddd, MMM Do YYYY");
const SAVED_DATE_LS = "savedDate";
const SAVED_TEXT_LS = "savedText";
let savedDates = [];
let savedTexts = [];
let hours = moment().format("h");

// 1. you want to save text when you click save, click will set the item of textarea in local storage. also save time in localstorage if savedDate is saved ealier than currentdate, add class to the html of textarea that.past,

function saveDate() {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("savedDate", hours);
  }
}

function saveText() {
  let plans = document.querySelector(".textarea").value;
  if (typeof Storage !== "undefined") {
    localStorage.setItem("savedText", plans);
  }
  saveDate();
}

function loadDate() {
  localStorage.getItem(JSON.parse(SAVED_DATE_LS));
}

// const textareas = Array.from(document.getElementsByClassName("textarea"));

// textareas.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     const selectedHour = e.target;
//     const selectednumber = selectedHour.dataset["number"];
//     let currentdate = new Date();
//     const classToApply =
//       selectednumber > currentdate.getHours() ? "future" : "present";
//     if (classToApply === "future") {
//       selectedhour.parentElement.classList.add(classToApply);
//     }
//   });
// });
