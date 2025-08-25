let currentDisplay = "";

function updateDisplay() {
  document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = "";
  updateDisplay();
}

function appendNumber(num) {
  currentDisplay += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentDisplay === "" || /[+\-*/.]$/.test(currentDisplay)) return;
  currentDisplay += op;
  updateDisplay();
}

function calculate() {
  try {
    currentDisplay = eval(currentDisplay).toString();
    updateDisplay();
  } catch {
    currentDisplay = "Error";
    updateDisplay();
  }
}
   