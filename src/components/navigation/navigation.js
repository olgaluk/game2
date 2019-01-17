import './navigation.css';

function createNavigation() {
  const htmlImport = document.querySelector('link[rel="import"]');
  const htmlDoc = htmlImport.import;
  const htmlNavigation = htmlDoc.querySelector('.nav');
  const parentElem = document.querySelector('.home');
  parentElem.insertBefore(htmlNavigation.cloneNode(true), parentElem.firstChild);
}

export default createNavigation;
