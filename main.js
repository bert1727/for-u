const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const windowWidth = window.innerWidth - 100;
const windowHeight = window.innerHeight - 100;
const currentFontSize = window.getComputedStyle(yesBtn).fontSize;
const header = document.getElementById("header");

const pls = [
  "думаю, придётся передумать",
  "да ну передумай",
  "может передумаешь?",
  "прям точно, точно?",
  "прям точно?",
  "точно?",
];
if (!detectMob()) {
  noBtn.addEventListener("mouseenter", function (e) {
    e.target.style.left = `${Math.max(0, Math.random() * (windowWidth - e.target.offsetWidth))}px`;
    e.target.style.top = `${Math.max(0, Math.random() * (windowHeight - e.target.offsetHeight))}px`;

    if (noBtn.offsetHeight < 50) {
      noBtn.hidden = true;
      header.textContent = "Ну нажми уже ДА!";
      yesBtn.style.color = "#eb5284";
    }
    // noBtn
    // height
    noBtn.style.height = `${e.target.offsetHeight - 10}px`;
    // width
    noBtn.style.width = `${e.target.offsetWidth - 20}px`;

    //yesBtn height
    yesBtn.style.height = `${yesBtn.offsetHeight + 30}px`;
    // width
    yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
    // font
    const currentFontSize = window.getComputedStyle(yesBtn).fontSize;
    const fSize = currentFontSize.slice(0, -2);
    yesBtn.style.fontSize = `${Number(fSize) + 10}px`;
    console.log(window.getComputedStyle(yesBtn).fontSize);
  });
} else {
  noBtn.addEventListener("click", function (e) {
    if (!pls.length) {
      noBtn.hidden = true;
      yesBtn.style.width = "70%";

      yesBtn.style.marginLeft = "15%";
      yesBtn.style.marginRight = "15%";

      // yesBtn.textContent = "ДАДАДАДАДА";
      yesBtn.textContent = "ДАААА!!!";
      yesBtn.style.color = "red";
    }

    noBtn.textContent = pls.pop();
    noBtn.style.color = "#E0115F";
  });
}

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
