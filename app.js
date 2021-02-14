const inputs = document.querySelectorAll('input');

const coffeTypeInputs = document.querySelectorAll('#coffeeType input');
const coffeStyleInputs = document.querySelectorAll('#coffeeStyle input');
const coffeAmountInputs = document.querySelectorAll('#coffeeAmount input');
const coffeGrindInputs = document.querySelectorAll('#coffeeGrind input');
const coffeShipping = document.querySelectorAll('#coffeeShipping input');

const setCheckedStyle = (input) => {
  input.forEach((input) => {
    const selection = input.labels[0].children[0];
    if (input.checked) {
      selection.classList.remove('bg-light-grey', 'text-dark-grey-blue');
      selection.classList.add('bg-dark-cyan', 'text-light-cream');
    } else {
      selection.classList.remove('bg-dark-cyan', 'text-light-cream');
      selection.classList.add('bg-light-grey', 'text-dark-grey-blue');
    }
  });
};

function handleFieldset(fieldInput) {
  setCheckedStyle(fieldInput);
  fieldInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      setCheckedStyle(fieldInput);
    });
  });
}

const grindSection = handleFieldset(coffeTypeInputs);
const styleSection = handleFieldset(coffeStyleInputs);
const amountSection = handleFieldset(coffeAmountInputs);
const grindTypeSection = handleFieldset(coffeGrindInputs);
const shippingSelection = handleFieldset(coffeShipping);
