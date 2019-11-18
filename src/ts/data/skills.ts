import {createStringsOfEnums} from '../commons/helpers/enumsHelpers';
import {Library, Tool, ProgrammingLanguage} from '../commons/constants/enums';

interface Skills {
  programmingLanguages: Array<{
    level: string;
    languages: ProgrammingLanguage[];
  }>;
  languages: Array<{name: string; proficiency: string; info: string}>;
  tools: Array<string>;
}

const skills: Skills = {
  programmingLanguages: [
    {
      level: 'Production',
      languages: [
        ProgrammingLanguage.HTML,
        ProgrammingLanguage.CSS,
        ProgrammingLanguage.JS,
        ProgrammingLanguage.ReasonML,
      ],
    },
    {
      level: 'Familiar',
      languages: [ProgrammingLanguage.NodeJS],
    },
    {
      level: 'Exposure',
      languages: [
        ProgrammingLanguage.OCaml,
        ProgrammingLanguage.Elixir,
        ProgrammingLanguage.Python,
      ],
    },
  ],
  languages: [
    {
      name: 'Bahasa',
      proficiency: 'Native',
      info: '',
    },
    {
      name: 'English',
      proficiency: 'C1',
      info: 'TOEFL: 627, IELTS: 7.0',
    },
    {
      name: 'German',
      proficiency: 'B1',
      info: 'Goethe ZD: 228/300',
    },
  ],
  tools: [...createStringsOfEnums(Library), ...createStringsOfEnums(Tool)],
};

export {Skills, skills};
