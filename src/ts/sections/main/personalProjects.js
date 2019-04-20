import cvData from '../../data/cv';
import { dateShown } from '../../utils/datetime';
var personalProjectsData = cvData.personalProjects;
var projects = personalProjectsData.reduce(function (acc, project) {
    var stacks = project.stacks, link = project.link, name = project.name, start = project.start, end = project.end, description = project.description;
    var stacksAsString = stacks.reduce(function (acc, skillSet, index) {
        var isLastItem = index == stacks.length - 1;
        var suffix = isLastItem ? '.' : ', ';
        return (acc += skillSet + suffix);
    }, '');
    return (acc += "\n  <ul>\n    <li><span class=\"list-title\"><a href=\"" + link + "\">" + name + "</a></span> <span class=\"list-subtitle\"> - " + dateShown(start, end) + "</span></li>\n  </ul>\n  <ul class=\"list-bullet-point\">\n    <li>" + description + " Stack used: " + stacksAsString + "</li>\n  </ul>\n  ");
}, '');
export default "\n<section class=\"portfolio-section\">\n  <h2>Personal Projects</h2>\n  <ul>\n    " + projects + "\n  </ul>\n</section>\n";
