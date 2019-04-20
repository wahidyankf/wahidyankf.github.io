import cvData from '../../data/cv';
import { dateShown } from '../../utils/datetime';
var formalEducationData = cvData.formalEducation;
var formalEducations = '';
for (var i = 0; i < formalEducationData.length; i++) {
    formalEducations += "\n  <ul>\n    <li><span class=\"list-title\">" + formalEducationData[i].type + " Degree in " + formalEducationData[i].major + "</span><span class=\"list-subtitle\"> - " + formalEducationData[i].institution + " - " + formalEducationData[i].location + " - " + dateShown(formalEducationData[i].start, formalEducationData[i].end) + "</span></li>\n  </ul>\n  <ul class=\"list-bullet-point\">\n    <li>" + formalEducationData[i].info + "</li>\n  </ul> \n  ";
}
var formalEducation = "\n<section class=\"education\">\n  <h2>Formal Education</h2>\n  <ul>\n    " + formalEducations + "\n  </ul>\n</section>\n";
export default formalEducation;
