const wrapper = document.querySelector(".main");
const question = document.querySelector(".question");
const gif = document.querySelector(".cute-gif");
const yesBtn = document.querySelector(".yes-button");
const noBtn = document.querySelector(".no-button");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you tommorow!!";
  gif.src =
    "https://media.tenor.com/LxggFGxwOjIAAAAC/shy-cat.gif";

});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  if (randomX < 0) {
    randomX = 0;
  } else if (randomX > maxX) {
    randomX = maxX;
  }

  if (randomY < 0) {
    randomY = 0;
  } else if (randomY > maxY) {
    randomY = maxY;
  }

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});