import './login.css';
import createRegistrationForm from '../../components/registration-form/registration-form';

function createRegistrationPage() {
  document.body.innerHTML = '';
  const htmlImport = document.querySelector('link[data="login"]');
  const htmlDoc = htmlImport.import;
  const htmlRegistrationPage = htmlDoc.querySelector('.container-login');
  document.body.appendChild(htmlRegistrationPage.cloneNode(true));
  createRegistrationForm();
}

export default createRegistrationPage;
