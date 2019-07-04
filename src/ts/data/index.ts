import {IPersonalInfo, personalInfo} from './personalInfo';
import {IProject, personalProjects, professionalProjects} from './project';
import {IFormalEducation, formalEducation} from './formalEducation';
import {IWorkExperienceItem, workExperience} from './workExperience';
import {ISkills, skills} from './skills';

interface ICV {
  personalInfo: IPersonalInfo;
  workExperience: IWorkExperienceItem[];
  skills: ISkills;
  formalEducation: IFormalEducation[];
  professionalProjects: IProject[];
  personalProjects: IProject[];
}

const cv: ICV = {
  personalInfo,
  personalProjects,
  professionalProjects,
  formalEducation,
  workExperience,
  skills,
};

export default cv;
