const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const copyButton = document.querySelector('.copy-btn');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

copyButton.addEventListener('click', () => {
  const email = copyButton.dataset.email;
  navigator.clipboard.writeText(email).then(() => {
    copyButton.textContent = 'Copied!';
    setTimeout(() => {
      copyButton.textContent = 'Copy Email';
    }, 2000);
  });
});
