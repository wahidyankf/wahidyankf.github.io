import cvData from '../../data/cv';
import {createProjectsHTML} from '../../helpers/projects';

export default `
<section class="portfolio-section">
  <h2>Personal Projects</h2>
  <ul>
    ${createProjectsHTML(cvData.personalProjects)}
  </ul>
</section>
`;
