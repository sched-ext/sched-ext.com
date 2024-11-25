"use strict";(self.webpackChunksched_ext=self.webpackChunksched_ext||[]).push([[792],{6212:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scheds/rust/scx_rusty/README","title":"scx_rusty","description":"This is a single user-defined scheduler used within schedext, which is a Linux kernel feature which enables implementing kernel thread schedulers in BPF and dynamically loading them. Read more about schedext.","source":"@site/docs/scheds/rust/scx_rusty/README.md","sourceDirName":"scheds/rust/scx_rusty","slug":"/scheds/rust/scx_rusty/","permalink":"/docs/scheds/rust/scx_rusty/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scheds/rust/scx_rusty/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"scx_rustland","permalink":"/docs/scheds/rust/scx_rustland/"}}');var r=t(4848),a=t(8453);const i={},c="scx_rusty",o={},d=[{value:"Overview",id:"overview",level:2},{value:"How To Install",id:"how-to-install",level:2},{value:"Typical Use Case",id:"typical-use-case",level:2},{value:"Production Ready?",id:"production-ready",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"scx_rusty",children:"scx_rusty"})}),"\n",(0,r.jsxs)(s.p,{children:["This is a single user-defined scheduler used within ",(0,r.jsx)(s.a,{href:"https://github.com/sched-ext/scx/tree/main",children:"sched_ext"}),", which is a Linux kernel feature which enables implementing kernel thread schedulers in BPF and dynamically loading them. ",(0,r.jsx)(s.a,{href:"https://github.com/sched-ext/scx/tree/main",children:"Read more about sched_ext"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"A multi-domain, BPF / user space hybrid scheduler. The BPF portion of the\nscheduler does a simple round robin in each domain, and the user space portion\n(written in Rust) calculates the load factor of each domain, and informs BPF of\nhow tasks should be load balanced accordingly."}),"\n",(0,r.jsx)(s.h2,{id:"how-to-install",children:"How To Install"}),"\n",(0,r.jsxs)(s.p,{children:["Available as a ",(0,r.jsx)(s.a,{href:"https://crates.io/crates/scx_rusty",children:"Rust crate"}),": ",(0,r.jsx)(s.code,{children:"cargo add scx_rusty"})]}),"\n",(0,r.jsx)(s.h2,{id:"typical-use-case",children:"Typical Use Case"}),"\n",(0,r.jsx)(s.p,{children:"Rusty is designed to be flexible, accommodating different architectures and\nworkloads. Various load balancing thresholds (e.g. greediness, frequency, etc),\nas well as how Rusty should partition the system into scheduling domains, can\nbe tuned to achieve the optimal configuration for any given system or workload."}),"\n",(0,r.jsx)(s.h2,{id:"production-ready",children:"Production Ready?"}),"\n",(0,r.jsx)(s.p,{children:"Yes. If tuned correctly, rusty should be performant across various CPU\narchitectures and workloads. By default, rusty creates a separate scheduling\ndomain per-LLC, so its default configuration may be performant as well. Note\nhowever that scx_rusty does not yet disambiguate between LLCs in different NUMA\nnodes, so it may perform better on multi-CCX machines where all the LLCs share\nthe same socket, as opposed to multi-socket machines."}),"\n",(0,r.jsx)(s.p,{children:"Note as well that you may run into an issue with infeasible weights, where a\ntask with a very high weight may cause the scheduler to incorrectly leave cores\nidle because it thinks they're necessary to accommodate the compute for a\nsingle task. This can also happen in CFS, and should soon be addressed for\nscx_rusty."})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var n=t(6540);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);