import cvData from './cvData';
import {dateShown} from './utils/datetime';

const {formalEducation: formalEducationData} = cvData;

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
