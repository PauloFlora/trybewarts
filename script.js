const userEmail = document.getElementById('email');
const password = document.getElementById('password');
const submitHeaderBtn = document.getElementById('submit');
const submitFormBtn = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');
const form = document.getElementById('evaluation-form');

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
  } else {
    submitFormBtn.disabled = true;
  }
}

checkAgreement.addEventListener('click', submitForm);

function getSubjects() {
  let subjectsText = 'Matérias: ';
  const subjects = [];
  const subjectsInput = document.getElementsByName('subjects');
  console.log(subjectsInput);
  for (let i = 0; i < subjectsInput.length; i += 1) {
    if (subjectsInput[i].checked) {
      subjects.push(subjectsInput[i].value);
    }
  }
  subjectsText += subjects.join(', ');
  return subjectsText;
}

function getFormData(e) {
  e.preventDefault();
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
