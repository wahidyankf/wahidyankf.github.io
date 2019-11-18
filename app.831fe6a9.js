parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rhzx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.personalInfo=void 0;var a={name:"Wahidyan Kresna Fridayoka",shortDesc:"Front-End / Software Engineer",email:"wahidyankf@gmail.com",summary:"Software engineer with diverse front-end web development's portfolio. Love to code in statically-typed functional programming languages. Comfortable working with JavaScript and ReactJS' stacks but is eager to learn another programming language and tools. Polyglot that speaks 3+ languages and has more than 3 years experience of living overseas.",location:'<a href="https://goo.gl/maps/dpbvmixZWTs">Jakarta, Indonesia</a>',socialHub:{website:"https://wahidyankf.github.io/",github:"https://github.com/wahidyankf",linkedin:"https://www.linkedin.com/in/wahidyan-kresna-fridayoka"}};exports.personalInfo=a;
},{}],"w6O9":[function(require,module,exports) {
"use strict";var e,t,a,o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ProjectType=exports.Tool=exports.Library=exports.ProgrammingLanguage=void 0,exports.ProgrammingLanguage=e,function(e){e.CSS="CSS",e.HTML="HTML",e.JS="JavaScript",e.NodeJS="Node.js",e.OCaml="OCaml",e.Python="Python",e.ReasonML="ReasonML",e.Elixir="Elixir"}(e||(exports.ProgrammingLanguage=e={})),exports.Library=t,function(e){e.BsCSS="bs-css",e.BsFetch="bs-fetch",e.BsJSON="bs-json",e.BabelJS="Babel",e.CSSInJS="CSS in JS",e.DraftJS="DraftJS",e.Electron="Electron",e.FoundationForSites="Foundation for Sites",e.FlowTyped="flow-typed",e.GulpJS="Gulp",e.Imagemin="imagemin",e.Jest="Jest",e.JQuery="jQuery",e.MediaElementJS="MediaElement.js",e.MomentJS="moment.js",e.NPM="npm",e.ParcelJS="Parcel",e.Phantomas="phantomas",e.PraytimeJS="praytime.js",e.ReactJS="React.js",e.ReactNative="React Native",e.ReasonReact="ReasonReact",e.ReactChartJS2="ReactChart.js 2",e.Reformality="re-formality",e.Redux="Redux",e.ReduxSaga="Redux Saga",e.Rematch="Rematch",e.Sass="Sass",e.StyledComponents="styled-components",e.TypeScript="TypeScript",e.Webpack="Webpack",e.Yarn="Yarn"}(t||(exports.Library=t={})),exports.Tool=a,function(e){e.Git="Git",e.TMUX="TMUX",e.LaTeX="LaTeX",e.Vim="vim"}(a||(exports.Tool=a={})),exports.ProjectType=o,function(e){e.Web="Web",e.Mobile="Mobile",e.Infrastructure="Infrastructure",e.Desktop="Desktop"}(o||(exports.ProjectType=o={}));
},{}],"3Osa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.professionalProjects=exports.personalProjects=void 0;var a=require("../commons/constants/enums"),e=[{name:"SkillAcademy",type:a.ProjectType.Web,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.ProgrammingLanguage.ReasonML,a.Library.ReasonReact,a.Library.Webpack,a.Library.Reformality,a.Library.BsCSS,a.Library.BsFetch,a.Library.BsJSON],start:"08/2019",end:"Now",link:"https://skillacademy.com/"},{name:"Ruang Belajar Forum - Admin Dashboard",type:a.ProjectType.Web,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.ProgrammingLanguage.ReasonML,a.Library.ReasonReact,a.Library.Webpack,a.Library.Reformality,a.Library.BsCSS,a.Library.BsFetch,a.Library.BsJSON],start:"07/2019",end:"07/2019",link:""},{name:"Ruang Belanja - Admin Dashboard",type:a.ProjectType.Web,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.ProgrammingLanguage.ReasonML,a.Library.ReasonReact,a.Library.Webpack,a.Library.Reformality,a.Library.BsCSS,a.Library.BsFetch,a.Library.BsJSON],start:"04/2019",end:"07/2019",link:""},{name:"Ruang Guru - Video Review Dashboard",type:a.ProjectType.Web,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.ProgrammingLanguage.ReasonML,a.Library.ReasonReact,a.Library.Webpack,a.Library.Reformality,a.Library.BsCSS,a.Library.BsFetch,a.Library.BsJSON],start:"03/2019",end:"04/2019",link:""},{name:"Ruang Guru FrontEnd - ReasonML Monorepo Integration",type:a.ProjectType.Infrastructure,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.ProgrammingLanguage.ReasonML,a.Library.ReasonReact,a.Library.BsCSS],start:"02/2019",end:"02/2019",link:""},{name:"Ruang Belajar - App",type:a.ProjectType.Desktop,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.ProgrammingLanguage.ReasonML,a.Library.ReasonReact,a.Library.Webpack,a.Library.Electron,a.Library.Reformality,a.Library.BsCSS,a.Library.BsFetch,a.Library.BsJSON],start:"12/2018",end:"02/2019",link:""},{name:"Ruang Kerja - Content Management System",type:a.ProjectType.Web,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.FlowTyped,a.Library.ReactJS,a.Library.Redux,a.Library.Rematch,a.Library.DraftJS,a.Library.StyledComponents,a.Library.Webpack],start:"09/2018",end:"11/2018",link:""},{name:"Ruang Guru FrontEnd - Create Web Project CLI",type:a.ProjectType.Infrastructure,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.FlowTyped,a.Library.ReactJS,a.Library.Rematch,a.Library.StyledComponents],start:"08/2018",end:"08/2018",link:""},{name:"Ruang Kerja - Company Dashboard",type:a.ProjectType.Web,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.FlowTyped,a.Library.ReactJS,a.Library.Redux,a.Library.Rematch,a.Library.StyledComponents,a.Library.ReactChartJS2,a.Library.Webpack],start:"05/2018",end:"07/2018",link:""},{name:"Ruang Kerja - App",type:a.ProjectType.Mobile,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.FlowTyped,a.Library.ReactNative,a.Library.Redux,a.Library.Rematch,a.Library.Webpack],start:"03/2018",end:"04/2018",link:""},{name:"Ruang Uji - Revamp",type:a.ProjectType.Web,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.ReactJS,a.Library.Redux,a.Library.ReduxSaga,a.Library.StyledComponents,a.Library.Webpack],start:"11/2017",end:"02/2018",link:""},{name:"Ruang Guru Web - Landing Page",type:a.ProjectType.Web,context:null,highlights:[],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.Library.ReactJS,a.Library.Sass],start:"10/2017",end:"10/2017",link:""}];exports.professionalProjects=e;var r=[{name:"Build an Interactive Form",type:a.ProjectType.Web,context:null,highlights:["In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.Sass,a.Library.JQuery],start:"08/2017",end:"08/2017",link:"https://github.com/wahidyankf/build-an-interactive-form"},{name:"Pagination and Content Filter",type:a.ProjectType.Web,context:null,highlights:["In this project, an HTML page and CSS files was given and I have to add a search and pagination feature using unobstrusive javascript. The resulting page is a page that display at most 10 student entries with an instant student search capabilities."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.Sass,a.Library.JQuery],start:"08/2017",end:"08/2017",link:"https://github.com/wahidyankf/pagination-and-content-filter"},{name:"Random Quote Generator",type:a.ProjectType.Web,context:null,highlights:["In this project, I created a page that will randomly generate quotes from a data object. This page will change its displayed quote when we click the button / pres any key / 30 seconds has passed. This page will also not displayed the same quote until all of quotes has been displayed."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.Sass,a.Library.JQuery],start:"08/2017",end:"08/2017",link:"https://github.com/wahidyankf/random_quote_generator"},{name:"Interactive Video Player",type:a.ProjectType.Web,context:null,highlights:["In this project, I created a fully featured interactive video player using MediaElement.js. The features of this video player includes: play/pause button, current time and total duration, playing progress slider, file buffer's progress, skip backward button, playback speed chooser, captions chooser, video quality chooser, volume level slider, and go to fullscreen button."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.Sass,a.Library.MediaElementJS],start:"07/2017",end:"07/2017",link:"https://github.com/wahidyankf/interactive-video-player"},{name:"Optimizing a Site for Performance",type:a.ProjectType.Web,context:null,highlights:["An unoptimized website was given to me, and I have to optimize it by reducing its http request and body size by any means necessary. In this project, I successfully reduced the website's http requests count down to 22 requests (from 44), and also reduced its body size by more than 10 times (from 12-ish MB to < 1 MB) while still maintaining the apparent quality of its images."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.Library.Sass,a.Library.GulpJS,a.Library.Phantomas,a.Library.Imagemin],start:"07/2017",end:"07/2017",link:"https://github.com/wahidyankf/treehouse-frontend-11-optimizing-a-site-for-performance"},{name:"Accessibility Refactor",type:a.ProjectType.Web,context:null,highlights:["In this project, I refactored a website that suffers from various accessibility flaws, resulting a website that is accessible and can pass an accessibility validator(s)'s automated checks and a human's check. This project was tested using HTML Accessibility Checker, Fangs Screen Reader Emulator and Google Chrome's Accessibility Developer Tools."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.Library.Sass],start:"07/2017",end:"07/2017",link:"https://github.com/wahidyankf/treehouse-frontend-08-accessibility-refactor"},{name:"wahidyankf.github.io",type:a.ProjectType.Web,context:null,highlights:["In this project, I created a portfolio website for my personal used. This website contains the complete list of my curriculum vitae."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.Sass],start:"07/2017",end:"07/2017",link:"https://wahidyankf.github.io/"},{name:"SVG Site Update",type:a.ProjectType.Web,context:null,highlights:["In this project, a functioning website was given to me, and I have to update/replace its existing non svg images with svg images, resulting more beautiful and sharper images on the website."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.Library.Sass],start:"06/2017",end:"06/2017",link:"https://github.com/wahidyankf/treehouse-frontend-06-svg-site-update"},{name:"Moslem Productivity Tools",type:a.ProjectType.Web,context:null,highlights:["In this project, I created a simple website application that tracks the islamic praying time and section of the day's markers, and warns me whenever I am about to burnout (according to the scientific theory of productivity). This app allow me to always work at my optimal speed."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.Sass,a.Library.JQuery,a.Library.FoundationForSites,a.Library.MomentJS,a.Library.PraytimeJS],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/moslem-productivity-tools"},{name:"Interactive Photo Gallery",type:a.ProjectType.Web,context:null,highlights:["In this project, an interactive online gallery's design mockup was given to me, and I have to replicate it using only jQuery as a non vanilla js element. This project includes a simple lightbox (with navigation) and search/filter function."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.Library.Sass,a.Library.JQuery],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/treehouse-frontend-04-interactive-photo-gallery"},{name:"Online Registration Form",type:a.ProjectType.Web,context:null,highlights:["In this project, a responsive online form's design mockup was given to me, and I have to replicate it using vanilla HTML and CSS."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.Library.Sass],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/treehouse-frontend-03-online-registration-form"},{name:"Responsive Layout",type:a.ProjectType.Web,context:null,highlights:["In this project, a responsive web portfolio mockup was given to me, and I have to replicate it using HTML and CSS."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.Library.Sass],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/treehouse-frontend-02-responsive-layout"},{name:"Personal Profile Page",type:a.ProjectType.Web,context:null,highlights:["In this project, I modified an existing personal website to conform to my personal data."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/treehouse-frontend-01-personal-profile-page"},{name:"Build a Portfolio Site",type:a.ProjectType.Web,context:null,highlights:["In this project, I created a simple responsive portfolio site using foundation for sites."],stacks:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.Library.FoundationForSites],start:"03/2017",end:"03/2017",link:"https://github.com/wahidyankf/udacity-fullstack-build-a-portfolio-site"}];exports.personalProjects=r;
},{"../commons/constants/enums":"w6O9"}],"Xfyq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.formalEducation=void 0;var e=[{major:"Electrical Engineering",type:"Bachelor",institution:"Institut Teknologi Bandung",location:"Indonesia",start:"08/2005",end:"06/2011",info:"GPA: 3.0/4.0. Bachelor thesis: Design and implementation of SMS One Time Password (SMS-OTP) Based Web Authentication System. Supervisor: Ir. Budi Rahardjo M.Sc., Ph.D."}];exports.formalEducation=e;
},{}],"GcMk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.workExperience=void 0;var e=[{jobTitle:"Senior Front End Engineer",institution:"Ruang Guru",institutionLink:"https://ruangguru.com/",highlights:["Developed majority parts of Skillacademy's Journey (using ReasonML) and CMS (using plain react.js) modules. Made sure that this critical project can be launched in a timely manner (8 weeks) while making it run-time error-free."],start:"09/2019",end:"Now"},{jobTitle:"Front End Engineer",institution:"Ruang Guru",institutionLink:"https://ruangguru.com/",highlights:["Became one of the pioneering engineers in Ruang Belajar's Desktop app development using ReasonML, ReasonReact, and Electron. Heavily involved in its core and primitive UI components development (created more than 50% of it) and routing design, while also helping other engineers (mobile engineers) to pick up React and web technology in general. This project is a first joint project between Ruang Guru's Front-end and Mobile engineers. Opening up a new possibility of higher app development's velocity in Ruang Guru.","Involved in company new software engineers hiring process by assessing their computational thinking and problem-solving skills through various challenges. Resulting in a faster engineering division's hiring process while making sure that only the high-quality and culturally-fit candidates passed.","Developed and set up various internal front-end tooling, including command-line application to bootstrap new web project, various UI kits, rich text-editor, and JavaScript utility functions. Resulting in a higher code sharing and development speed for Ruang Guru's engineering team."],start:"01/2018",end:"08/2019"},{jobTitle:"Junior Front End Engineer",institution:"Ruang Guru",institutionLink:"https://ruangguru.com/",highlights:["Led a team of front-end developers to develop and optimize Ruang Uji's react stacks and deployment. The result was more than 53.86% smaller initial download size (all assets included), 9.52% lower request number, 46.72% faster finish time, 137.10% faster DOMContentLoad time, and 62.49% faster load time than the original angular.js' stacks (2G connection, 280kbps/256kbps 800ms RTT), while also made subsequent pages load substantially faster by implementing on point code optimization, aggressive code splitting, and various images lazy loading.",'Refactored  <a href="https://ruangguru.com">Ruang Guru</a>\'s assets and code base using imgIX, AWS S3 bucket, and fastly CDN. The result was load time speed improvement of more than 300% (from more than 12 seconds average to under 3 seconds),  and the improvement of its  <a href="https://www.webpagetest.org/">Web Page Test</a> average score of B to all A\'s without sacrificing its assets\' apparent quality.','Rewrote and migrated <a href="https://uji.ruangguru.com">Ruang Uji</a> from angular.js\' stacks to react.js\' stacks from scratch. Thus solved the old "exam event" problem (e.g. no automatic submission in the background, submission error handler, continue to last exam on reload, etc.) at <a href="https://uji.ruangguru.com">Ruang Uji</a> while also modernized its tech stacks and make it less error prone.'],start:"10/2017",end:"12/2017"}];exports.workExperience=e;
},{}],"xw05":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createStringsOfEnums=void 0;var e=function(e){return Object.keys(e).map(function(t){return e[t]})};exports.createStringsOfEnums=e;
},{}],"Izd8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.skills=void 0;var e=require("../commons/helpers/enumsHelpers"),a=require("../commons/constants/enums"),n={programmingLanguages:[{level:"Production",languages:[a.ProgrammingLanguage.HTML,a.ProgrammingLanguage.CSS,a.ProgrammingLanguage.JS,a.ProgrammingLanguage.ReasonML]},{level:"Familiar",languages:[a.ProgrammingLanguage.NodeJS]},{level:"Exposure",languages:[a.ProgrammingLanguage.OCaml,a.ProgrammingLanguage.Elixir,a.ProgrammingLanguage.Python]}],languages:[{name:"Bahasa",proficiency:"Native",info:""},{name:"English",proficiency:"C1",info:"TOEFL: 627, IELTS: 7.0"},{name:"German",proficiency:"B1",info:"Goethe ZD: 228/300"}],tools:(0,e.createStringsOfEnums)(a.Library).concat((0,e.createStringsOfEnums)(a.Tool))};exports.skills=n;
},{"../commons/helpers/enumsHelpers":"xw05","../commons/constants/enums":"w6O9"}],"Qnu4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./personalInfo"),r=require("./project"),o=require("./formalEducation"),s=require("./workExperience"),l=require("./skills"),i={personalInfo:e.personalInfo,personalProjects:r.personalProjects,professionalProjects:r.professionalProjects,formalEducation:o.formalEducation,workExperience:s.workExperience,skills:l.skills},a=i;exports.default=a;
},{"./personalInfo":"rhzx","./project":"3Osa","./formalEducation":"Xfyq","./workExperience":"GcMk","./skills":"Izd8"}],"q/Oi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=n(require("../../data/index"));function n(a){return a&&a.__esModule?a:{default:a}}var s=a.default.personalInfo,t='\n<div class="title">\n  <h1 class="name">'+s.name+'</h1>\n  <span class="job-name">'+s.shortDesc+'</span>\n</div>\n<div class="contact">\n  <span class=contact-detail>\n    <span class=contact-detail-category>GitHub</span>: \n    <a href="'+s.socialHub.github+'">wahidyankf</a>\n  </span> \n  <span class=contact-detail>\n    <span class=contact-detail-category>LinkedIn</span>: \n    <a href="'+s.socialHub.linkedin+'">wahidyankf</a>\n  </span>\n  <span class=contact-detail>\n    <span class=contact-detail-category>Email</span>: \n    <a href="mailto:'+s.email+'">wahidyankf@gmail.com</a>\n  </span>\n  <span class=contact-detail>\n    <span class=contact-detail-category>Location</span>: \n    '+s.location+"\n  </span>\n</div>\n",e=t;exports.default=e;
},{"../../data/index":"Qnu4"}],"3HDf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./header"));function r(e){return e&&e.__esModule?e:{default:e}}var t=e.default;exports.default=t;
},{"./header":"q/Oi"}],"SAHo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../../data/index"));function t(e){return e&&e.__esModule?e:{default:e}}var r=e.default.personalInfo,o='\n<section class="portfolio-section summary">\n  <h2>Summary</h2>\n  <p>'+r.summary+"</p>\n</section>\n",n=o;exports.default=n;
},{"../../data/index":"Qnu4"}],"1gcV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("../../data/index"));function n(e){return e&&e.__esModule?e:{default:e}}var i=e.default.skills,l=i.programmingLanguages,s=i.tools,o=i.languages,a=l.reduce(function(e,n){var i=n.languages.map(function(e){return"<code>"+e+"</code>"});return e+"<p>"+n.level+": "+i.join(", ")+".</p>"},""),t=s.reduce(function(e,n,i){return e+"<code>"+n+"</code>"+(i===s.length-1?".":", ")},""),r=o.reduce(function(e,n){return e+"<p><code>"+n.name+"</code>: "+n.proficiency+(""===n.info?".":",")+" "+n.info+(""===n.info?"":".")+"</p>"},""),c='\n<section class="portfolio-section skills">\n  <h2>Skills</h2>\n  <div class="skill-container">\n    <div class="skill-category skill-prog-lang">\n      <h3 class="list-title">Programming Languages</h3>\n      '+a+'\n    </div>\n    <div class="skill-category skill-tools">\n      <h3 class="list-title">Tools and Libraries</h3>\n      <p>'+t+'</p>\n    </div>\n    <div class="skill-category skill-lang">\n      <h3 class="list-title">Languages (<a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages">CEFR</a>)</h3>\n      '+r+'\n    </div>\n    <div class="skill-category skill-empty">\n    </div>\n  </div>\n</section>\n',d=c;exports.default=d;
},{"../../data/index":"Qnu4"}],"vo+3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showTimeDuration=exports.calculateMonthDurationFromNow=exports.formatTimeDuration=void 0;var e=function(e){var t=Math.floor(e/2592e6),r=Math.floor(t/12),o=Math.floor(t%12),a=r>1?"s":"",n=t>1?"s":"";return t>12&&o>0?r+" Year"+a+", "+o+" Month"+n:t>12&&0===o?r+" Year"+a:t+" Month"+n};exports.formatTimeDuration=e;var t=function(e,t){var r=new Date,o=new Date(e,t);return Math.round((r.getTime()-o.getTime())/2592e6)};exports.calculateMonthDurationFromNow=t;var r=function(t,r,o){void 0===o&&(o="compact");var a=new Date,n=Number(t.slice(0,2))-1,i=Number(t.slice(3)),u="now"===r.toLowerCase()?""+a.getMonth():""+(Number(r.slice(0,2))-1),s="now"===r.toLowerCase()?a.getFullYear():Number(r.slice(3)),c=Number(u)+1,m=new Date(i,n),l=new Date(s,c),w=Number(l)-Number(m),h="compact"===o?"":'<i class="fa fa-circle time-duration"></i>'+e(w);return t===r||0===r.length?t:t+" - "+r+h};exports.showTimeDuration=r;
},{}],"96ny":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../../data/index")),n=require("../../commons/utils/dateTime");function t(e){return e&&e.__esModule?e:{default:e}}var i=e.default.workExperience,s=i.reduce(function(e,t){var i=t.highlights,s=t.jobTitle,l=t.institutionLink,r=t.institution,u=t.start,o=t.end,a=i.reduce(function(e,n){return e+"<li>"+n+"</li>"},"");return e+'\n  <ul>\n      <li>\n        <span class="list-title">'+s+'</span>\n        <span class="list-subtitle"> - <a href="'+l+'">'+r+"</a> - "+(0,n.showTimeDuration)(u,o,"verbose")+' </span>\n      </li>\n  </ul>\n  <ul class="list-bullet-point">\n    '+a+"\n  </ul>  \n  "},""),l='\n<section class="portfolio-section work-experience">\n  <h2>Work Experience</h2>\n  <ul>\n    '+s+"\n  </ul>\n</section>\n",r=l;exports.default=r;
},{"../../data/index":"Qnu4","../../commons/utils/dateTime":"vo+3"}],"YmTl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createProjectsHTML=void 0;var e=require("../utils/dateTime"),t=function(t){return t.filter(function(t){if("Now"==t.end)return!0;var n=t.end.slice(0,2),r=t.end.slice(-4);return(0,e.calculateMonthDurationFromNow)(parseInt(r),parseInt(n))<=24}).reduce(function(t,n){var r=n.stacks,l=n.type,i=n.link,s=n.name,c=n.start,o=n.end,u=n.highlights,a=n.context,d=r.reduce(function(e,t,n){return e+"<code>"+t+"</code>"+(n==r.length-1?".":", ")},""),p=u.reduce(function(e,t){return e+"<li>"+t+"</li>"},"");return t+'\n    <ul>\n      <li>\n        <span class="list-title">\n          '+(0===i.length?""+s:'<a href="'+i+'">'+s+"</a>")+" ("+l+')\n        </span>\n        <span class="list-subtitle">'+(0===c.length?"":"- "+(0,e.showTimeDuration)(c,o))+'</span>\n      </li>\n    </ul>\n    <ul class="list-bullet-point">\n      '+(a?"<li>Project context: "+a+"</li>":"")+"\n      "+p+"\n      <li>Technology stack: "+d+"</li>\n    </ul>\n    "},"")};exports.createProjectsHTML=t;
},{"../utils/dateTime":"vo+3"}],"Eoi/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("../../data/index")),r=require("../../commons/helpers/projectsHelpers");function s(e){return e&&e.__esModule?e:{default:e}}var o='\n<section class="portfolio-section">\n  <h2>Professional Projects (Last 2 Years)</h2>\n  <ul>\n    '+(0,r.createProjectsHTML)(e.default.professionalProjects)+"\n  </ul>\n</section>\n";exports.default=o;
},{"../../data/index":"Qnu4","../../commons/helpers/projectsHelpers":"YmTl"}],"8Qwn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=n(require("../../data/index")),e=require("../../commons/utils/dateTime");function n(t){return t&&t.__esModule?t:{default:t}}for(var l=t.default.formalEducation,i="",s=0;s<l.length;s++)i+='\n  <ul>\n    <li><span class="list-title">'+l[s].type+" Degree in "+l[s].major+'</span><span class="list-subtitle"> - '+l[s].institution+" - "+l[s].location+" - "+(0,e.showTimeDuration)(l[s].start,l[s].end)+'</span></li>\n  </ul>\n  <ul class="list-bullet-point">\n    <li>'+l[s].info+"</li>\n  </ul> \n  ";var a='\n<section class="education">\n  <h2>Formal Education</h2>\n  <ul>\n    '+i+"\n  </ul>\n</section>\n",o=a;exports.default=o;
},{"../../data/index":"Qnu4","../../commons/utils/dateTime":"vo+3"}],"pM3A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("./summary")),r=l(require("./skills")),u=l(require("./workExperience")),t=l(require("./professionalProjects")),a=l(require("./formalEducation"));function l(e){return e&&e.__esModule?e:{default:e}}var o="\n"+e.default+"\n"+u.default+"\n"+t.default+"\n"+r.default+"\n"+a.default+"\n",d=o;exports.default=d;
},{"./summary":"SAHo","./skills":"1gcV","./workExperience":"96ny","./professionalProjects":"Eoi/","./formalEducation":"8Qwn"}],"7V+V":[function(require,module,exports) {

},{}],"93ha":[function(require,module,exports) {
"use strict";var e=t(require("./sections/header/index")),n=t(require("./sections/main/index"));function t(e){return e&&e.__esModule?e:{default:e}}require("../css/app.css");var r=document.getElementById("js-check");r&&(r.style.display="none");var d=document.getElementById("header");d&&(d.innerHTML=e.default);var i=document.getElementById("main");i&&(i.innerHTML=n.default);
},{"./sections/header/index":"3HDf","./sections/main/index":"pM3A","../css/app.css":"7V+V"}]},{},["93ha"], null)
//# sourceMappingURL=/app.831fe6a9.js.map