import cvData from '../../data/index';
import {showTimeDuration} from '../../commons/utils/dateTime';

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
      location,
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
        <span class="list-subtitle"> - <a href="${institutionLink}">${institution}</a> - ${location} - ${showTimeDuration(
        start,
        end,
        'verbose',
      )}</span>
      </li>
  </ul>
  <ul class="list-bullet-point">
    ${workHighlightsAsHTML}
  </ul>  
  `
    );
  },
  '',
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
