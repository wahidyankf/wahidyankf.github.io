import {IProject} from '../../data/project';
import {showTimeDuration} from '../utils/dateTime';

export const createProjectsHTML = (projects: IProject[]): string => {
  return projects.reduce((acc, project) => {
    const {
      stacks,
      type: projectType,
      link,
      name,
      start,
      end,
      highlights,
      context: projectContext,
    } = project;

    const stacksAsHTML = stacks.reduce((acc, skillSet, index) => {
      const isLastItem = index == stacks.length - 1;
      const suffix = isLastItem ? '.' : ', ';

      return (acc += `<code>${skillSet}</code>` + suffix);
    }, '');

    const hightlightsAsHTML = highlights.reduce(
      (acc, description) => acc + `<li>${description}</li>`,
      '',
    );

    const projectNameAsHTML =
      (link.length === 0 ? `${name}` : `<a href="${link}">${name}</a>`) +
      ` (${projectType})`;

    const timeDurationAsHTML =
      start.length === 0 ? '' : `- ${showTimeDuration(start, end)}`;

    const projectContextAsHTML = projectContext
      ? `<li>Project context: ${projectContext}</li>`
      : '';

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
      ${projectContextAsHTML}
      ${hightlightsAsHTML}
      <li>Technology stack: ${stacksAsHTML}</li>
    </ul>
    `);
  }, '');
};
