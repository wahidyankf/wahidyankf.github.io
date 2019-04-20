import {Project} from '../data/cv';
import {showTimeDuration} from '../utils/datetime';

export const createProjectsHTML = (projects: Project[]): string => {
  return projects.reduce((acc, project) => {
    const {stacks, link, name, start, end, highlights} = project;

    const stacksAsHTML = stacks.reduce((acc, skillSet, index) => {
      const isLastItem = index == stacks.length - 1;
      const suffix = isLastItem ? '.' : ', ';

      return (acc += `<code>${skillSet}</code>` + suffix);
    }, '');

    const hightlightsAsHTML = highlights.reduce(
      (acc, description) => acc + `<li>${description}</li>`,
      ''
    );

    let projectNameAsHTML =
      link.length === 0 ? name : `<a href="${link}">${name}</a>`;

    let timeDurationAsHTML =
      start.length === 0 ? '' : `- ${showTimeDuration(start, end)}`;

    return (acc += `
    <ul>
      <li>
        <span class="list-title">
          ${projectNameAsHTML}
        </span>
        <span class="list-subtitle">${timeDurationAsHTML}</span>
      </li>
    </ul>
    <ul class="list-bullet-point">
      ${hightlightsAsHTML}
      <li>Technology stack: ${stacksAsHTML}</li>
    </ul>
    `);
  }, '');
};
