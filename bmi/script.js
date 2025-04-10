const form = document.getElementById('form');

const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const outputElement = document.getElementById('output');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  resultElement.innerText = '';

  if (!heightInput.value || !weightInput.value) {
    resultElement.innerText = `Please enter your height and weight`;
    return;
  }

  const heightInt = Number(heightInput.value);
  const weightInt = Number(weightInput.value);

  console.log({ heightInt, weightInt });

  if (!isFinite(heightInt) || heightInt < 1 || heightInt > 300) {
    resultElement.innerText = `Invalid height entered, must be between 1cm and 300cm`;
    return;
  }

  if (!isFinite(weightInt) || weightInt < 1 || weightInt > 300) {
    resultElement.innerText = `Invalid height entered, must be between 1kg and 300kg`;
    return;
  }

  const bmi = (Number(weightInput.value) / Number(heightInput.value) ** 2) * 10000;

  outputElement.value = Number(bmi.toFixed(1));

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
