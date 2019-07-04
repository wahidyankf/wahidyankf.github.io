import cvData from '../../data/index';

const {skills: skillsData} = cvData;
const {programmingLanguages, tools, languages} = skillsData;

const programmingLanguagesAsHTML = programmingLanguages.reduce(
  (acccumulator, currentValue) => {
    const languagesAsListOfHTML = currentValue.languages.map(
      (language) => `<code>${language}</code>`,
    );

    return `${acccumulator}<p>${
      currentValue.level
    }: ${languagesAsListOfHTML.join(', ')}.</p>`;
  },
  '',
);

const toolsAsHTML = tools.reduce((acccumulator, currentSkill, index) => {
  return `${acccumulator}<code>${currentSkill}</code>${
    index === tools.length - 1 ? '.' : ', '
  }`;
}, '');

const languagesAsHTML = languages.reduce((acccumulator, currentLanguage) => {
  return `${acccumulator}<p><code>${currentLanguage.name}</code>: ${
    currentLanguage.proficiency
  }${currentLanguage.info === '' ? '.' : ','} ${currentLanguage.info}${
    currentLanguage.info === '' ? '' : '.'
  }</p>`;
}, '');

const skills = `
<section class="portfolio-section skills">
  <h2>Skills</h2>
  <div class="skill-container">
    <div class="skill-category skill-prog-lang">
      <h3 class="list-title">Programming Languages</h3>
      ${programmingLanguagesAsHTML}
    </div>
    <div class="skill-category skill-tools">
      <h3 class="list-title">Tools and Libraries</h3>
      <p>${toolsAsHTML}</p>
    </div>
    <div class="skill-category skill-lang">
      <h3 class="list-title">Languages (<a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages">CEFR</a>)</h3>
      ${languagesAsHTML}
    </div>
    <div class="skill-category skill-empty">
    </div>
  </div>
</section>
`;

export default skills;
