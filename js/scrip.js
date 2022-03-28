const span = document.querySelector(".Animation-word");
const word = [
  ["D", "e", "v", "e", "l", "o", "p", "e", "r"],
  ["D", "e", "s", "i", "g", "n", "e", "r"],
  ["G", "a", "m", "e", "r", " 😁 "],
  ["S", "t", "u", "d", "e", "n", "t", " 😢 "],
];

var wordIndex = 0;
var wordIndex2 = 0;
var timer = setInterval(animationTick, 300);
function animationTick() {
  span.textContent += word[wordIndex][wordIndex2++];
  if (wordIndex2 === word[wordIndex].length + 1) {
    wordIndex2 = 0;
    wordIndex++;
    span.textContent = "";
  }
  if (wordIndex === word.length) {
    wordIndex = 0;
  }
}

function completeAnimation() {
  clearInterval(timer);
  timer = null;
}
