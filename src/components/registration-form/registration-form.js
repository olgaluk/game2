import './registration-form.css';

function createRegistrationForm() {
  const htmlImport = document.querySelector('link[data="registration"]');
  const htmlDoc = htmlImport.import;
  const htmlRegistrationForm = htmlDoc.querySelector('.form-container');
  const parentElem = document.querySelector('.container-login');
  parentElem.appendChild(htmlRegistrationForm.cloneNode(true));
}

export default createRegistrationForm;
