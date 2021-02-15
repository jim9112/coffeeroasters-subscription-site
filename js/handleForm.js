// grab fieldsets from plan page form
const coffeTypeInputs = document.querySelector('#coffeeType');
const coffeStyleInputs = document.querySelector('#coffeeStyle');
const coffeAmountInputs = document.querySelector('#coffeeAmount');
const coffeGrindInputs = document.querySelector('#coffeeGrind');
const coffeShipping = document.querySelector('#coffeeShipping');

// toggle background colors based on whether input is checked
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

// toggle input display when button is clicked
const handleDisplayToggle = (inputs, button) => {
  if (button.getAttribute('aria-expanded') === 'true') {
    inputs.forEach((input) => input.labels[0].classList.add('hidden'));
    button.setAttribute('aria-expanded', 'false');
    button.firstChild.classList.remove('rotate-180');
  } else if (button.getAttribute('aria-expanded') === 'false') {
    inputs.forEach((input) => input.labels[0].classList.remove('hidden'));
    button.setAttribute('aria-expanded', 'true');
    button.firstChild.classList.add('rotate-180');
  }
};

function handleFieldset(fieldInput) {
  // select all needed elements in fieldset
  const inputs = fieldInput.querySelectorAll('input');
  const button = fieldInput.querySelector('button');

  // set initial styles based on default checked
  setCheckedStyle(inputs);
  // add event listeners to inputs in field set
  inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      setCheckedStyle(inputs);
    });
  });
  button.addEventListener('click', () => handleDisplayToggle(inputs, button));
}

const grindSection = handleFieldset(coffeTypeInputs);
const styleSection = handleFieldset(coffeStyleInputs);
const amountSection = handleFieldset(coffeAmountInputs);
const grindTypeSection = handleFieldset(coffeGrindInputs);
const shippingSelection = handleFieldset(coffeShipping);
