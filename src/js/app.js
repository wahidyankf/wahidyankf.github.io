import $ from 'jquery';
import {
  summaryContent,
  workExperienceContent,
  skillsContent,
  portfolioContent,
  educationContent,
  additionalActivitiesContent,
  organizationalExperienceContent,
  headerContent,
} from './cvbuilder';
import '../css/app.css';

$('#js-check').hide();

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
