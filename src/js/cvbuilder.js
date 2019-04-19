import {dataCV} from './data';
import {formatTimeDuration, dateShown} from './libs/datetime';

const {
  personalInfo: personalInfoData,
  skills: skillsData,
  workExperience: workExperienceData,
  formalEducation: formalEducationData,
  portfolio: portfolioData,
} = dataCV;

// ----- header

export const header = `
<div class="title">
  <h1 class="name">${personalInfoData.name}</h1>
  <span class="name-job">${personalInfoData.shortDesc}</span>
</div>
<div class="contact">
  <span class=contact-detail><i class="fa fa-github"></i> <a href="${
    personalInfoData.socialHub.github
  }">wahidyankf</a></span> 
  <span class=contact-detail><i class="fa fa-linkedin"></i> <a href="${
    personalInfoData.socialHub.linkedin
  }">wahidyankf</a></span>
  <span class=contact-detail><i class="fa fa-envelope"></i> <a href="mailto:${
    personalInfoData.email
  }">wahidyankf@gmail.com</a></span>
  <span class=contact-detail><i class="fa fa-map-marker"></i> ${
    personalInfoData.address
  }</span>
</div>
`;

// ----- summary

export const summary = `
<section class="portfolio-section summary">
  <h2>Summary</h2>
  <p>${personalInfoData.summary}</p>
</section>
`;

// ----- skills

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
  (acccumulator, currentLanguage, index) => {
    return `${acccumulator}<p>${currentLanguage.name}: ${
      currentLanguage.proficiency
    }${currentLanguage.info === '' ? '.' : ','} ${currentLanguage.info}${
      currentLanguage.info === '' ? '' : '.'
    }</p>`;
  },
  ''
);

export const skills = `
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

// ----- Portfolio

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

export const workExperience = `
<section class="portfolio-section work-experience">
  <h2>Work Experience</h2>
  <ul>
    ${workExperienceItem}
  </ul>
</section>
`;

// -------- portfolio

let portfolioItem = '';
for (let i = 0; i < portfolioData.length; i++) {
  let stackUsed = '';
  for (let j = 0; j < portfolioData[i].skillSetUsed.length; j++) {
    stackUsed += `${portfolioData[i].skillSetUsed[j]}`;
    if (j < portfolioData[i].skillSetUsed.length - 1) {
      stackUsed += ', ';
    } else {
      stackUsed += '.';
    }
  }
  portfolioItem += `
  <ul>
    <li><span class="list-title"><a href="${portfolioData[i].link}">${
    portfolioData[i].name
  }</a></span> <span class="list-subtitle"> - ${dateShown(
    portfolioData[i].start,
    portfolioData[i].end
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${portfolioData[i].description} Stack used: ${stackUsed}</li>
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
