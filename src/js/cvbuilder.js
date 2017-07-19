var headerContent = `
<div class="title">
  <h1 class="name">${dataCV.personalData.name}</h1>
  <span class="name-job">${dataCV.personalData.shortDesc}</span>
</div>
<div class="contact">
  <span class=contact-detail><i class="fa fa-github"></i> <a href="${dataCV.personalData.socialHub.github}">wahidyankf</a></span> 
  <span class=contact-detail><i class="fa fa-linkedin"></i> <a href="${dataCV.personalData.socialHub.linkedin}">wahidyankf</a></span>
  <span class=contact-detail><i class="fa fa-envelope"></i> <a href="mailto:${dataCV.personalData.email}">wahidyankf@gmail.com</a></span>
  <span class=contact-detail><i class="fa fa-map-marker"></i> Jakarta, Indonesia</span>
</div>
`;

var summaryContent = `
<section class="summary">
  <h2>Summary</h2>
  <hr>
  <p>${dataCV.personalData.summary}</p>
</section>
`;

var skillsProgLangContent = "";
for (let i = 0; i < dataCV.skills.programmingLanguage.length; i++) {
  skillsProgLangContent += `<p><span class="skill-item">${dataCV.skills.programmingLanguage[i].name}</span>: ${dataCV.skills.programmingLanguage[i].rating}/10</p>
      `;
}

var skillsToolsContent = "";
for (let i = 0; i < dataCV.skills.toolsAndLibraries.length; i++) {
  skillsToolsContent += `<span class="skill-item">${dataCV.skills.toolsAndLibraries[i]}</span>`;
  if (i < dataCV.skills.toolsAndLibraries.length - 1) {
    skillsToolsContent += ", ";
  } else {
    skillsToolsContent += ".";
  }
}

var skillsLanguageContent = "";
for (let i = 0; i < dataCV.skills.language.length; i++) {
  skillsLanguageContent += `<p><span class="skill-item">${dataCV.skills.language[i].name}</span>: ${dataCV.skills.language[i].proficiency}, ${dataCV.skills.language[i].info}</p>`;
}

var skillsPastContent = "";
for (let i = 0; i < dataCV.skills.pastExperience.length; i++) {
  skillsPastContent += `<span class="skill-item">${dataCV.skills.pastExperience[i]}</span>`;
  if (i < dataCV.skills.pastExperience.length - 1) {
    skillsPastContent += ", ";
  } else {
    skillsPastContent += ".";
  }
}

var skillsOSContent = "";
for (let i = 0; i < dataCV.skills.operatingSystem.length; i++) {
  skillsOSContent += `<span class="skill-item">${dataCV.skills.operatingSystem[i]}</span>`;
  if (i < dataCV.skills.operatingSystem.length - 1) {
    skillsOSContent += ", ";
  } else {
    skillsOSContent += ".";
  }
}

var skillsContent = `
<section class="skills">
  <h2>Skills</h2>
  <hr>
  <div class="skill-container">
    <div class="skill-category skill-prog-lang">
      <h3>Programming Languages (Active)</h3>
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
    <div class="skill-category skill-os">
      <h3>Operating System</h3>
      <p>${skillsOSContent}</p>
    <div
  </div>
</section>
`;

var dateShown = function (start, end) {
  if (start === end) {
    return start;
  } else {
    return `${start} - ${end}`;
  }
};

var portfolioItemContent = "";
for (let i = 0; i < dataCV.portfolio.length; i++) {
  let stackUsed = "";
  for (let j = 0; j < dataCV.portfolio[i].skillSetUsed.length; j++) {
    stackUsed += `${dataCV.portfolio[i].skillSetUsed[j]}`;
    if (j < dataCV.portfolio[i].skillSetUsed.length - 1) {
      stackUsed += ", ";
    } else {
      stackUsed += ".";
    }
  }
  portfolioItemContent += `
  <ul>
    <li><span class="list-title"><a href="${dataCV.portfolio[i].link}">${dataCV.portfolio[i].name}</a></span> <span class="list-subtitle"> - ${dateShown(dataCV.portfolio[i].start, dataCV.portfolio[i].end)}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.portfolio[i].description} Stack used: ${stackUsed}</li>
  </ul>
  `;
}

var portfolioContent = `
<section class="portfolio">
  <h2>Project Portfolio</h2>
  <hr>
  <ul>
    ${portfolioItemContent}
  </ul>
</section>
`;

