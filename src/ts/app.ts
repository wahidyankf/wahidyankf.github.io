import $ from 'jquery';
import {
  summary,
  workExperience,
  skills,
  portfolio,
  education,
  header,
} from './cvbuilder';
import '../css/app.css';

$('#js-check').hide();

const main = `
${summary}
${workExperience}
${skills}
${education}
${portfolio}
`;

$('header').append(header);
$('main').append(main);
