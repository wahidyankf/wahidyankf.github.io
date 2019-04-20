interface Project {
  name: string;
  highlights: string[];
  stacks: Array<string>;
  start: string;
  end: string;
  link: string;
}

interface FormalEducation {
  major: string;
  type: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  info: string;
}

interface Skills {
  programmingLanguages: Array<{level: string; languages: Array<string>}>;
  languages: Array<{name: string; proficiency: string; info: string}>;
  tools: Array<string>;
}

interface WorkExperienceItem {
  jobTitle: string;
  institution: string;
  institutionLink: string;
  location: string;
  highlights: string[];
  start: string;
  end: string;
}

interface PersonalInfo {
  name: string;
  shortDesc: string;
  email: string;
  summary: string;
  location: string;
  socialHub: {website: string; github: string; linkedin: string};
}

interface CVData {
  personalInfo: PersonalInfo;
  workExperience: Array<WorkExperienceItem>;
  skills: Skills;
  formalEducation: Array<FormalEducation>;
  professionalProjects: Array<Project>;
  personalProjects: Array<Project>;
}

const cv: CVData = {
  personalInfo: {
    name: 'Wahidyan Kresna Fridayoka',
    shortDesc: 'Front-End / Software Engineer',
    email: 'wahidyankf@gmail.com',
    summary: `Software engineer with diverse front-end web development's portfolio. Love to code in statically-typed functional programming languages. Comfortable working with JavaScript and ReactJS' stacks but is eager to learn another programming language and tools. Polyglot that speaks 3+ languages and has more than 3 years experience of living overseas.`,
    location:
      '<a href="https://goo.gl/maps/dpbvmixZWTs">Jakarta, Indonesia</a>',
    socialHub: {
      website: 'https://wahidyankf.github.io/',
      github: 'https://github.com/wahidyankf',
      linkedin: 'https://www.linkedin.com/in/wahidyan-kresna-fridayoka',
    },
  },

  workExperience: [
    {
      jobTitle: 'Front End Engineer',
      institution: 'Ruang Guru',
      institutionLink: 'https://ruangguru.com/',
      location: 'Jakarta, Indonesia',
      highlights: [
        `Became one of the pioneering engineers in Ruang Belajar's Desktop app development using ReasonML, ReasonReact, and Electron. Heavily involved in its core and primitive UI components development (created more than 50% of it) and routing design, while also helping other engineers (mobile engineers) to pick up React and web technology in general. This project is a first joint project between Ruang Guru's Front-end and Mobile engineers. Opening up a new possibility of higher app development's velocity in Ruang Guru.`,
        `Involved in company new front-end engineer hiring process by assessing their computational thinking and React.js problem-solving skills through coding challenges. Resulting in a faster front-end engineering division's hiring process while making sure that only the high-quality one passed.`,
        `Developed Ruang Kerja CMS' question and question-set modules using React and Draft.js. Resulting in well functioning rich text editor implementation for question and question-set generation task in Ruang Kerja apps.`,
        `Developed and set up various internal front-end tooling, including command-line application to bootstrap new web project, various UI kits, rich text-editor, and JavaScript utility functions. Resulting in a higher code sharing and development speed for Ruang Guru's engineering team.`,
        `Led a team of front-end developers to create Ruang Kerja's company dashboard using React JS stacks, flow-typed, and data visualization tools. Also did an end-to-end testing for it using cypress. Resulting in a finely crafted and runtime-error free dashboard web app.`,
        `Became one of the pioneering engineers in Ruang Kerja's React Native app development. Resulting in a more efficient engineering resources usage for Ruang Guru by expanding the usages of its front end engineers, while theoretically cut the cost of apps development down almost to 50% without losing any of native apps' development speed.`,
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
        `Automated web apps' bugs tracking using sentry (Raven.js) and deployment from Gitlab to AWS S3 and production using Codeship. The result was more precise bug tracking, and much faster web app integration, deployment, and delivery.`,
      ],
      start: '10/2017',
      end: '12/2017',
    },
  ],

  skills: {
    programmingLanguages: [
      {
        level: 'Production',
        languages: ['HTML-CSS', 'JavaScript', 'ReasonML'],
      },
      {
        level: 'Familiar',
        languages: ['Node.js'],
      },
      {
        level: 'Exposure',
        languages: ['Python', 'OCaml'],
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
    tools: [
      'React',
      'ReasonReact',
      'React Native',
      'Electron',
      'Redux',
      'Rematch',
      'Redux-Saga',
      'Redux Form',
      'flow-typed',
      'TypeScript',
      'Babel',
      'Jest',
      'CSS in JS',
      'Sass',
      'jQuery',
      'Git',
      'npm/yarn',
      'gulp.js',
      'webpack',
      'vim',
      'TMUX',
      'LaTeX',
    ],
  },

  formalEducation: [
    {
      major: 'Electrical Engineering',
      type: 'Bachelor',
      institution: 'Institut Teknologi Bandung',
      location: 'Indonesia',
      start: '08/2005',
      end: '06/2011',
      info:
        'GPA: 3.0/4.0. Bachelor thesis: Design and implementation of SMS One Time Password (SMS-OTP) Based Web Authentication System. Supervisor: Ir. Budi Rahardjo M.Sc., Ph.D.',
    },
  ],

  professionalProjects: [
    {
      name: 'Ruang Belanja - Dashboard (Internal)',
      highlights: [
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
    {
      name: 'Ruang Guru Internal - Video Review',
      highlights: [
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
    {
      name: 'Ruang Belajar - Desktop App',
      highlights: [
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
    {
      name: 'Ruang Kerja - Content Managemern System (CMS)',
      highlights: [
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
    {
      name: 'Ruang Kerja - User Progress Dashboard',
      highlights: [
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
    {
      name: 'Ruang Kerja - Mobile App',
      highlights: [
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
    {
      name: 'Ruang Uji - Revamp',
      highlights: [
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
    {
      name: 'Ruang Guru - Landing Page',
      highlights: [
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
  ],

  personalProjects: [
    {
      name: 'Build an Interactive Form',
      highlights: [
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
    {
      name: 'Pagination and Content Filter',
      highlights: [
        'In this project, an HTML page and CSS files was given and I have to add a search and pagination feature using unobstrusive javascript. The resulting page is a page that display at most 10 student entries with an instant student search capabilities.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/pagination-and-content-filter',
    },
    {
      name: 'Random Quote Generator',
      highlights: [
        'In this project, I created a page that will randomly generate quotes from a data object. This page will change its displayed quote when we click the button / pres any key / 30 seconds has passed. This page will also not displayed the same quote until all of quotes has been displayed.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/random_quote_generator',
    },
    {
      name: 'Interactive Video Player',
      highlights: [
        "In this project, I created a fully featured interactive video player using MediaElement.js. The features of this video player includes: play/pause button, current time and total duration, playing progress slider, file buffer's progress, skip backward button, playback speed chooser, captions chooser, video quality chooser, volume level slider, and go to fullscreen button.",
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'MediaElement.js'],
      start: '07/2017',
      end: '07/2017',
      link: 'https://github.com/wahidyankf/interactive-video-player',
    },
    {
      name: 'Optimizing a Site for Performance',
      highlights: [
        "An unoptimized website was given to me, and I have to optimize it by reducing its http request and body size by any means necessary. In this project, I successfully reduced the website's http requests count down to 22 requests (from 44), and also reduced its body size by more than 10 times (from 12-ish MB to < 1 MB) while still maintaining the apparent quality of its images.",
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'gulp.js', 'phantomas', 'imagemin'],
      start: '07/2017',
      end: '07/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-11-optimizing-a-site-for-performance',
    },
    {
      name: 'Accessibility Refactor',
      highlights: [
        "In this project, I refactored a website that suffers from various accessibility flaws, resulting a website that is accessible and can pass an accessibility validator(s)'s automated checks and a human's check. This project was tested using HTML Accessibility Checker, Fangs Screen Reader Emulator and Google Chrome's Accessibility Developer Tools.",
      ],
      stacks: ['HTML', 'CSS', 'Sass'],
      start: '07/2017',
      end: '07/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-08-accessibility-refactor',
    },
    {
      name: 'wahidyankf.github.io',
      highlights: [
        'In this project, I created a portfolio website for my personal used. This website contains the complete list of my curriculum vitae.',
      ],
      stacks: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery'],
      start: '07/2017',
      end: '07/2017',
      link: 'https://wahidyankf.github.io/',
    },
    {
      name: 'SVG Site Update',
      highlights: [
        'In this project, a functioning website was given to me, and I have to update/replace its existing non svg images with svg images, resulting more beautiful and sharper images on the website.',
      ],
      stacks: ['HTML', 'CSS', 'Sass'],
      start: '06/2017',
      end: '06/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-06-svg-site-update',
    },
    {
      name: 'Moslem Productivity Tools',
      highlights: [
        "In this project, I created a simple website application that tracks the islamic praying time and section of the day's markers, and warns me whenever I am about to burnout (according to the scientific theory of productivity). This app allow me to always work at my optimal speed.",
      ],
      stacks: [
        'HTML',
        'CSS',
        'Sass',
        'JavaScript',
        'jQuery',
        'Foundation for Sites',
        'moment.js',
        'praytime.js',
      ],
      start: '04/2017',
      end: '04/2017',
      link: 'https://github.com/wahidyankf/moslem-productivity-tools',
    },
    {
      name: 'Interactive Photo Gallery',
      highlights: [
        "In this project, an interactive online gallery's design mockup was given to me, and I have to replicate it using only jQuery as a non vanilla js element. This project includes a simple lightbox (with navigation) and search/filter function.",
      ],
      stacks: ['HMTL', 'CSS', 'Sass', 'JavaScript', 'jQuery'],
      start: '04/2017',
      end: '04/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-04-interactive-photo-gallery',
    },
    {
      name: 'Online Registration Form',
      highlights: [
        "In this project, a responsive online form's design mockup was given to me, and I have to replicate it using vanilla HTML and CSS.",
      ],
      stacks: ['HTML', 'CSS', 'Sass'],
      start: '04/2017',
      end: '04/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-03-online-registration-form',
    },
    {
      name: 'Responsive Layout',
      highlights: [
        'In this project, a responsive web portfolio mockup was given to me, and I have to replicate it using HTML and CSS.',
      ],
      stacks: ['HTML', 'CSS', 'Sass'],
      start: '04/2017',
      end: '04/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-02-responsive-layout',
    },
    {
      name: 'Personal Profile Page',
      highlights: [
        'In this project, I modified an existing personal website to conform to my personal data.',
      ],
      stacks: ['HTML', 'CSS'],
      start: '04/2017',
      end: '04/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-01-personal-profile-page',
    },
    {
      name: 'Build a Portfolio Site',
      highlights: [
        'In this project, I created a simple responsive portfolio site using foundation for sites.',
      ],
      stacks: ['HTML', 'CSS', 'Foundation for Sites'],
      start: '03/2017',
      end: '03/2017',
      link:
        'https://github.com/wahidyankf/udacity-fullstack-build-a-portfolio-site',
    },
  ],
};

export default cv;
