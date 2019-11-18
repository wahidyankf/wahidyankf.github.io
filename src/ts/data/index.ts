import {PersonalInfo, personalInfo} from './personalInfo';
import {Project, personalProjects, professionalProjects} from './project';
import {FormalEducation, formalEducation} from './formalEducation';
import {WorkExperience, workExperience} from './workExperience';
import {Skills, skills} from './skills';

interface CV {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  skills: Skills;
  formalEducation: FormalEducation[];
  professionalProjects: Project[];
  personalProjects: Project[];
}

const cv: CV = {
  personalInfo,
  personalProjects,
  professionalProjects,
  formalEducation,
  workExperience,
  skills,
};

export default cv;
