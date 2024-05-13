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

//clear all function
clearAll.addEventListener("click", () => {
  display_box.innerText = 0;
});

//clear last function

clearLast.addEventListener("click", () => {
  let str = display_box.innerText;
  display_box.innerText = str.slice(0, -1);
});

//result
equalBtn.addEventListener("click", () => {
  let fNum = display_box.innerText;
  display_box.innerHTML = eval(fNum.slice(0, -1));
});
