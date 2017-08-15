$('#js-check').hide();

var mainContent = `
${summaryContent}
${skillsContent}
${portfolioContent}
${educationContent}
${workExperienceContent}
${additionalActivitiesContent}
${organizationalExperienceContent}
${engineeringCourseContent}
${nonEngineeringCourseContent}
`;

$('header').append(headerContent);
$('main').append(mainContent);

console.log(headerContent);
