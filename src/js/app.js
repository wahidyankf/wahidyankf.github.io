$('#js-check').hide();

// let mainContent = `
// ${summaryContent}
// ${workExperienceContent}
// ${skillsContent}
// ${portfolioContent}
// ${educationContent}
// ${additionalActivitiesContent}
// ${organizationalExperienceContent}
// ${engineeringCourseContent}
// ${nonEngineeringCourseContent}
// `;

let mainContent = `
${summaryContent}
${workExperienceContent}
${skillsContent}
${portfolioContent}
${educationContent}
${additionalActivitiesContent}
${organizationalExperienceContent}
`;

$('header').append(headerContent);
$('main').append(mainContent);
