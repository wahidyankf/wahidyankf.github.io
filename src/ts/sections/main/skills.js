import cvData from '../../data/cv';
var skillsData = cvData.skills;
var programmingLanguages = skillsData.programmingLanguages, tools = skillsData.tools, languages = skillsData.languages;
var programmingLanguagesAsHTML = programmingLanguages.reduce(function (acccumulator, currentValue) {
    return acccumulator + "<p>" + currentValue.level + ": " + currentValue.languages.join(', ') + ".</p>";
}, '');
var toolsAsHTML = tools.reduce(function (acccumulator, currentSkill, index) {
    return "" + acccumulator + currentSkill + (index === tools.length - 1 ? '.' : ', ');
}, '');
var languagesAsHTML = languages.reduce(function (acccumulator, currentLanguage) {
    return acccumulator + "<p>" + currentLanguage.name + ": " + currentLanguage.proficiency + (currentLanguage.info === '' ? '.' : ',') + " " + currentLanguage.info + (currentLanguage.info === '' ? '' : '.') + "</p>";
}, '');
var skills = "\n<section class=\"portfolio-section skills\">\n  <h2>Skills</h2>\n  <div class=\"skill-container\">\n    <div class=\"skill-category skill-prog-lang\">\n      <h3 class=\"list-title\">Programming Languages</h3>\n      " + programmingLanguagesAsHTML + "\n    </div>\n    <div class=\"skill-category skill-tools\">\n      <h3 class=\"list-title\">Tools and Libraries</h3>\n      <p>" + toolsAsHTML + "</p>\n    </div>\n    <div class=\"skill-category skill-lang\">\n      <h3 class=\"list-title\">Languages (<a href=\"https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages\">CEFR</a>)</h3>\n      " + languagesAsHTML + "\n    </div>\n    <div class=\"skill-category skill-empty\">\n    </div>\n  </div>\n</section>\n";
export default skills;
