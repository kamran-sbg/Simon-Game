let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btnb) {
  btnb.classList.add("flash");
  setTimeout(function () {
    btnb.classList.remove("flash");
  }, 250);
}

function userFlash(btnb) {
  btnb.classList.add("userflash");
  setTimeout(function () {
    btnb.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randIds = Math.floor(Math.random() * 4);

  let randColor = btns[randIds];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `GAME OVER! your score: ${level}
    press any key to continue`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}
