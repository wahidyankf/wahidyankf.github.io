parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"8DuB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createStringsOfEnums=void 0;var e=function(e){return Object.keys(e).map(function(t){return e[t]})};exports.createStringsOfEnums=e;
},{}],"iOex":[function(require,module,exports) {
"use strict";var e,a,t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tool=exports.Library=exports.ProgrammingLanguage=void 0,exports.ProgrammingLanguage=e,function(e){e.CSS="CSS",e.HTML="HTML",e.JS="JavaScript",e.NodeJS="Node.js",e.OCaml="OCaml",e.Python="Python",e.ReasonML="ReasonML"}(e||(exports.ProgrammingLanguage=e={})),exports.Library=a,function(e){e.BabelJS="Babel",e.CSSInJS="CSS in JS",e.DraftJS="DraftJS",e.Electron="Electron",e.FoundationForSites="Foundation for Sites",e.FlowTyped="flow-typed",e.GulpJS="Gulp",e.Imagemin="imagemin",e.Jest="Jest",e.JQuery="jQuery",e.MediaElementJS="MediaElement.js",e.MomentJS="moment.js",e.NPM="npm",e.Phantomas="phantomas",e.PraytimeJS="praytime.js",e.ReactJS="React.js",e.ReactNative="React Native",e.ReasonReact="Reason React",e.ReactChartJS2="React Chart.js 2",e.Redux="Redux",e.ReduxSaga="Redux Saga",e.Rematch="Rematch",e.Sass="Sass",e.StyledComponents="styled-components",e.TypeScript="TypeScript",e.Webpack="Webpack",e.Yarn="Yarn"}(a||(exports.Library=a={})),exports.Tool=t,function(e){e.Git="Git",e.TMUX="TMUX",e.LaTeX="LaTeX",e.Vim="vim"}(t||(exports.Tool=t={}));
},{}],"L5jL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=require("../commons/helpers/enums"),e=require("../commons/types/sharedTypes"),n=(0,a.createStringsOfEnums)(e.Library).concat((0,a.createStringsOfEnums)(e.Tool)),i={personalInfo:{name:"Wahidyan Kresna Fridayoka",shortDesc:"Front-End / Software Engineer",email:"wahidyankf@gmail.com",summary:"Software engineer with diverse front-end web development's portfolio. Love to code in statically-typed functional programming languages. Comfortable working with JavaScript and ReactJS' stacks but is eager to learn another programming language and tools. Polyglot that speaks 3+ languages and has more than 3 years experience of living overseas.",location:'<a href="https://goo.gl/maps/dpbvmixZWTs">Jakarta, Indonesia</a>',socialHub:{website:"https://wahidyankf.github.io/",github:"https://github.com/wahidyankf",linkedin:"https://www.linkedin.com/in/wahidyan-kresna-fridayoka"}},workExperience:[{jobTitle:"Front End Engineer",institution:"Ruang Guru",institutionLink:"https://ruangguru.com/",location:"Jakarta, Indonesia",highlights:["Became one of the pioneering engineers in Ruang Belajar's Desktop app development using ReasonML, ReasonReact, and Electron. Heavily involved in its core and primitive UI components development (created more than 50% of it) and routing design, while also helping other engineers (mobile engineers) to pick up React and web technology in general. This project is a first joint project between Ruang Guru's Front-end and Mobile engineers. Opening up a new possibility of higher app development's velocity in Ruang Guru.","Involved in company new front-end engineer hiring process by assessing their computational thinking and React.js problem-solving skills through coding challenges. Resulting in a faster front-end engineering division's hiring process while making sure that only the high-quality one passed.","Developed Ruang Kerja CMS' question and question-set modules using React and Draft.js. Resulting in well functioning rich text editor implementation for question and question-set generation task in Ruang Kerja apps.","Developed and set up various internal front-end tooling, including command-line application to bootstrap new web project, various UI kits, rich text-editor, and JavaScript utility functions. Resulting in a higher code sharing and development speed for Ruang Guru's engineering team.","Led a team of front-end developers to create Ruang Kerja's company dashboard using React JS stacks, flow-typed, and data visualization tools. Also did an end-to-end testing for it using cypress. Resulting in a finely crafted and runtime-error free dashboard web app.","Became one of the pioneering engineers in Ruang Kerja's React Native app development. Resulting in a more efficient engineering resources usage for Ruang Guru by expanding the usages of its front end engineers, while theoretically cut the cost of apps development down almost to 50% without losing any of native apps' development speed."],start:"01/2018",end:"Now"},{jobTitle:"Junior Front End Engineer",institution:"Ruang Guru",institutionLink:"https://ruangguru.com/",location:"Jakarta, Indonesia",highlights:["Led a team of front-end developers to develop and optimize Ruang Uji's react stacks and deployment. The result was more than 53.86% smaller initial download size (all assets included), 9.52% lower request number, 46.72% faster finish time, 137.10% faster DOMContentLoad time, and 62.49% faster load time than the original angular.js' stacks (2G connection, 280kbps/256kbps 800ms RTT), while also made subsequent pages load substantially faster by implementing on point code optimization, aggressive code splitting, and various images lazy loading.",'Refactored  <a href="https://ruangguru.com">Ruang Guru</a>\'s assets and code base using imgIX, AWS S3 bucket, and fastly CDN. The result was load time speed improvement of more than 300% (from more than 12 seconds average to under 3 seconds),  and the improvement of its  <a href="https://www.webpagetest.org/">Web Page Test</a> average score of B to all A\'s without sacrificing its assets\' apparent quality.','Rewrote and migrated <a href="https://uji.ruangguru.com">Ruang Uji</a> from angular.js\' stacks to react.js\' stacks from scratch. Thus solved the old "exam event" problem (e.g. no automatic submission in the background, submission error handler, continue to last exam on reload, etc.) at <a href="https://uji.ruangguru.com">Ruang Uji</a> while also modernized its tech stacks and make it less error prone.',"Automated web apps' bugs tracking using sentry (Raven.js) and deployment from Gitlab to AWS S3 and production using Codeship. The result was more precise bug tracking, and much faster web app integration, deployment, and delivery."],start:"10/2017",end:"12/2017"}],skills:{programmingLanguages:[{level:"Production",languages:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.ProgrammingLanguage.JS,e.ProgrammingLanguage.ReasonML]},{level:"Familiar",languages:[e.ProgrammingLanguage.NodeJS]},{level:"Exposure",languages:[e.ProgrammingLanguage.Python,e.ProgrammingLanguage.OCaml]}],languages:[{name:"Bahasa",proficiency:"Native",info:""},{name:"English",proficiency:"C1",info:"TOEFL: 627, IELTS: 7.0"},{name:"German",proficiency:"B1",info:"Goethe ZD: 228/300"}],tools:n},formalEducation:[{major:"Electrical Engineering",type:"Bachelor",institution:"Institut Teknologi Bandung",location:"Indonesia",start:"08/2005",end:"06/2011",info:"GPA: 3.0/4.0. Bachelor thesis: Design and implementation of SMS One Time Password (SMS-OTP) Based Web Authentication System. Supervisor: Ir. Budi Rahardjo M.Sc., Ph.D."}],professionalProjects:[{name:"Ruang Belanja - Admin Dashboard (Internal)",highlights:[],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.ProgrammingLanguage.JS,e.ProgrammingLanguage.ReasonML,e.Library.ReasonReact,e.Library.Webpack],start:"",end:"",link:""},{name:"Ruang Guru - Video Review Dashboard (Internal)",highlights:[],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.ProgrammingLanguage.JS,e.ProgrammingLanguage.ReasonML,e.Library.ReasonReact,e.Library.Webpack],start:"",end:"",link:""},{name:"Ruang Belajar - Desktop App",highlights:[],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.ProgrammingLanguage.JS,e.ProgrammingLanguage.ReasonML,e.Library.ReasonReact,e.Library.Webpack,e.Library.Electron],start:"",end:"",link:""},{name:"Ruang Kerja - Content Management System (CMS)",highlights:[],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.ProgrammingLanguage.JS,e.Library.ReactJS,e.Library.Redux,e.Library.Rematch,e.Library.DraftJS,e.Library.StyledComponents,e.Library.Webpack],start:"",end:"",link:""},{name:"Ruang Kerja - Company and User Progress Dashboard",highlights:[],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.ProgrammingLanguage.JS,e.Library.ReactJS,e.Library.Redux,e.Library.Rematch,e.Library.StyledComponents,e.Library.ReactChartJS2,e.Library.Webpack],start:"",end:"",link:""},{name:"Ruang Kerja - Mobile App",highlights:[],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.ProgrammingLanguage.JS,e.Library.ReactNative,e.Library.Redux,e.Library.Rematch,e.Library.Webpack],start:"",end:"",link:""},{name:"Ruang Uji - Revamp",highlights:[],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.ProgrammingLanguage.JS,e.Library.ReactJS,e.Library.Redux,e.Library.ReduxSaga,e.Library.StyledComponents,e.Library.Webpack],start:"",end:"",link:""},{name:"Ruang Guru Web - Landing Page",highlights:[],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass,e.Library.ReactJS],start:"",end:"",link:""}],personalProjects:[{name:"Build an Interactive Form",highlights:["In this project, an HTML and CSS files was given and I have to add interactivity to the existing form there. The resulting page is an interactive HTML form that has a simple form validity checker."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass,e.ProgrammingLanguage.JS,e.Library.JQuery],start:"08/2017",end:"08/2017",link:"https://github.com/wahidyankf/build-an-interactive-form"},{name:"Pagination and Content Filter",highlights:["In this project, an HTML page and CSS files was given and I have to add a search and pagination feature using unobstrusive javascript. The resulting page is a page that display at most 10 student entries with an instant student search capabilities."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass,e.ProgrammingLanguage.JS,e.Library.JQuery],start:"08/2017",end:"08/2017",link:"https://github.com/wahidyankf/pagination-and-content-filter"},{name:"Random Quote Generator",highlights:["In this project, I created a page that will randomly generate quotes from a data object. This page will change its displayed quote when we click the button / pres any key / 30 seconds has passed. This page will also not displayed the same quote until all of quotes has been displayed."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass,e.ProgrammingLanguage.JS,e.Library.JQuery],start:"08/2017",end:"08/2017",link:"https://github.com/wahidyankf/random_quote_generator"},{name:"Interactive Video Player",highlights:["In this project, I created a fully featured interactive video player using MediaElement.js. The features of this video player includes: play/pause button, current time and total duration, playing progress slider, file buffer's progress, skip backward button, playback speed chooser, captions chooser, video quality chooser, volume level slider, and go to fullscreen button."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass,e.ProgrammingLanguage.JS,e.Library.MediaElementJS],start:"07/2017",end:"07/2017",link:"https://github.com/wahidyankf/interactive-video-player"},{name:"Optimizing a Site for Performance",highlights:["An unoptimized website was given to me, and I have to optimize it by reducing its http request and body size by any means necessary. In this project, I successfully reduced the website's http requests count down to 22 requests (from 44), and also reduced its body size by more than 10 times (from 12-ish MB to < 1 MB) while still maintaining the apparent quality of its images."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass,e.Library.GulpJS,e.Library.Phantomas,e.Library.Imagemin],start:"07/2017",end:"07/2017",link:"https://github.com/wahidyankf/treehouse-frontend-11-optimizing-a-site-for-performance"},{name:"Accessibility Refactor",highlights:["In this project, I refactored a website that suffers from various accessibility flaws, resulting a website that is accessible and can pass an accessibility validator(s)'s automated checks and a human's check. This project was tested using HTML Accessibility Checker, Fangs Screen Reader Emulator and Google Chrome's Accessibility Developer Tools."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass],start:"07/2017",end:"07/2017",link:"https://github.com/wahidyankf/treehouse-frontend-08-accessibility-refactor"},{name:"wahidyankf.github.io",highlights:["In this project, I created a portfolio website for my personal used. This website contains the complete list of my curriculum vitae."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass,e.ProgrammingLanguage.JS],start:"07/2017",end:"07/2017",link:"https://wahidyankf.github.io/"},{name:"SVG Site Update",highlights:["In this project, a functioning website was given to me, and I have to update/replace its existing non svg images with svg images, resulting more beautiful and sharper images on the website."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass],start:"06/2017",end:"06/2017",link:"https://github.com/wahidyankf/treehouse-frontend-06-svg-site-update"},{name:"Moslem Productivity Tools",highlights:["In this project, I created a simple website application that tracks the islamic praying time and section of the day's markers, and warns me whenever I am about to burnout (according to the scientific theory of productivity). This app allow me to always work at my optimal speed."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass,e.ProgrammingLanguage.JS,e.Library.JQuery,e.Library.FoundationForSites,e.Library.MomentJS,e.Library.PraytimeJS],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/moslem-productivity-tools"},{name:"Interactive Photo Gallery",highlights:["In this project, an interactive online gallery's design mockup was given to me, and I have to replicate it using only jQuery as a non vanilla js element. This project includes a simple lightbox (with navigation) and search/filter function."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass,e.ProgrammingLanguage.JS,e.Library.JQuery],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/treehouse-frontend-04-interactive-photo-gallery"},{name:"Online Registration Form",highlights:["In this project, a responsive online form's design mockup was given to me, and I have to replicate it using vanilla HTML and CSS."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/treehouse-frontend-03-online-registration-form"},{name:"Responsive Layout",highlights:["In this project, a responsive web portfolio mockup was given to me, and I have to replicate it using HTML and CSS."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.Sass],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/treehouse-frontend-02-responsive-layout"},{name:"Personal Profile Page",highlights:["In this project, I modified an existing personal website to conform to my personal data."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS],start:"04/2017",end:"04/2017",link:"https://github.com/wahidyankf/treehouse-frontend-01-personal-profile-page"},{name:"Build a Portfolio Site",highlights:["In this project, I created a simple responsive portfolio site using foundation for sites."],stacks:[e.ProgrammingLanguage.HTML,e.ProgrammingLanguage.CSS,e.Library.FoundationForSites],start:"03/2017",end:"03/2017",link:"https://github.com/wahidyankf/udacity-fullstack-build-a-portfolio-site"}]},t=i;exports.default=t;
},{"../commons/helpers/enums":"8DuB","../commons/types/sharedTypes":"iOex"}],"q/Oi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=s(require("../../data/cv"));function s(a){return a&&a.__esModule?a:{default:a}}var n=a.default.personalInfo,e='\n<div class="title">\n  <h1 class="name">'+n.name+'</h1>\n  <span class="job-name">'+n.shortDesc+'</span>\n</div>\n<div class="contact">\n  <span class=contact-detail><i class="fa fa-github"></i> <a href="'+n.socialHub.github+'">wahidyankf</a></span> \n  <span class=contact-detail><i class="fa fa-linkedin"></i> <a href="'+n.socialHub.linkedin+'">wahidyankf</a></span>\n  <span class=contact-detail><i class="fa fa-envelope"></i> <a href="mailto:'+n.email+'">wahidyankf@gmail.com</a></span>\n  <span class=contact-detail><i class="fa fa-map-marker"></i> '+n.location+"</span>\n</div>\n",i=e;exports.default=i;
},{"../../data/cv":"L5jL"}],"3HDf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./header"));function r(e){return e&&e.__esModule?e:{default:e}}var t=e.default;exports.default=t;
},{"./header":"q/Oi"}],"SAHo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../../data/cv"));function t(e){return e&&e.__esModule?e:{default:e}}var r=e.default.personalInfo,o='\n<section class="portfolio-section summary">\n  <h2>Summary</h2>\n  <p>'+r.summary+"</p>\n</section>\n",s=o;exports.default=s;
},{"../../data/cv":"L5jL"}],"1gcV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("../../data/cv"));function n(e){return e&&e.__esModule?e:{default:e}}var l=e.default.skills,i=l.programmingLanguages,s=l.tools,a=l.languages,t=i.reduce(function(e,n){return e+"<p>"+n.level+": "+n.languages.join(", ")+".</p>"},""),o=s.reduce(function(e,n,l){return""+e+n+(l===s.length-1?".":", ")},""),r=a.reduce(function(e,n){return e+"<p>"+n.name+": "+n.proficiency+(""===n.info?".":",")+" "+n.info+(""===n.info?"":".")+"</p>"},""),c='\n<section class="portfolio-section skills">\n  <h2>Skills</h2>\n  <div class="skill-container">\n    <div class="skill-category skill-prog-lang">\n      <h3 class="list-title">Programming Languages</h3>\n      '+t+'\n    </div>\n    <div class="skill-category skill-tools">\n      <h3 class="list-title">Tools and Libraries</h3>\n      <p>'+o+'</p>\n    </div>\n    <div class="skill-category skill-lang">\n      <h3 class="list-title">Languages (<a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages">CEFR</a>)</h3>\n      '+r+'\n    </div>\n    <div class="skill-category skill-empty">\n    </div>\n  </div>\n</section>\n',u=c;exports.default=u;
},{"../../data/cv":"L5jL"}],"vo+3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showTimeDuration=exports.formatTimeDuration=void 0;var e=function(e){var r=Math.floor(e/2592e6),o=Math.floor(r/12),t=Math.floor(r%12),a=o>1?"s":"",i=r>1?"s":"";return r>12&&t>0?o+" Year"+a+", "+t+" Month"+i:r>12&&0===t?o+" Year"+a:r+" Month"+i};exports.formatTimeDuration=e;var r=function(r,o,t){void 0===t&&(t="compact");var a=new Date,i=Number(r.slice(0,2))-1,n=Number(r.slice(3)),s="now"===o.toLowerCase()?""+a.getMonth():""+(Number(o.slice(0,2))-1),u="now"===o.toLowerCase()?a.getFullYear():Number(o.slice(3)),m=Number(s)+1,c=new Date(n,i),l=new Date(u,m),f=Number(l)-Number(c),w="compact"===t?"":'<i class="fa fa-circle time-duration"></i>'+e(f);return r===o?r:r+" - "+o+w};exports.showTimeDuration=r;
},{}],"96ny":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../../data/cv")),n=require("../../commons/utils/dateTime");function t(e){return e&&e.__esModule?e:{default:e}}var i=e.default.workExperience,s=i.reduce(function(e,t){var i=t.highlights,s=t.jobTitle,l=t.institutionLink,r=t.institution,o=t.start,u=t.end,a=t.location,c=i.reduce(function(e,n){return e+"<li>"+n+"</li>"},"");return e+'\n  <ul>\n      <li>\n        <span class="list-title">'+s+'</span>\n        <span class="list-subtitle"> - <a href="'+l+'">'+r+"</a> - "+a+" - "+(0,n.showTimeDuration)(o,u,"verbose")+'</span>\n      </li>\n  </ul>\n  <ul class="list-bullet-point">\n    '+c+"\n  </ul>  \n  "},""),l='\n<section class="portfolio-section work-experience">\n  <h2>Work Experience</h2>\n  <ul>\n    '+s+"\n  </ul>\n</section>\n",r=l;exports.default=r;
},{"../../data/cv":"L5jL","../../commons/utils/dateTime":"vo+3"}],"gmt/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createProjectsHTML=void 0;var e=require("../utils/dateTime"),n=function(n){return n.reduce(function(n,t){var l=t.stacks,s=t.link,r=t.name,i=t.start,u=t.end,c=t.highlights,a=l.reduce(function(e,n,t){return e+"<code>"+n+"</code>"+(t==l.length-1?".":", ")},""),o=c.reduce(function(e,n){return e+"<li>"+n+"</li>"},"");return n+'\n    <ul>\n      <li>\n        <span class="list-title">\n          '+(0===s.length?r:'<a href="'+s+'">'+r+"</a>")+'\n        </span>\n        <span class="list-subtitle">'+(0===i.length?"":"- "+(0,e.showTimeDuration)(i,u))+'</span>\n      </li>\n    </ul>\n    <ul class="list-bullet-point">\n      '+o+"\n      <li>Technology stack: "+a+"</li>\n    </ul>\n    "},"")};exports.createProjectsHTML=n;
},{"../utils/dateTime":"vo+3"}],"Lz38":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../../data/cv")),r=require("../../commons/helpers/projects");function t(e){return e&&e.__esModule?e:{default:e}}var o='\n<section class="portfolio-section">\n  <h2>Personal Projects</h2>\n  <ul>\n    '+(0,r.createProjectsHTML)(e.default.personalProjects)+"\n  </ul>\n</section>\n";exports.default=o;
},{"../../data/cv":"L5jL","../../commons/helpers/projects":"gmt/"}],"Eoi/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../../data/cv")),o=require("../../commons/helpers/projects");function r(e){return e&&e.__esModule?e:{default:e}}var t='\n<section class="portfolio-section">\n  <h2>Professional Projects</h2>\n  <ul>\n    '+(0,o.createProjectsHTML)(e.default.professionalProjects)+"\n  </ul>\n</section>\n";exports.default=t;
},{"../../data/cv":"L5jL","../../commons/helpers/projects":"gmt/"}],"8Qwn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=n(require("../../data/cv")),e=require("../../commons/utils/dateTime");function n(t){return t&&t.__esModule?t:{default:t}}for(var l=t.default.formalEducation,i="",s=0;s<l.length;s++)i+='\n  <ul>\n    <li><span class="list-title">'+l[s].type+" Degree in "+l[s].major+'</span><span class="list-subtitle"> - '+l[s].institution+" - "+l[s].location+" - "+(0,e.showTimeDuration)(l[s].start,l[s].end)+'</span></li>\n  </ul>\n  <ul class="list-bullet-point">\n    <li>'+l[s].info+"</li>\n  </ul> \n  ";var a='\n<section class="education">\n  <h2>Formal Education</h2>\n  <ul>\n    '+i+"\n  </ul>\n</section>\n",o=a;exports.default=o;
},{"../../data/cv":"L5jL","../../commons/utils/dateTime":"vo+3"}],"pM3A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./summary")),r=o(require("./skills")),u=o(require("./workExperience")),t=o(require("./personalProjects")),a=o(require("./professionalProjects")),l=o(require("./formalEducation"));function o(e){return e&&e.__esModule?e:{default:e}}var n="\n"+e.default+"\n"+u.default+"\n"+a.default+"\n"+r.default+"\n"+l.default+"\n"+t.default+"\n",s=n;exports.default=s;
},{"./summary":"SAHo","./skills":"1gcV","./workExperience":"96ny","./personalProjects":"Lz38","./professionalProjects":"Eoi/","./formalEducation":"8Qwn"}],"7V+V":[function(require,module,exports) {

},{"./../fonts/fontawesome-webfont.eot":[["fontawesome-webfont.4a2277d0.eot","/DY8"],"/DY8"],"./../fonts/fontawesome-webfont.woff2":[["fontawesome-webfont.9fb3877d.woff2","e6wg"],"e6wg"],"./../fonts/fontawesome-webfont.woff":[["fontawesome-webfont.4e039e70.woff","70Ff"],"70Ff"],"./../fonts/fontawesome-webfont.ttf":[["fontawesome-webfont.152c194f.ttf","x+z7"],"x+z7"],"./../fonts/fontawesome-webfont.svg":[["fontawesome-webfont.a9acc805.svg","K176"],"K176"]}],"93ha":[function(require,module,exports) {
"use strict";var e=t(require("./sections/header/index")),n=t(require("./sections/main/index"));function t(e){return e&&e.__esModule?e:{default:e}}require("../css/app.css");var r=document.getElementById("js-check");r&&(r.style.display="none");var d=document.getElementById("header");d&&(d.innerHTML=e.default);var i=document.getElementById("main");i&&(i.innerHTML=n.default);
},{"./sections/header/index":"3HDf","./sections/main/index":"pM3A","../css/app.css":"7V+V"}]},{},["93ha"], null)
//# sourceMappingURL=/app.a2a73f38.js.map