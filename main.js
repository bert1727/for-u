const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const windowWidth = window.innerWidth - 30;
const windowHeight = window.innerHeight - 30;
const currentFontSize = window.getComputedStyle(yesBtn).fontSize;
const header = document.getElementById("header");

const pls = [
  "ладно больше нет вариантов",
  "да ну передумай",
  "может передумаешь?",
  "прям точно, точно?",
  "прям точно?",
  "точно?",
];
// noBtn.addEventListener("mouseenter", function (e) {
//   e.target.style.left = `${Math.max(0, Math.random() * (windowWidth - noBtn.offsetWidth))}px`;
//   e.target.style.top = `${Math.max(0, Math.random() * (windowHeight - noBtn.offsetHeight))}px`;
//
//   if (noBtn.offsetHeight < 50) {
//     noBtn.hidden = true;
//     header.textContent = "Ну нажми уже ДА!";
//     yesBtn.style.color = "#eb5284";
//   }
//   // noBtn
//   // height
//   noBtn.style.height = `${e.target.offsetHeight - 10}px`;
//   // width
//   noBtn.style.width = `${e.target.offsetWidth - 20}px`;
//
//   //yesBtn height
//   yesBtn.style.height = `${yesBtn.offsetHeight + 30}px`;
//   // width
//   yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
//   // font
//   const currentFontSize = window.getComputedStyle(yesBtn).fontSize;
//   const fSize = currentFontSize.slice(0, -2);
//   yesBtn.style.fontSize = `${Number(fSize) + 10}px`;
//   console.log(window.getComputedStyle(yesBtn).fontSize);
//
//
//
// });

noBtn.addEventListener("click", function (e) {
  if (!pls.length) {
    noBtn.hidden = true;
    yesBtn.style.width = "70%";
    yesBtn.style.marginRight = "0";
    yesBtn.style.marginLeft = "15%";
  }

  // noBtn.style.height = "70px";
  // noBtn.style.width = "110px";

  // yesBtn.style.height = "70px";
  // yesBtn.style.width = "110px";

  // noBtn.style.marginLeft = "200px";
  // yesBtn.style.marginRight = "80px";

  noBtn.textContent = pls.pop();
});

yesBtn.addEventListener("click", function (e) {
  window.location.href = "./yes.html";
});

function detectMob() {
  const toMatch = [
    /Android/i,

    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
