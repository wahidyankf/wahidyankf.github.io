// ----- header

const headerContent = `
<div class="title">
  <h1 class="name">${dataCV.personalData.name}</h1>
  <span class="name-job">${dataCV.personalData.shortDesc}</span>
</div>
<div class="contact">
  <span class=contact-detail><i class="fa fa-github"></i> <a href="${
    dataCV.personalData.socialHub.github
  }">wahidyankf</a></span> 
  <span class=contact-detail><i class="fa fa-linkedin"></i> <a href="${
    dataCV.personalData.socialHub.linkedin
  }">wahidyankf</a></span>
  <span class=contact-detail><i class="fa fa-envelope"></i> <a href="mailto:${
    dataCV.personalData.email
  }">wahidyankf@gmail.com</a></span>
  <span class=contact-detail><i class="fa fa-map-marker"></i> Jakarta, Indonesia</span>
</div>
`;

// ----- summary

const summaryContent = `
<section class="summary">
  <h2>Summary</h2>
  <p>${dataCV.personalData.summary}</p>
</section>
`;

// ----- skills

const skillsProgLangContent = dataCV.skills.programmingLanguage.reduce(
  (acccumulator, currentValue) => {
    return `${acccumulator}<p>${
      currentValue.level
    }: <span class="skill-item">${currentValue.languages.join(
      ', '
    )}</span>.</p>`;
  },
  ''
);

const skillsToolsContent = dataCV.skills.toolsAndLibraries.reduce(
  (acccumulator, currentValue, currentIndex) => {
    return `${acccumulator}<span class="skill-item">${currentValue}</span>${
      currentIndex === dataCV.skills.toolsAndLibraries.length - 1 ? '.' : ', '
    }`;
  },
  ''
);

let skillsLanguageContent = '';
for (let i = 0; i < dataCV.skills.language.length; i++) {
  let separator = ', ';
  if (dataCV.skills.language[i].info === '') {
    separator = '';
  }
  skillsLanguageContent += `<p>${dataCV.skills.language[i].name}: ${
    dataCV.skills.language[i].proficiency
  }${separator}${dataCV.skills.language[i].info}.</p>`;
}

let skillsPastContent = '';
for (let i = 0; i < dataCV.skills.pastExperience.length; i++) {
  skillsPastContent += `<span class="skill-item">${
    dataCV.skills.pastExperience[i]
  }</span>`;
  if (i < dataCV.skills.pastExperience.length - 1) {
    skillsPastContent += ', ';
  } else {
    skillsPastContent += '.';
  }
}

const skillsContent = `
<section class="skills">
  <h2>Skills</h2>
  <div class="skill-container">
    <div class="skill-category skill-prog-lang">
      <h3>Programming Languages</h3>
      ${skillsProgLangContent}
    </div>
    <div class="skill-category skill-tools">
      <h3>Tools and Libraries</h3>
      <p>${skillsToolsContent}</p>
    </div>
    <div class="skill-category skill-lang">
      <h3>Languages (<a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages">CEFR</a>)</h3>
      ${skillsLanguageContent}
    </div>
    <div class="skill-category skill-past">
      <h3>Past Experience</h3>
      <p>${skillsPastContent}<p>
    </div>

    <div class="skill-category skill-empty">
    </div>
  </div>
</section>
`;

let dateShown = function(start, end) {
  if (start === end) {
    return start;
  }
  return `${start} - ${end}`;
};

let portfolioItemContent = '';
for (let i = 0; i < dataCV.portfolio.length; i++) {
  let stackUsed = '';
  for (let j = 0; j < dataCV.portfolio[i].skillSetUsed.length; j++) {
    stackUsed += `${dataCV.portfolio[i].skillSetUsed[j]}`;
    if (j < dataCV.portfolio[i].skillSetUsed.length - 1) {
      stackUsed += ",<span class='normal-space'> </span>";
    } else {
      stackUsed += '.';
    }
  }
  portfolioItemContent += `
  <ul>
    <li><span class="list-title"><a href="${dataCV.portfolio[i].link}">${
    dataCV.portfolio[i].name
  }</a></span> <span class="list-subtitle"> - ${dateShown(
    dataCV.portfolio[i].start,
    dataCV.portfolio[i].end
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${
      dataCV.portfolio[i].description
    } Stack used: <span class="tech-stack">${stackUsed}<span></li>
  </ul>
  `;
}

let portfolioContent = `
<section class="portfolio">
  <h2>Personal Projects</h2>
  <ul>
    ${portfolioItemContent}
  </ul>
</section>
`;

let educationItemContent = '';

for (let i = 0; i < dataCV.formalEducation.length; i++) {
  educationItemContent += `
  <ul>
    <li><span class="list-title">${dataCV.formalEducation[i].type} Degree in ${
    dataCV.formalEducation[i].major
  }</span><span class="list-subtitle"> - ${
    dataCV.formalEducation[i].institution
  } - ${dataCV.formalEducation[i].location} - ${dateShown(
    dataCV.formalEducation[i].start,
    dataCV.formalEducation[i].end
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.formalEducation[i].info}</li>
  </ul> 
  `;
}

const educationContent = `
<section class="education">
  <h2>Formal Education</h2>
  <ul>
    ${educationItemContent}
  </ul>
</section>
`;

let workExperienceItemContent = '';

