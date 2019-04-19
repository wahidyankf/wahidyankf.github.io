import cvData from '../cvData';

const {personalInfo: personalInfoData} = cvData;

const summary = `
<section class="portfolio-section summary">
  <h2>Summary</h2>
  <p>${personalInfoData.summary}</p>
</section>
`;

export default summary;
