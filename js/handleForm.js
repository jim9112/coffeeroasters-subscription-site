const form = document.querySelector('form');
const allInputs = document.querySelectorAll('input');
// import fieldsets from plan page form
const coffeTypeInputs = document.querySelector('#coffeeType');
const coffeStyleInputs = document.querySelector('#coffeeStyle');
const coffeAmountInputs = document.querySelector('#coffeeAmount');
const coffeGrindInputs = document.querySelector('#coffeeGrind');
const coffeShipping = document.querySelector('#coffeeShipping');

// import summary fields
const fieldOne = document.querySelector('#field1');
const fieldTwo = document.querySelector('#field2');
const fieldThree = document.querySelector('#field3');
const fieldFour = document.querySelector('#field4');
const fieldFive = document.querySelector('#field5');

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

// if capsule is selected disable grind section
const disableGrind = () => {
  // make sure grind selections are not checked
  const grindInputs = coffeGrindInputs.querySelectorAll('input');
  grindInputs.forEach((input) => {
    input.checked = false;
    setCheckedStyle(grindInputs);
  });

  // disable grind fieldset
  coffeGrindInputs.disabled = true;
};

// enable the grind fieldset
const enableGrind = () => {
  coffeGrindInputs.disabled = false;
};

// handle form submit
const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log('form submitted');
};

// form submit event listener
form.addEventListener('submit', handleFormSubmit);

function handleFieldset(fieldInput, textField) {
  // select all needed elements in fieldset
  const inputs = fieldInput.querySelectorAll('input');
  const button = fieldInput.querySelector('button');
  setCheckedStyle(inputs);
  // add event listeners to inputs in field set
  inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      setCheckedStyle(inputs);
      if (input.id === 'capsule') disableGrind();
      if (input.id === 'filter' || input.id === 'espresso') enableGrind();
      textField.textContent = input.value;
    });
  });
  button.addEventListener('click', () => handleDisplayToggle(inputs, button));
}

form.reset();
setCheckedStyle(allInputs);

const grindSection = handleFieldset(coffeTypeInputs, fieldTwo);
const styleSection = handleFieldset(coffeStyleInputs, fieldOne);
const amountSection = handleFieldset(coffeAmountInputs, fieldThree);
const grindTypeSection = handleFieldset(coffeGrindInputs, fieldFour);
const shippingSelection = handleFieldset(coffeShipping, fieldFive);