var educationItemContent = "";
for (let i = 0; i < dataCV.formalEducation.length; i++) {
  educationItemContent += `
  <ul>
    <li><span class="list-title">${dataCV.formalEducation[i].type} Degree in ${dataCV.formalEducation[i].major}</span><span class="list-subtitle"> - ${dataCV.formalEducation[i].institution} - ${dataCV.formalEducation[i].location} - ${dateShown(dataCV.formalEducation[i].start, dataCV.formalEducation[i].end)}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.formalEducation[i].info}</li>
  </ul> 
  `;
}

var educationContent = `
<section class="education">
  <h2>Education</h2>
  <hr>
  <ul>
    ${educationItemContent}
  </ul>
</section>
`;

var workExperienceItemContent = "";
for (let i = 0; i < dataCV.workExperience.length; i++) {
  workExperienceItemContent += `
  <ul>
    <li><span class="list-title">${dataCV.workExperience[i].jobTitle}</span><span class="list-subtitle"> - ${dataCV.workExperience[i].institution} - ${dataCV.workExperience[i].location} - ${dateShown(dataCV.workExperience[i].start, dataCV.workExperience[i].end)}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.workExperience[i].description}</li>
  </ul>  
  `;
}

var workExperienceContent = `
<section class="work-experience">
  <h2>Work Experience</h2>
  <hr>
  <ul>
    ${workExperienceItemContent}
  </ul>
</section>
`;


var additionalActivitiesItemContent = "";
for (let i = 0; i < dataCV.additionalActivities.length; i++) {
  additionalActivitiesItemContent += `
  <ul>
    <li><span class="list-title">${dataCV.additionalActivities[i].jobtitle}</span><span class="list-subtitle"> - ${dataCV.additionalActivities[i].institution} - ${dataCV.additionalActivities[i].location} - ${dateShown(dataCV.additionalActivities[i].start, dataCV.additionalActivities[i].end)}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.additionalActivities[i].description}</li>
  </ul>
  `;
}

var additionalActivitiesContent = `
<section class="additional-activities">
  <h2>Additional Activities</h2>
  <hr>
  <ul>
    ${additionalActivitiesItemContent}
  </ul>
</section>
`;

var organizationalExperienceItemContent = "";
for (let i = 0; i < dataCV.organizationalExperience.length; i++) {
  organizationalExperienceItemContent += `
  <ul>
    <li><span class="list-title">${dataCV.organizationalExperience[i].jobtitle}</span><span class="list-subtitle"> - ${dataCV.organizationalExperience[i].institution} - ${dataCV.organizationalExperience[i].location} - ${dateShown(dataCV.organizationalExperience[i].start, dataCV.organizationalExperience[i].end)}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.organizationalExperience[i].description}</li>
  </ul>
  `;
}

var organizationalExperienceContent = `
<section class="organizational-experience">
  <h2>Organizational Experience</h2>
  <hr>
  <ul>
    ${organizationalExperienceItemContent}
  </ul>
</section>
`;

var engineeringCourseItemContent = "";
for (let i = 0; i < dataCV.courses.engineeringCourse.length; i++) {
  engineeringCourseItemContent += `
  <ul>
    <li><span class="list-title">${dataCV.courses.engineeringCourse[i].name}</span><span class="list-subtitle"> - ${dataCV.courses.engineeringCourse[i].institution} - ${dataCV.courses.engineeringCourse[i].location} - ${dateShown(dataCV.courses.engineeringCourse[i].start, dataCV.courses.engineeringCourse[i].end)}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.courses.engineeringCourse[i].description}</li>
  </ul>
  `;
}

var engineeringCourseContent = `
<section class="course-engineering">
  <h2>Course Taken - Engineering</h2>
  <hr>
  <ul>
    ${engineeringCourseItemContent}
  </ul>
</section>
`;

var nonEngineeringCourseItemContent = "";
for (let i = 0; i < dataCV.courses.nonEngineeringCourse.length; i++) {
  nonEngineeringCourseItemContent += `
  <ul>
    <li><span class="list-title">${dataCV.courses.nonEngineeringCourse[i].name}</span><span class="list-subtitle"> - ${dataCV.courses.nonEngineeringCourse[i].institution} - ${dataCV.courses.nonEngineeringCourse[i].location} - ${dateShown(dataCV.courses.nonEngineeringCourse[i].start, dataCV.courses.nonEngineeringCourse[i].end)}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${dataCV.courses.nonEngineeringCourse[i].description}</li>
  </ul>
  `;
}

var nonEngineeringCourseContent = `
<section class="course-nonengineering">
  <h2>Course Taken - Non Engineering</h2>
  <hr>
  <ul>
    ${nonEngineeringCourseItemContent}
  </ul>
</section>
`;