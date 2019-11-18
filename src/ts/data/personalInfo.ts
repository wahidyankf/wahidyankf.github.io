interface PersonalInfo {
  name: string;
  shortDesc: string;
  email: string;
  summary: string;
  location: string;
  socialHub: {website: string; github: string; linkedin: string};
}

const personalInfo = {
  name: 'Wahidyan Kresna Fridayoka',
  shortDesc: 'Front-End / Software Engineer',
  email: 'wahidyankf@gmail.com',
  summary: `Software engineer with diverse front-end web development's portfolio. Love to code in statically-typed functional programming languages. Comfortable working with JavaScript and ReactJS' stacks but is eager to learn another programming language and tools. Polyglot that speaks 3+ languages and has more than 3 years experience of living overseas.`,
  location: '<a href="https://goo.gl/maps/dpbvmixZWTs">Jakarta, Indonesia</a>',
  socialHub: {
    website: 'https://wahidyankf.github.io/',
    github: 'https://github.com/wahidyankf',
    linkedin: 'https://www.linkedin.com/in/wahidyan-kresna-fridayoka',
  },
};

export {personalInfo, PersonalInfo};
