import {Project} from '../data/cv';
import {showTimeDuration} from '../utils/datetime';

export const createProjectsHTML = (projects: Project[]): string => {
  return projects.reduce((acc, project) => {
    const {stacks, link, name, start, end, highlights} = project;

    const stacksAsString = stacks.reduce((acc, skillSet, index) => {
      const isLastItem = index == stacks.length - 1;
      const suffix = isLastItem ? '.' : ', ';

      return (acc += `<code>${skillSet}</code>` + suffix);
    }, '');

    const hightlightsAsHTML = highlights.reduce(
      (acc, description) => acc + `<li>${description}</li>`,
      ''
    );

    return (acc += `
    <ul>
      <li>
        <span class="list-title">
          <a href="${link}">${name}</a>
        </span>
        <span class="list-subtitle"> - ${showTimeDuration(start, end)}</span>
      </li>
    </ul>
    <ul class="list-bullet-point">
      ${hightlightsAsHTML}
      <li>Technology stack: ${stacksAsString}</li>
    </ul>
    `);
  }, '');
};
