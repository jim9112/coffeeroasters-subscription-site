// grab mobile menu button and mobile menu modal
const mobileMenuButton = document.querySelector('#mobileMenuButton');
const mobileMenuModal = document.querySelector('#mobileMenuModal');

const handleClick = () => {
  if (mobileMenuButton.getAttribute('aria-expanded') === 'false') {
    mobileMenuModal.classList.remove('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'true');
    mobileMenuButton.innerHTML = `<img src="./assets/shared/mobile/icon-close.svg" alt="" />`;
  } else if (mobileMenuButton.getAttribute('aria-expanded') === 'true') {
    mobileMenuModal.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenuButton.innerHTML = `<img src="./assets/shared/mobile/icon-hamburger.svg" alt="" />`;
  }
};

mobileMenuButton.addEventListener('click', handleClick);
