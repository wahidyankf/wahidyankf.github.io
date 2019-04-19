import cvData from '../cvData';
import {dateShown} from '../utils/datetime';

const {personalProjects: personalProjectsData} = cvData;

let projects = '';
for (let i = 0; i < personalProjectsData.length; i++) {
  let stackUsed = '';
  for (let j = 0; j < personalProjectsData[i].skillSetUsed.length; j++) {
    stackUsed += `${personalProjectsData[i].skillSetUsed[j]}`;
    if (j < personalProjectsData[i].skillSetUsed.length - 1) {
      stackUsed += ', ';
    } else {
      stackUsed += '.';
    }
  }
  projects += `
  <ul>
    <li><span class="list-title"><a href="${personalProjectsData[i].link}">${
    personalProjectsData[i].name
  }</a></span> <span class="list-subtitle"> - ${dateShown(
    personalProjectsData[i].start,
    personalProjectsData[i].end
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${personalProjectsData[i].description} Stack used: ${stackUsed}</li>
  </ul>
  `;
}

const personalProjects = `
<section class="portfolio-section">
  <h2>Personal Projects</h2>
  <ul>
    ${projects}
  </ul>
</section>
`;

export default personalProjects;