for (let i = 0; i < dataCV.workExperience.length; i++) {
  let workDescription = dataCV.workExperience[i].description.reduce(
    (descItem, descTotal) => {
      return descItem + `<li>${descTotal}</li>`;
    },
    ''
  );

  workExperienceItemContent += `
  <ul>
    <li><span class="list-title">${
      dataCV.workExperience[i].jobTitle
    }</span><span class="list-subtitle"> - <a href="${
    dataCV.workExperience[i].institutionLink
  }">${dataCV.workExperience[i].institution}</a> - ${
    dataCV.workExperience[i].location
  } - ${dateShown(
    dataCV.workExperience[i].start,
    dataCV.workExperience[i].end
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    ${workDescription}
  </ul>  
  `;
}

// ----- Work experience

const workExperienceContent = `
<section class="work-experience">
  <h2>Work Experience</h2>
  <ul>
    ${workExperienceItemContent}
  </ul>
</section>
`;

let additionalActivitiesItemContent = '';
for (let i = 0; i < dataCV.additionalActivities.length; i++) {
  additionalActivitiesItemContent += `
  <ul>
    <li><span class="list-title">${
      dataCV.additionalActivities[i].jobtitle
    }</span><span class="list-subtitle"> - ${
    dataCV.additionalActivities[i].institution
  } - ${dataCV.additionalActivities[i].location} - ${dateShown(
    dataCV.additionalActivities[i].start,
    dataCV.additionalActivities[i].end
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.additionalActivities[i].description}</li>
  </ul>
  `;
}

// ----- additional activities

const additionalActivitiesContent = `
<section class="additional-activities">
  <h2>Additional Activities</h2>
  <ul>
    ${additionalActivitiesItemContent}
  </ul>
</section>
`;

let organizationalExperienceItemContent = '';
for (let i = 0; i < dataCV.organizationalExperience.length; i++) {
  organizationalExperienceItemContent += `
  <ul>
    <li><span class="list-title">${
      dataCV.organizationalExperience[i].jobtitle
    }</span><span class="list-subtitle"> - ${
    dataCV.organizationalExperience[i].institution
  } - ${dataCV.organizationalExperience[i].location} - ${dateShown(
    dataCV.organizationalExperience[i].start,
    dataCV.organizationalExperience[i].end
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.organizationalExperience[i].description}</li>
  </ul>
  `;
}

// ----- organizational experience

const organizationalExperienceContent = `
<section class="organizational-experience">
  <h2>Organizational Experience</h2>
  <ul>
    ${organizationalExperienceItemContent}
  </ul>
</section>
`;

let engineeringCourseItemContent = '';
for (let i = 0; i < dataCV.courses.engineeringCourse.length; i++) {
  if (dataCV.courses.engineeringCourse[i].type === 'online') {
    engineeringCourseItemContent += `
  <ul>
    <li><span class="list-title">${
      dataCV.courses.engineeringCourse[i].name
    }</span><span class="list-subtitle"> - ${
      dataCV.courses.engineeringCourse[i].institution
    } - <a href="${
      dataCV.courses.engineeringCourse[i].location
    }">course link</a> - ${dateShown(
      dataCV.courses.engineeringCourse[i].start,
      dataCV.courses.engineeringCourse[i].end
    )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.courses.engineeringCourse[i].description}</li>
  </ul>
  `;
  } else {
    engineeringCourseItemContent += `
  <ul>
    <li><span class="list-title">${
      dataCV.courses.engineeringCourse[i].name
    }</span><span class="list-subtitle"> - ${
      dataCV.courses.engineeringCourse[i].institution
    } - ${dataCV.courses.engineeringCourse[i].location} - ${dateShown(
      dataCV.courses.engineeringCourse[i].start,
      dataCV.courses.engineeringCourse[i].end
    )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.courses.engineeringCourse[i].description}</li>
  </ul>
  `;
  }
}

// ----- engineering course

const engineeringCourseContent = `
<section class="course-engineering">
  <h2>Course Taken - Engineering</h2>
  <ul>
    ${engineeringCourseItemContent}
  </ul>
</section>
`;

let nonEngineeringCourseItemContent = '';

for (let i = 0; i < dataCV.courses.nonEngineeringCourse.length; i++) {
  if (dataCV.courses.nonEngineeringCourse[i].type === 'online') {
    nonEngineeringCourseItemContent += `
  <ul>
    <li><span class="list-title">${
      dataCV.courses.nonEngineeringCourse[i].name
    }</span><span class="list-subtitle"> - ${
      dataCV.courses.nonEngineeringCourse[i].institution
    } - <a href="${
      dataCV.courses.nonEngineeringCourse[i].location
    }">course link</a> - ${dateShown(
      dataCV.courses.nonEngineeringCourse[i].start,
      dataCV.courses.nonEngineeringCourse[i].end
    )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.courses.nonEngineeringCourse[i].description}</li>
  </ul>
  `;
  } else {
    nonEngineeringCourseItemContent += `
  <ul>
    <li><span class="list-title">${
      dataCV.courses.nonEngineeringCourse[i].name
    }</span><span class="list-subtitle"> - ${
      dataCV.courses.nonEngineeringCourse[i].institution
    } - ${dataCV.courses.nonEngineeringCourse[i].location} - ${dateShown(
      dataCV.courses.nonEngineeringCourse[i].start,
      dataCV.courses.nonEngineeringCourse[i].end
    )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.courses.nonEngineeringCourse[i].description}</li>
  </ul>
  `;
  }
}

// ----- non engineering course

const nonEngineeringCourseContent = `
<section class="course-nonengineering">
  <h2>Course Taken - Non Engineering</h2>
  <ul>
    ${nonEngineeringCourseItemContent}
  </ul>
</section>
`;
