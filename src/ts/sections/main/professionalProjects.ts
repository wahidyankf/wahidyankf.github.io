import cvData from '../../data/index';
import {createProjectsHTML} from '../../commons/helpers/projectsHelpers';

export default `
<section class="portfolio-section">
  <h2>Professional Projects (Last 2 Years)</h2>
  <ul>
    ${createProjectsHTML(cvData.professionalProjects)}
  </ul>
</section>
`;
