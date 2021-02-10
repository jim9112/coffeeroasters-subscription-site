const inputs = document.querySelectorAll('input');

const setCheckedStyle = () => {
  inputs.forEach((input) => {
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

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    setCheckedStyle();
    // const selection = e.target.labels[0].children[0];
    // selection.classList.remove('bg-light-grey');
    // selection.classList.add('bg-dark-cyan');
    // console.log(e.target.checked);
  });
});

setCheckedStyle();
