const showCurrentDay = document.getElementById("currentDay");
showCurrentDay.innerText = moment().format("dddd, MMM Do YYYY");

document.getElementById("btn9").addEventListener("click", () => {
  localStorage.setItem("save9", `${document.getElementById("text9").value}`);
});
document.getElementById("btn10").addEventListener("click", () => {
  localStorage.setItem("save10", `${document.getElementById("text10").value}`);
});
document.getElementById("btn11").addEventListener("click", () => {
  localStorage.setItem("save11", `${document.getElementById("text11").value}`);
});
document.getElementById("btn12").addEventListener("click", () => {
  localStorage.setItem("save12", `${document.getElementById("text12").value}`);
});
document.getElementById("btn13").addEventListener("click", () => {
  localStorage.setItem("save13", `${document.getElementById("text13").value}`);
});
document.getElementById("btn14").addEventListener("click", () => {
  localStorage.setItem("save14", `${document.getElementById("text14").value}`);
});
document.getElementById("btn15").addEventListener("click", () => {
  localStorage.setItem("save15", `${document.getElementById("text15").value}`);
});
document.getElementById("btn16").addEventListener("click", () => {
  localStorage.setItem("save16", `${document.getElementById("text16").value}`);
});
document.getElementById("btn17").addEventListener("click", () => {
  localStorage.setItem("save17", `${document.getElementById("text17").value}`);
});
document.getElementById("btn18").addEventListener("click", () => {
  localStorage.setItem("save18", `${document.getElementById("text18").value}`);
});

// document.getElementById("text9").innerText = localStorage.getItem("save9");

// if (moment().hour() === 9) {
//   document.getElementById("text15").classList.add("present");
// } else if (moment().isBefore(moment({ hour: 9, minute: 0 }))) {
//   document.getElementById("text15").classList.add("future");
// } else if (moment().isAfter(moment({ hour: 9, minute: 0 }))) {
//   document.getElementById("text15").classList.add("past");
// }

//for looped those two functions
for (i = 9; i < 19; i++) {
  document.getElementById("text" + i).innerText = localStorage.getItem(
    "save" + i
  );
  if (moment().hour() === 9) {
    document.getElementById("text" + i).classList.add("present");
  } else if (moment().isBefore(moment({ hour: 9, minute: 0 }))) {
    document.getElementById("text" + i).classList.add("future");
  } else if (moment().isAfter(moment({ hour: 9, minute: 0 }))) {
    document.getElementById("text" + i).classList.add("past");
  }
}
