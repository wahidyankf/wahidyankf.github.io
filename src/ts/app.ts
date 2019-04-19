import header from './sections/header/index';
import main from './sections/main/index';

import '../css/app.css';

const jsCheckEl = document.getElementById('js-check');
if (jsCheckEl) {
  jsCheckEl.style.display = 'none';
}

const headerEl = document.getElementById('header');
if (headerEl) {
  headerEl.innerHTML = header;
}

const mainEl = document.getElementById('main');
if (mainEl) {
  mainEl.innerHTML = main;
}
