"use strict";(self.webpackChunksched_ext=self.webpackChunksched_ext||[]).push([[530],{6582:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"scheds/README","title":"SCHED_EXT SCHEDULERS","description":"This directory contains the repo\'s schedulers.","source":"@site/docs/scheds/README.md","sourceDirName":"scheds","slug":"/scheds/","permalink":"/docs/scheds/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scheds/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/docs/OVERVIEW"},"next":{"title":"EXAMPLE SCHEDULERS","permalink":"/docs/scheds/c/"}}');var r=n(4848),c=n(8453);const o={},i="SCHED_EXT SCHEDULERS",d={},h=[{value:"Note on syncing",id:"note-on-syncing",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"sched_ext-schedulers",children:"SCHED_EXT SCHEDULERS"})}),"\n",(0,r.jsx)(s.h1,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(s.p,{children:"This directory contains the repo's schedulers."}),"\n",(0,r.jsx)(s.p,{children:"Some of these schedulers are simply examples of different types of schedulers\nthat can be built using sched_ext. They can be loaded and used to schedule on\nyour system, but their primary purpose is to illustrate how various features of\nsched_ext can be used."}),"\n",(0,r.jsx)(s.p,{children:"Other schedulers are actually performant, production-ready schedulers. That is,\nfor the correct workload and with the correct tuning, they may be deployed in a\nproduction environment with acceptable or possibly even improved performance.\nSome of the examples could be improved to become production schedulers."}),"\n",(0,r.jsx)(s.p,{children:"Please see the following README files for details on each of the various types\nof schedulers:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/scheds/rust/",children:"rust"})," describes all of the schedulers with rust\nuser space components. All of these schedulers are production ready."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/scheds/c/",children:"c"})," describes all of the schedulers with C user space\ncomponents. All of these schedulers are production ready."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"note-on-syncing",children:"Note on syncing"}),"\n",(0,r.jsxs)(s.p,{children:["Note that there is a ",(0,r.jsx)(s.a,{href:"sync-to-kernel.sh",children:"sync-to-kernel.sh"})," script in this\ndirectory. This is used to sync any changes to the specific schedulers\nwith the Linux kernel tree. If you've made any changes to a scheduler in please\nuse the script to synchronize with the sched_ext Linux\nkernel tree:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"$ ./sync-to-kernel.sh /path/to/kernel/tree\n"})})]})}function a(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var t=n(6540);const r={},c=t.createContext(r);function o(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);