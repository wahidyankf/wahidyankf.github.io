import cvData from '../../data/index';
import {showTimeDuration} from '../../commons/utils/dateTime';

const {formalEducation: formalEducationData} = cvData;

let formalEducations = '';

for (let i = 0; i < formalEducationData.length; i++) {
  formalEducations += `
  <ul>
    <li><span class="list-title">${formalEducationData[i].type} Degree in ${
    formalEducationData[i].major
  }</span><span class="list-subtitle"> - ${
    formalEducationData[i].institution
  } - ${formalEducationData[i].location} - ${showTimeDuration(
    formalEducationData[i].start,
    formalEducationData[i].end,
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${formalEducationData[i].info}</li>
  </ul> 
  `;
}

const formalEducation = `
<section class="education">
  <h2>Formal Education</h2>
  <ul>
    ${formalEducations}
  </ul>
</section>
`;

export default formalEducation;
