const email = document.getElementById('email');
const password = document.getElementById('password');
const submitFormBtn = document.getElementById('submit');

function checkUser() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

submitFormBtn.addEventListener('click', checkUser);
