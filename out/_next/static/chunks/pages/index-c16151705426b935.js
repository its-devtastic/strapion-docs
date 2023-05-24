(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1464:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1969)}])},9369:function(t,e,n){"use strict";var i=n(5893);n(7294);let a={logo:(0,i.jsx)("img",{src:"/strapion.png",style:{height:32,width:"auto"}}),project:{link:"https://github.com/its-devtastic/strapion"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/its-devtastic/strapion-docs",footer:{text:(0,i.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{children:["MIT ",new Date().getFullYear()," \xa9"," ",(0,i.jsx)("a",{href:"https://github.com/its-devtastic/strapion",target:"_blank",children:"Strapion"}),"."]}),(0,i.jsxs)("div",{children:["Build in Utrecht by"," ",(0,i.jsx)("a",{href:"https://www.devtastic.build",target:"_blank",children:"Devtastic"})]})]})}};e.Z=a},1969:function(t,e,n){"use strict";n.r(e);var i=n(5893),a=n(2673),s=n(902),r=n(9369);n(9966);var o=n(1151);n(5675);let l={MDXContent:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.ah)(),t.components);return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)},pageOpts:{filePath:"pages/index.mdx",route:"/",headings:[{depth:1,value:"Strapion",id:"strapion"},{depth:2,value:"Features",id:"features"},{depth:2,value:"Quick Start",id:"quick-start"},{depth:2,value:"Motivation",id:"motivation"},{depth:2,value:"Limitations",id:"limitations"}],timestamp:1684915672e3,pageMap:[{kind:"Meta",data:{index:"Introduction",configuration:"Configuration"}},{kind:"Folder",name:"configuration",route:"/configuration",children:[{kind:"Meta",data:{strapiUrl:"strapiUrl"}},{kind:"MdxPage",name:"strapiUrl",route:"/configuration/strapiUrl"}]},{kind:"MdxPage",name:"configuration",route:"/configuration"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Strapion"},pageNextRoute:"/",nextraLayout:s.ZP,themeConfig:r.Z};function d(t){let e=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",a:"a",em:"em"},(0,o.ah)(),t.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{children:"Strapion"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Strapion"})," is an alternative Strapi admin for content creators. It is customizable, translatable and mobile-friendly."]}),"\n",(0,i.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uD83C\uDF10 Multilingual (i18next)"}),"\n",(0,i.jsx)(e.li,{children:"\uD83C\uDFA8 Customizable theme (antd and tailwind)"}),"\n",(0,i.jsx)(e.li,{children:"\uD83E\uDDE9 Multiple injection zones"}),"\n",(0,i.jsx)(e.li,{children:"\uD83E\uDDF1 Swappable components"}),"\n",(0,i.jsx)(e.li,{children:"\uD83D\uDCDC Custom pages"}),"\n",(0,i.jsx)(e.li,{children:"\uD83D\uDD0C Plugins"}),"\n",(0,i.jsx)(e.li,{children:"\uD83D\uDCAF 100% TypeScript"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(e.p,{children:"Create a new Strapion project with the Create Strapion App tool:"}),"\n",(0,i.jsx)(e.pre,{"data-language":"shell","data-theme":"default",children:(0,i.jsx)(e.code,{"data-language":"shell","data-theme":"default",children:(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"create-strapion-app"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"cms"})]})})}),"\n",(0,i.jsxs)(e.p,{children:["Next, go into the newly created ",(0,i.jsx)(e.code,{children:"cms"})," directory and install the dependencies. When that's done, run"]}),"\n",(0,i.jsx)(e.pre,{"data-language":"shell","data-theme":"default",children:(0,i.jsx)(e.code,{"data-language":"shell","data-theme":"default",children:(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"dev"})]})})}),"\n",(0,i.jsxs)(e.p,{children:["Your Strapion project will run on ",(0,i.jsx)(e.a,{href:"http://localhost:1338",children:"http://localhost:1338"})]}),"\n",(0,i.jsx)(e.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(e.p,{children:'Strapi is the most popular JavaScript headless CMS available but its admin is notoriously uncustomizable. Strapion\nprovides an alternative admin that is built with React and easy to customize and extend. It uses popular frameworks and\nlibraries that should be familiar to many developers. The goal of Strapion is not to be a full replacement of Strapi\'s\nown admin. Creating content types, setting up login providers and other plugin management tasks are things that content\ncreators never have to deal with. These features only confuse most admin users. Instead, Strapion wants to be the "third wheel"\nin the Jamstack relationship: the frontend (e.g. Next.js), the API (Strapi) and the content management UI (Strapion).'}),"\n",(0,i.jsx)(e.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(e.p,{children:["Strapion is ",(0,i.jsx)(e.strong,{children:"not a drop-in"})," replacement of the Strapi admin, and for two reasons. The first reason is that Strapion targets\n",(0,i.jsx)(e.em,{children:"content creators"})," and does not support features such as content creation and plugin settings. But another reason is that\nStrapion takes a different approach on how to ",(0,i.jsx)(e.strong,{children:"configure"})," the admin. Instead of putting all configuration in the database -\nmaking it hard to migrate between environments, do translations, etc. - Strapion takes most configuration from a single\nconfiguration object."]})]})}e.default=(0,a.j)(l)}},function(t){t.O(0,[774,105,888,179],function(){return t(t.s=1464)}),_N_E=t.O()}]);