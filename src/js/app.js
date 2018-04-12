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

const mainContent = `
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
