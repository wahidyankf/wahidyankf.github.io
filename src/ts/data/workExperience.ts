interface IWorkExperienceItem {
  jobTitle: string;
  institution: string;
  institutionLink: string;
  location: string;
  highlights: string[];
  start: string;
  end: string;
}

const workExperience: IWorkExperienceItem[] = [
  {
    jobTitle: 'Front End Engineer',
    institution: 'Ruang Guru',
    institutionLink: 'https://ruangguru.com/',
    location: 'Jakarta, Indonesia',
    highlights: [
      `Became one of the pioneering engineers in Ruang Belajar's Desktop app development using ReasonML, ReasonReact, and Electron. Heavily involved in its core and primitive UI components development (created more than 50% of it) and routing design, while also helping other engineers (mobile engineers) to pick up React and web technology in general. This project is a first joint project between Ruang Guru's Front-end and Mobile engineers. Opening up a new possibility of higher app development's velocity in Ruang Guru.`,
      `Involved in company new front-end engineer hiring process by assessing their computational thinking and React.js problem-solving skills through coding challenges. Resulting in a faster front-end engineering division's hiring process while making sure that only the high-quality one passed.`,
      `Developed and set up various internal front-end tooling, including command-line application to bootstrap new web project, various UI kits, rich text-editor, and JavaScript utility functions. Resulting in a higher code sharing and development speed for Ruang Guru's engineering team.`,
    ],
    start: '01/2018',
    end: 'Now',
  },
  {
    jobTitle: 'Junior Front End Engineer',
    institution: 'Ruang Guru',
    institutionLink: 'https://ruangguru.com/',
    location: 'Jakarta, Indonesia',
    highlights: [
      `Led a team of front-end developers to develop and optimize Ruang Uji's react stacks and deployment. The result was more than 53.86% smaller initial download size (all assets included), 9.52% lower request number, 46.72% faster finish time, 137.10% faster DOMContentLoad time, and 62.49% faster load time than the original angular.js' stacks (2G connection, 280kbps/256kbps 800ms RTT), while also made subsequent pages load substantially faster by implementing on point code optimization, aggressive code splitting, and various images lazy loading.`,
      `Refactored  <a href="https://ruangguru.com">Ruang Guru</a>'s assets and code base using imgIX, AWS S3 bucket, and fastly CDN. The result was load time speed improvement of more than 300% (from more than 12 seconds average to under 3 seconds),  and the improvement of its  <a href="https://www.webpagetest.org/">Web Page Test</a> average score of B to all A's without sacrificing its assets' apparent quality.`,
      `Rewrote and migrated <a href="https://uji.ruangguru.com">Ruang Uji</a> from angular.js' stacks to react.js' stacks from scratch. Thus solved the old "exam event" problem (e.g. no automatic submission in the background, submission error handler, continue to last exam on reload, etc.) at <a href="https://uji.ruangguru.com">Ruang Uji</a> while also modernized its tech stacks and make it less error prone.`,
    ],
    start: '10/2017',
    end: '12/2017',
  },
];

export {IWorkExperienceItem, workExperience};
