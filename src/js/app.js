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

if (module.hot) {
  module.hot.dispose(function() {
    // module is about to be replaced
  });
  module.hot.accept(function() {
    // module or one of its dependencies was just updated
  });
}
