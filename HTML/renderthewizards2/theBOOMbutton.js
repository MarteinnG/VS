
const inputElement = document.getElementById("input");
const buttonElementOne = document.getElementById("button1"),
      buttonElementTwo = document.getElementById("button2");  
buttonElementOne.textContent = "+";
buttonElementTwo.textContent = "-";

let numberChange = 5;
let count = 0;
let upperLimit = 35;
let lowerLimit = -35
let increasement = count + numberChange;
let decreasement = count - numberChange;

const counter = document.getElementById("counter");
counter.innerHTML = count;

const boomMessage = "BOOM!"

const handleClickToGetInputValue = (number) => {
  const counterValueAsNumber = Number(counter.textContent);
  const newNumber = counterValueAsNumber + number;
  counter.textContent = newNumber;
  boomMessage.textContent = newNumber;
  if(newNumber > upperLimit || newNumber < lowerLimit) {
    newNumber = boomMessage;
  }
  console.log(newNumber);
  };

  buttonElementOne.onclick = () => {
    handleClickToGetInputValue(increasement, boomMessage);
  };

  buttonElementTwo.onclick = () => {
    handleClickToGetInputValue(decreasement, boomMessage);
  };

document.body.appendChild(buttonElementOne);
document.body.appendChild(buttonElementTwo);
