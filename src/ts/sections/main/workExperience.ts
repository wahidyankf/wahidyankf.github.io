import cvData from '../../data/cv';
import {dateShown} from '../../utils/datetime';

const {workExperience: workExperienceData} = cvData;

const workExperienceAsHTML = workExperienceData.reduce(
  (acc, experienceItem) => {
    const {
      highlights,
      jobTitle,
      institutionLink,
      institution,
      start,
      end,
    } = experienceItem;

    const workHighlightsAsHTML = highlights.reduce((acc, description) => {
      return acc + `<li>${description}</li>`;
    }, '');

    return (
      acc +
      `
  <ul>
      <li>
        <span class="list-title">${jobTitle}</span>
        <span class="list-subtitle"> - <a href="${institutionLink}">${institution}</a> - ${location} - ${dateShown(
        start,
        end,
        'verbose'
      )}</span>
      </li>
  </ul>
  <ul class="list-bullet-point">
    ${workHighlightsAsHTML}
  </ul>  
  `
    );
  },
  ''
);

const workExperience = `
<section class="portfolio-section work-experience">
  <h2>Work Experience</h2>
  <ul>
    ${workExperienceAsHTML}
  </ul>
</section>
`;

export default workExperience;
