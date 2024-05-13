const display_box = document.querySelector(".display_box");
const button = document.querySelectorAll(".btn");
const clearLast = document.querySelector(".clear_last");
const clearAll = document.querySelector(".clear_all");
const equalBtn = document.querySelector(".result");
button.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (display_box.innerText == "0") {
      display_box.innerText = e.target.innerText;
    } else {
      display_box.innerText += e.target.innerText;
    }
  });
});
