"use strict";(self.webpackChunksched_ext=self.webpackChunksched_ext||[]).push([[181],{97:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scheds/rust/scx_rustland/README","title":"scx_rustland","description":"This is a single user-defined scheduler used within schedext, which is a Linux kernel feature which enables implementing kernel thread schedulers in BPF and dynamically loading them. Read more about schedext.","source":"@site/docs/scheds/rust/scx_rustland/README.md","sourceDirName":"scheds/rust/scx_rustland","slug":"/scheds/rust/scx_rustland/","permalink":"/docs/scheds/rust/scx_rustland/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scheds/rust/scx_rustland/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"scx_rlfifo","permalink":"/docs/scheds/rust/scx_rlfifo/"},"next":{"title":"scx_rusty","permalink":"/docs/scheds/rust/scx_rusty/"}}');var i=t(4848),r=t(8453);const a={},c="scx_rustland",d={},l=[{value:"Overview",id:"overview",level:2},{value:"How To Install",id:"how-to-install",level:2},{value:"Typical Use Case",id:"typical-use-case",level:2},{value:"Production Ready?",id:"production-ready",level:2},{value:"Demo",id:"demo",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"scx_rustland",children:"scx_rustland"})}),"\n",(0,i.jsxs)(s.p,{children:["This is a single user-defined scheduler used within ",(0,i.jsx)(s.a,{href:"https://github.com/sched-ext/scx/tree/main",children:"sched_ext"}),", which is a Linux kernel feature which enables implementing kernel thread schedulers in BPF and dynamically loading them. ",(0,i.jsx)(s.a,{href:"https://github.com/sched-ext/scx/tree/main",children:"Read more about sched_ext"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(s.p,{children:"scx_rustland is made of a BPF component (scx_rustland_core) that implements the\nlow level sched-ext functionalities and a user-space counterpart (scheduler),\nwritten in Rust, that implements the actual scheduling policy."}),"\n",(0,i.jsx)(s.h2,{id:"how-to-install",children:"How To Install"}),"\n",(0,i.jsxs)(s.p,{children:["Available as a ",(0,i.jsx)(s.a,{href:"https://crates.io/crates/scx_rustland",children:"Rust crate"}),": ",(0,i.jsx)(s.code,{children:"cargo add scx_rustland"})]}),"\n",(0,i.jsx)(s.h2,{id:"typical-use-case",children:"Typical Use Case"}),"\n",(0,i.jsx)(s.p,{children:"scx_rustland is designed to prioritize interactive workloads over background\nCPU-intensive workloads. For this reason the typical use case of this scheduler\ninvolves low-latency interactive applications, such as gaming, video\nconferencing and live streaming."}),"\n",(0,i.jsx)(s.p,{children:'scx_rustland is also designed to be an "easy to read" template that can be used\nby any developer to quickly experiment more complex scheduling policies fully\nimplemented in Rust.'}),"\n",(0,i.jsx)(s.h2,{id:"production-ready",children:"Production Ready?"}),"\n",(0,i.jsx)(s.p,{children:"Not quite. For production scenarios, other schedulers are likely to exhibit\nbetter performance, as offloading all scheduling decisions to user-space comes\nwith a certain cost."}),"\n",(0,i.jsx)(s.p,{children:"However, a scheduler entirely implemented in user-space holds the potential for\nseamless integration with sophisticated libraries, tracing tools, external\nservices (e.g., AI), etc."}),"\n",(0,i.jsx)(s.p,{children:"Hence, there might be situations where the benefits outweigh the overhead,\njustifying the use of this scheduler in a production environment."}),"\n",(0,i.jsx)(s.h2,{id:"demo",children:"Demo"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/sched-ext/scx/assets/1051723/42ec3bf2-9f1f-4403-80ab-bf5d66b7c2d5",children:"scx_rustland-terraria"})}),"\n",(0,i.jsx)(s.p,{children:"The key takeaway of this demo is to demonstrate that , despite the overhead of\nrunning a scheduler in user-space, we can still obtain interesting results and,\nin this particular case, even outperform the default Linux scheduler (EEVDF) in\nterms of application responsiveness (fps), while a CPU intensive workload\n(parallel kernel build) is running in the background."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>c});var n=t(6540);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);