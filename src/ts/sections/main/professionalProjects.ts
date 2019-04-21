import cvData from '../../data/cv';
import {createProjectsHTML} from '../../commons/helpers/projectsHelpers';

export default `
<section class="portfolio-section">
  <h2>Professional Projects</h2>
  <ul>
    ${createProjectsHTML(cvData.professionalProjects)}
  </ul>
</section>
`;
