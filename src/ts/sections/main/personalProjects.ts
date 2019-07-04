import cvData from '../../data/index';
import {createProjectsHTML} from '../../commons/helpers/projectsHelpers';

export default `
<section class="portfolio-section">
  <h2>Personal Projects</h2>
  <ul>
    ${createProjectsHTML(cvData.personalProjects)}
  </ul>
</section>
`;
