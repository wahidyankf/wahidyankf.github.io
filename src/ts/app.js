import header from './sections/header/index';
import main from './sections/main/index';
import '../css/app.css';
var jsCheckEl = document.getElementById('js-check');
if (jsCheckEl) {
    jsCheckEl.style.display = 'none';
}
var headerEl = document.getElementById('header');
if (headerEl) {
    headerEl.innerHTML = header;
}
var mainEl = document.getElementById('main');
if (mainEl) {
    mainEl.innerHTML = main;
}
