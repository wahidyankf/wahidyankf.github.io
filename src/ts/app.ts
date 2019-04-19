import {
  summary,
  workExperience,
  skills,
  portfolio,
  education,
  header,
} from './cvbuilder';
import '../css/app.css';

const jsCheckEl = document.getElementById('js-check');

if (jsCheckEl) {
  jsCheckEl.style.display = 'none';
}

const main = `
${summary}
${workExperience}
${skills}
${education}
${portfolio}
`;

const headerEl = document.getElementById('header');
const mainEl = document.getElementById('main');

if (headerEl) {
  headerEl.innerHTML = header;
}

if (mainEl) {
  mainEl.innerHTML = main;
}
