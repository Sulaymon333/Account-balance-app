/*=== GET DOM Elements ===*/
let form = document.getElementById('form');
let descriptionInput = document.getElementById('description');
let amountInput = document.getElementById('amount');
let incomeItems = document.querySelector('.income-items');
let expenseItems = document.querySelector('.expense-items');
let selectElement = document.querySelector('#select');

form.addEventListener('submit', function (e) {
  if (descriptionInput.value && amountInput.value && selectElement.selectedIndex == '0') {
    addToList(descriptionInput.value, amountInput.value, incomeItems, displayTime());
  } else if (descriptionInput.value && amountInput.value && selectElement.selectedIndex == '1') {
    addToList(descriptionInput.value, amountInput.value, expenseItems, displayTime());
  } else {
    // show error function
    function showError(color, textContent) {
      const error = document.querySelector('.error-message');
      error.textContent = textContent;
      descriptionInput.style.borderColor = color;
      amountInput.style.borderColor = color;
    }
    showError('red', 'Please fill the required fields');

    setTimeout(function () {
      const error = document.querySelector('.error-message');
      error.textContent = '';
      descriptionInput.style.borderColor = 'grey';
      amountInput.style.borderColor = 'grey';
    }, 2500)
  }

  descriptionInput.value = '';
  amountInput.value = '';

  e.preventDefault();
});

function addToList(descriptionValue, amountValue, listType, time) {
  let listItem = `<li><span id="description-info">${descriptionValue}</span><span id="amount-info">${amountValue} €</span><span>${time}</span></li>`;
  listType.insertAdjacentHTML('beforeend', listItem);
}


// create a date function
const displayTime = () => {
  let now = new Date();

  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let hour = now.getHours();
  let minute = now.getMinutes();

  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  let formatDatTime = `${date}.${month}.${year} ${hour}:${minute}`;
  return formatDatTime;

}

