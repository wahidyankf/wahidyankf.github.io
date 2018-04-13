const dataCV = {
  personalData: {
    name: 'Wahidyan Kresna Fridayoka',
    shortDesc: 'Front-End / Software Engineer',
    photos: 'img/profile/profilepicture.jpeg',
    email: 'wahidyankf@gmail.com',
    summary: `Software engineer with diverse front-end web development portfolio and past experience with MySQL and hardware programming. Comfortable working with React.js' stacks but also willing to learn another programming language and tools when necessary. Can also code in Python. Polyglot that speaks 3+ languages and has more than 3 years experience of living overseas. Has successfully organized nationwide entrepreneurship competition.`,
    address: 'Jakarta, Indonesia',
    socialHub: {
      website: 'https://wahidyankf.github.io/',
      github: 'https://github.com/wahidyankf',
      linkedin: 'https://www.linkedin.com/in/wahidyan-kresna-fridayoka',
      blog: 'https://wahidyankf.wordpress.com',
    },
  },
  workExperience: [
    {
      jobTitle: 'Front End Engineer',
      institution: 'Ruang Guru',
      institutionLink: 'https://ruangguru.com/',
      location: 'Jakarta, Indonesia',
      description: [
        `Became one of the pioneering engineers in Ruang Guru engineering's new initiative of React Native apps development. Resulting in more efficient engineering resources usage for Ruang Guru by expanding the usages of its front end engineers, while theoretically cut the cost of one app development down almost to 50% without losing any of native apps' development speed.`,
        `Optimized <a href="https://uji.ruangguru.com">Ruang Uji</a>'s react stacks and deployment. The result was more than 53.86% smaller initial download size (all assets included), 9.52% lower request number, 46.72% faster finish time, 137.10% faster DOMContentLoad time, and 62.49% faster load time than the original angular.js' stacks (2G connection, 280kbps/256kbps 800ms RTT), while also made subsequent pages load substantially faster by implementing on point code optimization, aggressive code splitting, and various images lazy loading.`,
      ],
      start: '01/2018',
      end: 'Now',
    },
    {
      jobTitle: 'Junior Front End Engineer',
      institution: 'Ruang Guru',
      institutionLink: 'https://ruangguru.com/',
      location: 'Jakarta, Indonesia',
      description: [
        `Refactored  <a href="https://ruangguru.com">Ruang Guru</a>'s assets and code base using imgIX, AWS S3 bucket, and fastly CDN. The result was load time speed improvement of more than 300% (from more than 12 seconds average to under 3 seconds),  and the improvement of its  <a href="https://www.webpagetest.org/">Web Page Test</a> average score of B to all A's without sacrificing its assets' apparent quality.`,
        `Rewrote and migrated <a href="https://uji.ruangguru.com">Ruang Uji</a> from angular.js' stacks to react.js' stacks from scratch. Thus solved the old "exam event" problem (e.g. no automatic submission in the background, submission error handler, continue to last exam on reload, etc.) at <a href="https://uji.ruangguru.com">Ruang Uji</a> while also modernized its tech stacks and make it less error prone.`,
        `Automated web apps' bugs tracking using sentry (Raven.js) and deployment from Gitlab to AWS S3 and production using Codeship. The result was more precise bug tracking, and much faster web app integration, deployment, and delivery.`,
      ],
      start: '10/2017',
      end: '12/2017',
    },
    {
      jobTitle: 'Internship',
      institution: 'P2 TELIMEK-LIPI',
      institutionLink: 'http://www.telimek.lipi.go.id/',
      location: 'Bandung, Indonesia',
      description: [
        "Taking part on the documentation of PLT Bayu (wind power plant) 100 KW project's supervisory control.",
      ],
      start: '01/2011',
      end: '03/2011',
    },
  ],
  skills: {
    programmingLanguage: [
      {
        level: 'Production',
        languages: ['HTML-CSS-SASS', 'JavaScript'],
      },
      {
        level: 'Famiiar',
        languages: ['Python'],
      },
      {
        level: 'Exposure',
        languages: ['Elixir'],
      },
    ],
    language: [
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
    toolsAndLibraries: [
      'React',
      'React Native',
      'Redux',
      'Rematch',
      'Redux Form',
      'Redux Saga',
      'CSS in JS',
      'Node.js',
      'RegEx',
      'jQuery',
      'AJAX',
      'Git',
      'npm/yarn',
      'gulp.js',
      'webpack',
      'Mocha',
      'Chai',
      'Moment.js',
      'vim',
      'TMUX',
      'LaTeX',
    ],
    pastExperience: [
      'Matlab',
      'C++',
      'Assembly (AT Mega 8051)',
      'SQL',
      'PHP',
      'Gnokii SMS Daemon',
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
  portfolio: [
    {
      name: 'Build an Interactive Form',
      description:
        'In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker.',
      skillSetUsed: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'RegEx'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/build-an-interactive-form',
    },
    {
      name: 'Pagination and Content Filter',
      description:
        'In this project, an HTML page and CSS files was given and I have to add a search and pagination feature using unobstrusive javascript. The resulting page is a page that display at most 10 student entries with an instant student search capabilities.',
      skillSetUsed: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/pagination-and-content-filter',
    },
    {
      name: 'Random Quote Generator',
      description:
        'In this project, I created a page that will randomly generate quotes from a data object. This page will change its displayed quote when we click the button / pres any key / 30 seconds has passed. This page will also not displayed the same quote until all of quotes has been displayed.',
      skillSetUsed: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery'],
      start: '08/2017',
      end: '08/2017',
      link: 'https://github.com/wahidyankf/random_quote_generator',
    },
    {
      name: 'Interactive Video Player',
      description:
        "In this project, I created a fully featured interactive video player using MediaElement.js. The features of this video player includes: play/pause button, current time and total duration, playing progress slider, file buffer's progress, skip backward button, playback speed chooser, captions chooser, video quality chooser, volume level slider, and go to fullscreen button.",
      skillSetUsed: ['HTML', 'CSS', 'Sass', 'JavaScript', 'MediaElement.js'],
      start: '07/2017',
      end: '07/2017',
      link: 'https://github.com/wahidyankf/interactive-video-player',
    },
    {
      name: 'Optimizing a Site for Performance',
      description:
        "An unoptimized website was given to me, and I have to optimize it by reducing its http request and body size by any means necessary. In this project, I successfully reduced the website's http requests count down to 22 requests (from 44), and also reduced its body size by more than 10 times (from 12-ish MB to < 1 MB) while still maintaining the apparent quality of its images.",
      skillSetUsed: ['HTML', 'CSS', 'Sass', 'gulp.js', 'phantomas', 'imagemin'],
      start: '07/2017',
      end: '07/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-11-optimizing-a-site-for-performance',
    },
    {
      name: 'Accessibility Refactor',
      description:
        "In this project, I refactored a website that suffers from various accessibility flaws, resulting a website that is accessible and can pass an accessibility validator(s)'s automated checks and a human's check. This project was tested using HTML Accessibility Checker, Fangs Screen Reader Emulator and Google Chrome's Accessibility Developer Tools.",
      skillSetUsed: ['HTML', 'CSS', 'Sass'],
      start: '07/2017',
      end: '07/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-08-accessibility-refactor',
    },
    {
      name: 'wahidyankf.github.io',
      description:
        'In this project, I created a portfolio website for my personal used. This website contains the complete list of my curriculum vitae.',
      skillSetUsed: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery'],
      start: '07/2017',
      end: '07/2017',
      link: 'https://wahidyankf.github.io/',
    },
    {
      name: 'SVG Site Update',
      description:
        'In this project, a functioning website was given to me, and I have to update/replace its existing non svg images with svg images, resulting more beautiful and sharper images on the website.',
      skillSetUsed: ['HTML', 'CSS', 'Sass'],
      start: '06/2017',
      end: '06/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-06-svg-site-update',
    },
    {
      name: 'Moslem Productivity Tools',
      description:
        "In this project, I created a simple website application that tracks the islamic praying time and section of the day's markers, and warns me whenever I am about to burnout (according to the scientific theory of productivity). This app allow me to always work at my optimal speed.",
      skillSetUsed: [
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
      description:
        "In this project, an interactive online gallery's design mockup was given to me, and I have to replicate it using only jQuery as a non vanilla js element. This project includes a simple lightbox (with navigation) and search/filter function.",
      skillSetUsed: ['HMTL', 'CSS', 'Sass', 'JavaScript', 'jQuery'],
      start: '04/2017',
      end: '04/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-04-interactive-photo-gallery',
    },
    {
      name: 'Online Registration Form',
      description:
        "In this project, a responsive online form's design mockup was given to me, and I have to replicate it using vanilla HTML and CSS.",
      skillSetUsed: ['HTML', 'CSS', 'Sass'],
      start: '04/2017',
      end: '04/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-03-online-registration-form',
    },
    {
      name: 'Responsive Layout',
      description:
        'In this project, a responsive web portfolio mockup was given to me, and I have to replicate it using HTML and CSS.',
      skillSetUsed: ['HTML', 'CSS', 'Sass'],
      start: '04/2017',
      end: '04/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-02-responsive-layout',
    },
    {
      name: 'Personal Profile Page',
      description:
        'In this project, I modified an existing personal website to conform to my personal data.',
      skillSetUsed: ['HTML', 'CSS'],
      start: '04/2017',
      end: '04/2017',
      link:
        'https://github.com/wahidyankf/treehouse-frontend-01-personal-profile-page',
    },
    {
      name: 'Build a Portfolio Site',
      description:
        'In this project, I created a simple responsive portfolio site using foundation for sites.',
      skillSetUsed: ['HTML', 'CSS', 'Foundation for Sites'],
      start: '03/2017',
      end: '03/2017',
      link:
        'https://github.com/wahidyankf/udacity-fullstack-build-a-portfolio-site',
    },
  ],
  courses: {
    engineeringCourse: [
      {
        name: "Webpack 2: The Complete Developer's Guide",
        institution: 'Udemy',
        location:
          'https://www.udemy.com/webpack-2-the-complete-developers-guide/',
        type: 'online',
        description:
          'This course taught about webpack build tool. The topics included in this course are the fundamentals of webpack, project assets handling, webpack on real project, webpack dev server, webpack-based deployment for static sites, and webpack-based deployment for dynamic sites.',
        start: '08/2017',
        end: '08/2017',
      },
      {
        name: "ES6 JavaScript: The Complete Developer's Guide",
        institution: 'Udemy',
        location: 'https://www.udemy.com/javascript-es6-tutorial/',
        type: 'online',
        description:
          'This course taught about the new features of Ecma Script 6. The topics included in this course are array helpers (forEach, map, filter, find, every, some and reduce), const/let, template strings, arrow functions, enhanced object literals, default function arguments, rest and spread operator, destructuring, classes, generators, promises, and fetch.',
        start: '08/2017',
        end: '08/2017',
      },
      {
        name: 'Front End Web Development Track',
        institution: 'Team Tree House',
        location: 'https://teamtreehouse.com/tracks/front-end-web-development',
        type: 'online',
        description:
          'This compilation of courses taught the combination of HTML, CSS and JavaScript on which all modern websites are built. This track also taught us about responsive web design, intro to bootstrap 4, website optimization, git, accessibility, and foundation of console/command line.',
        start: '05/2017',
        end: '05/2017',
      },
      {
        name: 'Beginner JavaScript Track',
        institution: 'Team Tree House',
        location: 'https://teamtreehouse.com/tracks/beginner-javascript',
        type: 'online',
        description:
          'This compilation of courses taught the foundation of JavaScript, including jQuery and the ins-and-outs of adding interactivity in the browser.',
        start: '04/2017',
        end: '04/2017',
      },
      {
        name: 'Web Design Track',
        institution: 'Team Tree House',
        location: 'https://teamtreehouse.com/tracks/web-design',
        type: 'online',
        description:
          'This compilation of courses taught about how to design and build websites by learning the basic principles of design. This track also taught HTML, CSS and Sass.',
        start: '03/2017',
        end: '03/2017',
      },
      {
        name: 'Importing Data in Python (Part 2)',
        institution: 'Data Camp',
        location:
          'https://www.datacamp.com/courses/importing-data-in-python-part-2',
        type: 'online',
        description:
          'This course taught about ways to import data in Python. The type of data that was learned to be imported in this course are data from the web and APIs.',
        start: '03/2017',
        end: '03/2017',
      },
      {
        name: 'Importing Data in Python (Part 1)',
        institution: 'Data Camp',
        location:
          'https://www.datacamp.com/courses/importing-data-in-python-part-1',
        type: 'online',
        description:
          'This course taught about ways to import data in Python. The type of data that was learned to be imported in this course are flat files (e.g. .txts and .csvs), files native to other software (e.g. excel, Stata, SAS, Matlab), and files from relational databases such as SQLite & PostgreSQL.',
        start: '03/2017',
        end: '03/2017',
      },
      {
        name: 'Python for Data Science Toolbox (Part 2)',
        institution: 'Data Camp',
        location:
          'https://www.datacamp.com/courses/python-data-science-toolbox-part-2',
        type: 'online',
        description:
          'This course taught about iterators in Python, including how to use list comprehensions in real life scenarios.',
        start: '03/2017',
        end: '03/2017',
      },
      {
        name: 'Python for Data Science Toolbox (Part 1)',
        institution: 'Data Camp',
        location:
          'https://www.datacamp.com/courses/python-data-science-toolbox-part-1',
        type: 'online',
        description:
          'This course taught about how to write functions in Python, including functions with multiple parameters, functions with multiple return value, and lambda functions. This course also taught about ways to handle errors in Python.',
        start: '03/2017',
        end: '03/2017',
      },
      {
        name: 'Intermediate Python for Data Science',
        institution: 'Data Camp',
        location:
          'https://www.datacamp.com/courses/intermediate-python-for-data-science',
        type: 'online',
        description:
          "This course taught about ways to visualize real data using matplotlib's functions and different kinds of data structures such as dictionary and the Pandas dataframe.",
        start: '03/2017',
        end: '03/2017',
      },
      {
        name: 'Intro to Python for Data Science',
        institution: 'Data Camp',
        location:
          'https://www.datacamp.com/courses/intro-to-python-for-data-science',
        type: 'online',
        description:
          'This introduction to Python course focuses on Python specifically for data science. In this course, student will learn about ways to store and manipulate data as well as data science tools to start the analyses.',
        start: '03/2017',
        end: '03/2017',
      },
      {
        name: 'Topics in System Engineering - Test and Fault Tolerance',
        institution: 'University of Paderborn',
        location: 'Paderborn, Germany',
        type: 'university',
        description:
          'Grade: 2.3 (B-). In this course a series of student seminar were given on the subject of test and fault tolerance of an IC system. In this course, I wrote and present a paper about artificial neural network.',
        start: '04/2016',
        end: '10/2016',
      },
      {
        name: 'Processing of Semiconductor',
        institution: 'University of Paderborn',
        location: 'Paderborn, Germany',
        type: 'university',
        description:
          'Grade: 3.3 (C-). This lecture describes the technical steps to build integrated circuits on silicon wafers. Physical models of the process steps were given and the technical equipment were explained.',
        start: '04/2016',
        end: '10/2016',
      },
      {
        name: 'Project - Energieversorgungsstrukturen der Zukunft',
        institution: 'University of Paderborn',
        location: 'Paderborn, Germany',
        type: 'university',
        description:
          'Grade: 1.0 (A+), best in class. This course gives an introduction to the energy structure of the future. In this course, I wrote a report about the impact of the usage of electric vehicles on the future and current energy structure.',
        start: '10/2014',
        end: '04/2015',
      },
      {
        name: 'Project - Optical Communications and High-Frequency Engineering',
        institution: 'University of Paderborn',
        location: 'Paderborn, Germany',
        type: 'university',
        description:
          'Grade: 2.0 (B). A series of laboratory experiments and simulation of optical communications and high frequency engineering were held in this course.',
        start: '10/2014',
        end: '04/2015',
      },
      {
        name: 'Introduction to Algorithm',
        institution: 'University of Paderborn',
        location: 'Paderborn, Germany',
        type: 'university',
        description:
          'Grade: 1.7 (B+), top 3 in class. This course gives an introduction into the design and analysis of algorithms (sorting algorithms, basic data structures, graphs and graph algorithms, design and analysis of algorithms (problem complexity, run time and storage complexity of algorithms, exact vs heuristic solutions, probabilistic approaches)).',
        start: '10/2014',
        end: '04/2015',
      },
    ],
    nonEngineeringCourse: [
      {
        name: 'Deutschkurs für Internationale Programmstudierende',
        institution: 'University of Paderborn',
        location: 'Paderborn, Germany',
        type: 'university',
        description:
          'Grade: 2.3 (B-). German language course for the university students, equal to european language level reference of B2 (upper intermediate).',
        start: '04/2015',
        end: '10/2015',
      },
      {
        name: 'Management of Technical Project',
        institution: 'University of Paderborn',
        location: 'Paderborn, Germany',
        type: 'university',
        description:
          'Grade: 1.7 (B+). In this course, students were taught about soft skills on how to manage technical projects (e.g. requirement analysis, specification, scheduling, planning & designing, monitoring & controlling, communication in teams, communication with customers).',
        start: '04/2014',
        end: '10/2014',
      },
      {
        name: 'DSH Vorbereitung Klasse',
        institution: 'RWTH Aachen',
        location: 'Aachen, Germany',
        type: 'institution',
        description:
          'German language preparation class for university entrance exam.',
        start: '03/2013',
        end: '06/2013',
      },
      {
        name: 'DSH Vorbereitung Klasse',
        institution: 'VHS Aachen',
        location: 'Aachen, Germany',
        type: 'institution',
        description:
          'German language preparation class for university entrance exam.',
        start: '10/2012',
        end: '01/2013',
      },
      {
        name: 'Superintensiv Deutsch B2',
        institution: 'Goethe Institut',
        location: 'Jakarta, Indonesia',
        type: 'institution',
        description: 'German language class for level B2 (upper intermediate).',
        start: '01/2012',
        end: '06/2012',
      },
      {
        name: 'Superintensiv Deutsch A1-B1',
        institution: 'Goethe Institut',
        location: 'Bandung, Indonesia',
        type: 'institution',
        description:
          'German languange class for level A1-B1 (beginner to lower intermediate).',
        start: '07/2011',
        end: '12/2011',
      },
    ],
  },
  additionalActivities: [
    {
      jobtitle: 'Freelance Writer/Moderator',
      institution: 'media.kelasnusantara.com',
      location: 'online',
      description:
        "Writing articles and moderating a blog about education and learning in general. Best month's view average: 575 views/day.",
      start: '12/2013',
      end: '12/2015',
    },
    {
      jobtitle: 'Freelance Writer/Moderator',
      institution: 'jermandes.kelasnusantara.com',
      location: 'online',
      description:
        "Writing articles and moderating a blog about how to prepare for studying in Germany. During that time, this site was one of the pioneers in its niche and always shown on google search's first page. Best month's view average: 609 views/day.",
      start: '12/2011',
      end: '12/2013',
    },
  ],
  organizationalExperience: [
    {
      jobtitle: 'Head of Logistics Division',
      institution: 'Innovative Entrepreneurship Challenge 3 (IEC 3)',
      location: 'Bandung, Indonesia',
      description:
        "I successfully secured the logistic matters of Institut Teknologi Bandung's annual national scale entrepreneurship competition, resulting a smooth run of the competition.",
      start: '2009',
      end: '2009',
    },
    {
      jobtitle: 'Head of Public Relation Division',
      institution: "Palapa 1, ITB's Electrical Engineering's Student Org.",
      location: 'Bandung, Indonesia',
      description:
        "An Insititut Teknologi Bandung's student organization's charity project. I successfully managed the relationship between the student organization and the targeting area's native. Resulting a smooth process of pico hydro power plant installation in a relatively remote area in Garut (west java, Indonesia).",
      start: '2008',
      end: '2008',
    },
  ],
};
