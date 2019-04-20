import cvData from '../../data/cv';
import { dateShown } from '../../utils/datetime';
var workExperienceData = cvData.workExperiences;
var workExperienceItem = '';
for (var i = 0; i < workExperienceData.length; i++) {
    var workDescription = workExperienceData[i].description.reduce(function (descItem, descTotal) {
        return descItem + ("<li>" + descTotal + "</li>");
    }, '');
    workExperienceItem += "\n  <ul>\n    <li><span class=\"list-title\">" + workExperienceData[i].jobTitle + "</span><span class=\"list-subtitle\"> - <a href=\"" + workExperienceData[i].institutionLink + "\">" + workExperienceData[i].institution + "</a> - " + workExperienceData[i].location + " - " + dateShown(workExperienceData[i].start, workExperienceData[i].end, 'verbose') + "</span></li>\n  </ul>\n  <ul class=\"list-bullet-point\">\n    " + workDescription + "\n  </ul>  \n  ";
}
var workExperience = "\n<section class=\"portfolio-section work-experience\">\n  <h2>Work Experience</h2>\n  <ul>\n    " + workExperienceItem + "\n  </ul>\n</section>\n";
export default workExperience;
