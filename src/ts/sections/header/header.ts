import cvData from '../../data/cv';

const {personalInfo: personalInfoData} = cvData;

const header = `
<div class="title">
  <h1 class="name">${personalInfoData.name}</h1>
  <span class="job-name">${personalInfoData.shortDesc}</span>
</div>
<div class="contact">
  <span class=contact-detail><i class="fa fa-github"></i> <a href="${
    personalInfoData.socialHub.github
  }">wahidyankf</a></span> 
  <span class=contact-detail><i class="fa fa-linkedin"></i> <a href="${
    personalInfoData.socialHub.linkedin
  }">wahidyankf</a></span>
  <span class=contact-detail><i class="fa fa-envelope"></i> <a href="mailto:${
    personalInfoData.email
  }">wahidyankf@gmail.com</a></span>
  <span class=contact-detail><i class="fa fa-map-marker"></i> ${
    personalInfoData.location
  }</span>
</div>
`;

export default header;
