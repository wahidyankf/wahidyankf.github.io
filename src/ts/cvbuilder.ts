import cvData from './cvData';
import {dateShown} from './utils/datetime';

const {
  formalEducation: formalEducationData,
  personalProjects: personalProjectsData,
} = cvData;

// -------- portfolio

let portfolioItem = '';
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
  portfolioItem += `
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

export const portfolio = `
<section class="portfolio-section">
  <h2>Personal Projects</h2>
  <ul>
    ${portfolioItem}
  </ul>
</section>
`;

let educationItem = '';

for (let i = 0; i < formalEducationData.length; i++) {
  educationItem += `
  <ul>
    <li><span class="list-title">${formalEducationData[i].type} Degree in ${
    formalEducationData[i].major
  }</span><span class="list-subtitle"> - ${
    formalEducationData[i].institution
  } - ${formalEducationData[i].location} - ${dateShown(
    formalEducationData[i].start,
    formalEducationData[i].end
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${formalEducationData[i].info}</li>
  </ul> 
  `;
}

export const education = `
<section class="education">
  <h2>Formal Education</h2>
  <ul>
    ${educationItem}
  </ul>
</section>
`;
