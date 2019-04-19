import header from './sections/header';
import summary from './sections/summary';
import skills from './sections/skills';
import workExperience from './sections/workExperience';
import personalProjects from './sections/personalProjects';
import formalEducation from './sections/formalEducation';
import '../css/app.css';

const main = `
${summary}
${workExperience}
${skills}
${formalEducation}
${personalProjects}
`;

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
