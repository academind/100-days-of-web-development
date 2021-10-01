// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
  const userNumberInputElement = document.getElementById('user-number');
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById('calculated-sum');

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

// Highlight links

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
  const anchorElements = document.querySelectorAll('#highlight-links a');

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
  }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

// Display user data

const dummyUserData = {
  firstName: 'Max',
  lastName: 'Schwarzmüller',
  age: 32
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
  const outputDataElement = document.getElementById('output-user-data');

  outputDataElement.innerHTML = '';

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement('li');
    const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);