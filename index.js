// 1
const setTimer = () => {
  let time = 0;
  const timer = setInterval(() => {
    alert(time + 1);
    time++;
    if (time === 5) {
      clearInterval(timer);
    }
  }, 1000);
};
// setTimer()

// 2
// const text = document.querySelector(".text");
// const img = document.querySelector(".img");
// const box = document.querySelector(".box");

// let textTime = 10;
// const textAnim = setInterval(() => {
//       text.style.fontSize = `${textTime}px`
//       if(textTime === 38){
//         textTime = 10
//       }
//   textTime += 4;
// }, 500);

// let imgTime = 10;
// const imgAnim = setInterval(() => {
//     img.style.transform = `rotate(${imgTime}deg)`
//     if(imgTime === 38){
//       imgTime = 10;
//     }
//     imgTime += 4;
// ;}, 500);

// let boxTime = 10;
// const boxAnim = setInterval(() => {
//   box.style.left = `${boxTime * 3}px`
//   if(boxTime === 38){
//     boxTime = 10
//   }
// boxTime += 4
// }, 500);

// 3
const sigmaGif = document.querySelector("#sigma-gif");
const timerText = document.querySelector(".timer");
const start = document.querySelector("#start");

start.addEventListener("click", () => {
  start.setAttribute("disabled", "");

  let clicksCounter = 0;
  sigmaGif.addEventListener("click", () => clicksCounter++);

  let seconds = 5;
  const timer = setInterval(() => {
    seconds--;
    timerText.textContent = seconds;

    if (seconds === 0) {
      start.removeAttribute("disabled");
      timerText.textContent = 5;
      alert(`Ви клікнули ${clicksCounter} раз`);
      clearInterval(timer);
    }
  }, 1000);
});

// 4
const quantityOfSeconds = document.querySelector('.sigmaBoi');
const startBtn = document.querySelector('.sigmaBtn');
startBtn.addEventListener('click', () => {
  if(quantityOfSeconds.value !== ''){
    startBtn.setAttribute('disabled', '');
    const seconds = Number(quantityOfSeconds.value);
    
    if(isNaN(seconds)){
      alert('Please type number');
    }
    else{
      setTimeout(() => {
        alert(`Пройшло ${seconds} секунд!`);
        startBtn.removeAttribute('disabled')
      }, seconds * 1000)
    }

  }
  else{
    alert('Please type number');
  }
})