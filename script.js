let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;
let gameStart = true;
if (gameStart) {
  document
    .querySelector(".imageBox")
    .getElementsByTagName("img")[0].style.width = "280px";
}

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      gameOver.play();
      document.querySelector(".info").innerText =
        boxText[e[0]].innerText + " WON!!!";
      isGameOver = true;
      document
        .querySelector(".imageBox2")
        .getElementsByTagName("img")[0].style.width = "300px";
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      gameStart = false;
      document
        .querySelector(".imageBox")
        .getElementsByTagName("img")[0].style.width = "0px";

      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
        audioTurn.play();
      }
    }
  });
});
reset.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".boxText");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + "X";
    document
      .querySelector(".imageBox2")
      .getElementsByTagName("img")[0].style.width = "0px";
    document
      .querySelector(".imageBox")
      .getElementsByTagName("img")[0].style.width = "280px";

    isGameOver = false;
  });
});
