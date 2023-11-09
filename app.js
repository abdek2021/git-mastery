const getCounter = document.getElementById("counter");
const increaseCounter = document.getElementById("increment");
const decreaseCounter = document.getElementById("decrement");
const getResetBtn = document.getElementById("reset");

const makeNewBtn = document.createElement("div");
makeNewBtn.textContent = "Counting to ";
makeNewBtn.className = "textChanger";
makeNewBtn.style.width = "290px";
makeNewBtn.style.textAlign = "center";
makeNewBtn.style.fontFamily = "monospace";
makeNewBtn.style.position = "absolute";
makeNewBtn.style.top = "70%";
makeNewBtn.style.backgroundColor = "black";
makeNewBtn.style.border = "none";
makeNewBtn.style.borderRadius = "7px";
makeNewBtn.style.color = "#fff";
makeNewBtn.style.padding = "10px";
makeNewBtn.style.fontSize = "1.6em";
makeNewBtn.style.fontWeight = "bold";

const btnWrapper = document.getElementById("btn-wrapper");
btnWrapper.appendChild(makeNewBtn);
console.log(btnWrapper);

const btnWrapperLastChild = btnWrapper.lastElementChild;

let count = 0;

increaseCounter.addEventListener("click", () => {
  count += 1;
  getCounter.textContent = count;
  btnWrapperLastChild.textContent = "Counting to " + count;
});

decreaseCounter.addEventListener("click", () => {
  count -= 1;
  getCounter.textContent = count;
  btnWrapperLastChild.textContent = "Reduced to " + count;
});

getResetBtn.addEventListener("click", () => {
  getCounter.textContent = 0;
  count = 0;
  btnWrapperLastChild.textContent = "You're back to " + count;
});

console.log(getCounter);
console.log(increaseCounter);
console.log(decreaseCounter);
















