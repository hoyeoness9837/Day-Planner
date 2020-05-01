const showCurrentDay = document.getElementById("currentDay");
showCurrentDay.innerText = moment().format("dddd, MMM Do YYYY");


const something = () => {



};

document.getElementById("text9").innerText = localStorage.getItem("save9");

document.getElementById("btn9").addEventListener("click", () => {
  localStorage.setItem("save9", `${document.getElementById("text9").value}`);
});

if (moment().hour() === 9) {
  document.getElementById("text15").classList.add("present");
} else if (moment().isBefore(moment({ hour: 9, minute: 0 }))) {
  document.getElementById("text15").classList.add("future");
} else if (moment().isAfter(moment({ hour: 9, minute: 0 }))) {
  document.getElementById("text15").classList.add("past");
}
