import cvData from '../../data/cv';
import {dateShown} from '../../utils/datetime';

const {professionalProjects: professionalProjectsData} = cvData;

const projects = professionalProjectsData.reduce((acc, project) => {
  const {stacks, link, name, start, end, description} = project;

  const stacksAsString = stacks.reduce((acc, skillSet, index) => {
    const isLastItem = index == stacks.length - 1;
    const suffix = isLastItem ? '.' : ', ';

    return (acc += skillSet + suffix);
  }, '');

  return (acc += `
  <ul>
    <li><span class="list-title"><a href="${link}">${name}</a></span> <span class="list-subtitle"> - ${dateShown(
    start,
    end
  )}</span></li>
  </ul>
  <ul class="list-bullet-point">
    <li>${description} Stack used: ${stacksAsString}</li>
  </ul>
  `);
}, '');

export default `
<section class="portfolio-section">
  <h2>Professional Projects</h2>
  <ul>
    ${projects}
  </ul>
</section>
`;
