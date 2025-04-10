const inputElement = document.getElementById('textField');
const totalCountElement = document.getElementById('totalCount');
const remainingCountElement = document.getElementById('remainingCount');

const charLimit = 150;
inputElement.maxLength = charLimit;

function updateCount() {
  totalCountElement.innerText = inputElement.value.length;
  remainingCountElement.innerText = charLimit - inputElement.value.length;
}

updateCount();
inputElement.addEventListener('keydown', updateCount);
