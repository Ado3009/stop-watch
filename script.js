'use scrict';

let startButton = document.querySelector('#start');
let stopButton = document.querySelector('#stop');
let resetButton = document.querySelector('#reset');

// let interval = setInterval({});,
let valueRight = 0;
let valuMiliSec = 0;
let value = 0;
let valueRright2 = 0;
let valueLeft2 = 0;
let intervalId = 0;
let valuLeft = 0;
// let startTime = 0;
// const intervalFunction = () => {
//   startTime = Date.now();
//   setInterval(updateTimer, 10);
// };

// const updateTimer = () => {
//   const prolaznoVrijeme = Date.now() - startTime;
//   const sekunde = (prolaznoVrijeme / 1000).toFixed(2);
// };

const displayFunction = e => {
  let buttonId = e.target.id;

  if (buttonId === 'start') {
    intervalId = setInterval(updateTimer, 10);
  }
};
function clearInterval1() {
  clearInterval(clear);
}
function stopWtch() {
  let left2 = document.querySelector('.left2');
  left2.innerText = valueLeft2;

  let right = document.querySelector('#right');
  right.innerText = valueRight;

  let miliSec2 = document.querySelector('.miliSec2');
  miliSec2.innerText = value;

  let right2 = document.querySelector('.right2');
  right2.innerText = valueRright2;

  let left = document.querySelector('#left');
  left.innerText = valuLeft;

  //   let miliSec = document.querySelector('.miliSec');
  //   miliSec.innerText = valuMiliSec;
}
const clearStopWatch = () => {
  valueRight = 0;
  valuMiliSec = 0;
  value = 0;
  valueRright2 = 0;
  valueLeft2 = 0;
  intervalId = 0;

  let left2 = document.querySelector('.left2');
  left2.innerText = 0;

  let right = document.querySelector('#right');
  right.innerText = 0;

  let miliSec2 = document.querySelector('.miliSec2');
  miliSec2.innerText = 0;

  let right2 = document.querySelector('.right2');
  right2.innerText = 0;
  let left = document.querySelector('#left');
  left.innerText = 0;

  clearInterval(intervalId);
};
resetButton.addEventListener('click', clearStopWatch);

function updateTimer() {
  value += 1;
  if (value === 100) {
    valueRright2 += 1;
    value = 0;
  }
  //   if (valuMiliSec === 10) {
  //     valueRright2 += 1;
  //     value = 0;
  //     valuMiliSec = 0;
  //   }
  if (valueRright2 === 10) {
    valueRight += 1;
    valueRright2 = 0;
    value = 0;
    valuMiliSec = 0;
  }
  if (valueRight === 6) {
    valueLeft2 += 1;
    valueRight = 0;
    valueRright2 = 0;
    value = 0;
    valuMiliSec = 0;
  }
  if (valueLeft2 === 10) {
    valuLeft += 1;
    valueLeft2 = 0;
    valueRight = 0;
    valueRright2 = 0;
    value = 0;
    valuMiliSec = 0;
  }

  stopWtch();
}

startButton.addEventListener('click', displayFunction);

stopButton.addEventListener('click', e => {
  e.preventDefault();
  let buttonId = e.target.id;
  if (buttonId === 'stop') {
    clearInterval(intervalId);
  }
});

const siwtchBack = () => {
  document.querySelector('.timer').style.color = 'black';
  document.querySelector('body').style.backgroundColor = '#ff9900';
  let buttons = document.querySelectorAll('.color');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = 'black';
  }
  document.querySelector('.dark').style.display = 'block';
  document.querySelector('.switch').style.display = 'none';
};

let buttonForColor = document.querySelector('.dark');
const darkMode = () => {
  document.querySelector('.timer').style.color = 'white';
  document.querySelector('body').style.backgroundColor = 'black';
  let buttons = document.querySelectorAll('.color');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = 'white';
  }
  buttonForColor.style.display = 'none';
  let changeButton = document.querySelector('.switch');
  changeButton.style.display = 'block';
};

buttonForColor.addEventListener('click', darkMode);
let changeButton = document
  .querySelector('.switch')
  .addEventListener('click', siwtchBack);
