const email = document.getElementById('email');
const password = document.getElementById('password');
const submitHeaderBtn = document.getElementById('submit');
const submitFormBtn = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');

function checkUser(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

submitHeaderBtn.addEventListener('click', checkUser);

submitFormBtn.disabled = true;
function submitForm() {
  if (checkAgreement.checked === true) {
    submitFormBtn.disabled = false;
  }
}

checkAgreement.addEventListener('click', submitForm);
