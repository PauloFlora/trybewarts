const userEmail = document.getElementById('email');
const password = document.getElementById('password');
const submitHeaderBtn = document.getElementById('submit');
const submitFormBtn = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');
const textCounter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');
// const inputs = document.getElementsByClassName('subject');

function checkUser(event) {
  event.preventDefault();
  if (userEmail.value === 'tryber@teste.com' && password.value === '123456') {
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

function updateCounter() {
  textCounter.innerText = 500 - textArea.value.length;
}

textArea.addEventListener('input', updateCounter);

function getSubjects() {
  let subjectsText = 'Materias: ';
  const subjects = document.querySelectorAll('input[class="subject"]:checked');
  for (let i = 0; i < subjects.length; i += 1) {
    subjectsText += `${subjects[i].value} `;
  }
  return subjectsText;
}

function getFormData() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const fullName = `Nome: ${name} ${lastName}`;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const subjects = getSubjects();
  const evaluation = document.querySelector('input[name="rate"]:checked').value;
  const observations = document.querySelector('textarea').value;

  form.innerHTML = '';
  form.innerHTML = `${fullName}<br>
    Email: ${email}<br>
    Casa: ${house}<br>
    Família: ${family}<br>
    ${subjects}<br>
    Avaliação: ${evaluation}<br>
    Observações: ${observations}`;
}

submitFormBtn.addEventListener('click', getFormData);
