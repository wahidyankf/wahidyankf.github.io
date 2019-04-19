import cvData from '../cvData';
import {dateShown} from '../utils/datetime';

const {workExperience: workExperienceData} = cvData;

let workExperienceItem = '';
for (let i = 0; i < workExperienceData.length; i++) {
  let workDescription = workExperienceData[i].description.reduce(
    (descItem, descTotal) => {
      return descItem + `<li>${descTotal}</li>`;
    },
    ''
  );

  workExperienceItem += `
  <ul>
    <li><span class="list-title">${
      workExperienceData[i].jobTitle
    }</span><span class="list-subtitle"> - <a href="${
    workExperienceData[i].institutionLink
  }">${workExperienceData[i].institution}</a> - ${
    workExperienceData[i].location
  } - ${dateShown(
    workExperienceData[i].start,
    workExperienceData[i].end,
    'verbose'
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    ${workDescription}
  </ul>  
  `;
}

const workExperience = `
<section class="portfolio-section work-experience">
  <h2>Work Experience</h2>
  <ul>
    ${workExperienceItem}
  </ul>
</section>
`;

export default workExperience;
