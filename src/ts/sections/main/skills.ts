import cvData from '../../data/cv';

const {skills: skillsData} = cvData;

const skillsProgLang = skillsData.programmingLanguage.reduce(
  (acccumulator, currentValue) => {
    return `${acccumulator}<p>${
      currentValue.level
    }: ${currentValue.languages.join(', ')}.</p>`;
  },
  ''
);

const skillsTools = skillsData.toolsAndLibraries.reduce(
  (acccumulator, currentSkill, index) => {
    return `${acccumulator}${currentSkill}${
      index === skillsData.toolsAndLibraries.length - 1 ? '.' : ', '
    }`;
  },
  ''
);

const skillsLanguage = skillsData.language.reduce(
  (acccumulator, currentLanguage) => {
    return `${acccumulator}<p>${currentLanguage.name}: ${
      currentLanguage.proficiency
    }${currentLanguage.info === '' ? '.' : ','} ${currentLanguage.info}${
      currentLanguage.info === '' ? '' : '.'
    }</p>`;
  },
  ''
);

const skills = `
<section class="portfolio-section skills">
  <h2>Skills</h2>
  <div class="skill-container">
    <div class="skill-category skill-prog-lang">
      <h3 class="list-title">Programming Languages</h3>
      ${skillsProgLang}
    </div>
    <div class="skill-category skill-tools">
      <h3 class="list-title">Tools and Libraries</h3>
      <p>${skillsTools}</p>
    </div>
    <div class="skill-category skill-lang">
      <h3 class="list-title">Languages (<a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages">CEFR</a>)</h3>
      ${skillsLanguage}
    </div>
    <div class="skill-category skill-empty">
    </div>
  </div>
</section>
`;

export default skills;
