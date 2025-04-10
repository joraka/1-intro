const form = document.getElementById('form');

const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const outputElement = document.getElementById('output');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!heightInput.value || !weightInput.value) {
    resultElement.innerText = `Please enter your height and weight`;
    return;
  }

  const bmi = (Number(weightInput.value) / Number(heightInput.value) ** 2) * 10000;

  outputElement.value = bmi.toFixed(1);

  let result = '';
  if (bmi < 18.5) {
    result = 'Underweight';
  } else if (bmi <= 24.99) {
    result = 'Normal weight';
  } else if (bmi <= 29.99) {
    result = 'Overweight';
  } else if (bmi <= 34.99) {
    result = 'Grade I obesity';
  } else if (bmi <= 39.99) {
    result = 'Grade II obesity';
  } else {
    result = 'Grade III obesity';
  }

  resultElement.innerText = `Result: ${result}`;
});
