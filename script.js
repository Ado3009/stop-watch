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
    resetButton.disabled = true;
    startButton.disabled = true;
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
    startButton.disabled = false;
    resetButton.disabled = false;
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
  const element = document.querySelectorAll('.noviElement');
  for (let i = 0; i < element.length; i++) {
    element[i].style.color = 'black';
  }
  const information = document.querySelectorAll('a');
  for (let i = 0; i < information.length; i++) {
    information[i].style.color = 'black';
  }

  document.querySelector('.dark').style.display = 'block';
  document.querySelector('.switch').style.display = 'none';
};

let buttonForColor = document.querySelector('.dark');

const darkMode = () => {
  document.querySelector('.timer').style.color = 'white';
  const element = document.querySelectorAll('.noviElement');
  for (let i = 0; i < element.length; i++) {
    element[i].style.color = 'white';
  }
  const information = document.querySelectorAll('a');
  for (let i = 0; i < information.length; i++) {
    information[i].style.color = 'white';
  }

  document.querySelector('body').style.backgroundColor = 'black';
  let buttons = document.querySelectorAll('.color');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = 'white';
  }
  buttonForColor.style.display = 'none';
  let changeButton = document.querySelector('.switch');
  changeButton.style.display = 'block';
};

let leftSave = document.querySelector('#leftSave');
let leftSave2 = document.querySelector('#leftSave2');
let rightSave = document.querySelector('#rightSave');
let rightsave2 = document.querySelector('#rightSave2');
let milisecSave = document.querySelector('#milisecSave');

let divElement = document.querySelector('.here');
let spanElement = divElement.querySelectorAll('span');

function forSave() {
  leftSave.innerText = valuLeft;
  leftSave2.innerText = valueLeft2;
  rightSave.innerText = valueRight;
  rightsave2.innerText = valueRright2;
  milisecSave.innerText = value;
}
function forRemove() {
  valuLeft = 0;
  valueLeft2 = 0;
  valueRight = 0;
  valueRright2 = 0;
  value = 0;

  leftSave.innerText = 0;
  leftSave2.innerText = 0;
  rightSave.innerText = 0;
  rightsave2.innerText = 0;
  milisecSave.innerText = 0;
}

function forAddInTable() {
  // let leftForTable = document.querySelector('.leftForTable');
  // let leftForTable2 = document.querySelector('.leftForTable2');
  // let rightForTable = document.querySelector('.rightForTable');
  // let rightForTable2 = document.querySelector('.rightForTable2');
  // let miliSecForTable = document.querySelector('.miliSecForTable');
  let sve = [valuLeft, valueLeft2, valueRight, valueRright2, value];

  let spans = document.querySelectorAll('.forTable');

  spans.forEach((span, index) => {
    span.innerText = sve[index % sve.length];
  });
}

buttonForColor.addEventListener('click', darkMode);
let changeButton = document
  .querySelector('.switch')
  .addEventListener('click', siwtchBack);

function tableSave() {
  let noviEl = document.createElement('div');
  let ScoreForSave = document.querySelector('.scores');
  noviEl.innerHTML = `<p class="nameForTable">${inputValue}</p><span class="leftForTable forTable">0</span><span class="leftForTable2 forTable">0</span><span class="dots">:</span><span class="rightForTable forTable">0</span><span class="rightForTable2 forTable">0</span><span class="miliSecForTable forTable2 forTable">0</span>`;
  noviEl.classList.add('noviElement');
  ScoreForSave.appendChild(noviEl);

  noviEl.addEventListener('dblclick', e => {
    ScoreForSave.removeChild(noviEl);
  });
}

document.querySelector('#save').addEventListener('click', e => {
  e.preventDefault();
  let stats = document.querySelector('.stats');
  let overlay = document.querySelector('.overlay');
  stats.style.display = 'block';
  overlay.style.display = 'block';
  forSave();
});
document.querySelector('.save').addEventListener('click', e => {
  e.preventDefault();
  let input = document.querySelector('.nameOfScores');
  inputValue = input.value;

  if (inputValue === '') {
    input.classList.add('forInput');
    input.value = '';
    input.placeholder = 'Polje mora biti popunjeno';
    input.classList.add('classForPlceholder');
  } else {
    let stats = document.querySelector('.stats');
    let overlay = document.querySelector('.overlay');
    stats.style.display = 'none';
    overlay.style.display = 'none';
    input.value = '';
    input.placeholder = 'Name';
    input.classList.remove('forInput');
    input.classList.remove('classForPlceholder');
    tableSave();
    forAddInTable();
    forRemove();
  }
});

document.querySelector('.close').addEventListener('click', e => {
  e.preventDefault();
  let stats = document.querySelector('.stats');
  let overlay = document.querySelector('.overlay');
  stats.style.display = 'none';
  overlay.style.display = 'none';
});

let noviElementForRemove = document.querySelectorAll('.noviElement');
let parentElement = document.querySelector('.scores');
console.log(parentElement);
for (let i = 0; i < parentElement.length; i++) {
  parentElement[i].addEventListener('click', e => {
    parentElement.removeChild(noviElementForRemove);
  });
}
