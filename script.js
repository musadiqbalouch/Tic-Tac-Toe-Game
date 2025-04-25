let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgameBtn = document.querySelector("#new-btn");

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "0";
      turn0 = false;
    } else {
      box.innerHTML = "x";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congrats the winner is ${winner} `;
  msgContainer.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    let postion1 = boxes[pattern[0]].innerText;
    let postion2 = boxes[pattern[1]].innerText;
    let postion3 = boxes[pattern[2]].innerText;

    if (postion1 != "" && postion2 != "" && postion3 != "") {
      if (postion1 === postion2 && postion2 == postion3) {
        showWinner(postion1);
        disableBoxes();
      }
    }
  }
};

newgameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
