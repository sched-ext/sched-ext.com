"use strict";(self.webpackChunksched_ext=self.webpackChunksched_ext||[]).push([[174],{590:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scheds/c/README","title":"EXAMPLE SCHEDULERS","description":"This directory contains example schedulers that are shipped with the sched_ext","source":"@site/docs/scheds/c/README.md","sourceDirName":"scheds/c","slug":"/scheds/c/","permalink":"/docs/scheds/c/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scheds/c/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"SCHED_EXT SCHEDULERS","permalink":"/docs/scheds/"},"next":{"title":"RUST SCHEDULERS","permalink":"/docs/scheds/rust/"}}');var r=i(4848),t=i(8453);const a={},l="EXAMPLE SCHEDULERS",c={},o=[{value:"scx_central",id:"scx_central",level:2},{value:"Overview",id:"overview",level:3},{value:"Typical Use Case",id:"typical-use-case",level:3},{value:"Production Ready?",id:"production-ready",level:3},{value:"scx_flatcg",id:"scx_flatcg",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Typical Use Case",id:"typical-use-case-1",level:3},{value:"Production Ready?",id:"production-ready-1",level:3},{value:"scx_nest",id:"scx_nest",level:2},{value:"Overview",id:"overview-2",level:3},{value:"Typical Use Case",id:"typical-use-case-2",level:3},{value:"Production Ready?",id:"production-ready-2",level:3},{value:"scx_pair",id:"scx_pair",level:2},{value:"Overview",id:"overview-3",level:3},{value:"Typical Use Case",id:"typical-use-case-3",level:3},{value:"Production Ready?",id:"production-ready-3",level:3},{value:"scx_qmap",id:"scx_qmap",level:2},{value:"Overview",id:"overview-4",level:3},{value:"Typical Use Case",id:"typical-use-case-4",level:3},{value:"Production Ready?",id:"production-ready-4",level:3},{value:"scx_simple",id:"scx_simple",level:2},{value:"Overview",id:"overview-5",level:3},{value:"Typical Use Case",id:"typical-use-case-5",level:3},{value:"Production Ready?",id:"production-ready-5",level:3},{value:"scx_userland",id:"scx_userland",level:2},{value:"Overview",id:"overview-6",level:3},{value:"Typical Use Case",id:"typical-use-case-6",level:3},{value:"Production Ready?",id:"production-ready-6",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"example-schedulers",children:"EXAMPLE SCHEDULERS"})}),"\n",(0,r.jsx)(s.h1,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(s.p,{children:"This directory contains example schedulers that are shipped with the sched_ext\nLinux kernel tree."}),"\n",(0,r.jsx)(s.p,{children:"While these schedulers can be loaded and used to schedule on your system, their\nprimary purpose is to illustrate how various features of sched_ext can be used."}),"\n",(0,r.jsx)(s.p,{children:"This document will give some background on each example scheduler, including\ndescribing the types of workloads or scenarios they're designed to accommodate.\nFor more details on any of these schedulers, please see the header comment in\ntheir .bpf.c file."}),"\n",(0,r.jsx)(s.h1,{id:"schedulers",children:"Schedulers"}),"\n",(0,r.jsx)(s.p,{children:"This section lists, in alphabetical order, all of the current example\nschedulers."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"scx_central",children:"scx_central"}),"\n",(0,r.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:'A "central" scheduler where scheduling decisions are made from a single CPU.\nThis scheduler illustrates how scheduling decisions can be dispatched from a\nsingle CPU, allowing other cores to run with infinite slices, without timer\nticks, and without having to incur the overhead of making scheduling decisions.'}),"\n",(0,r.jsx)(s.h3,{id:"typical-use-case",children:"Typical Use Case"}),"\n",(0,r.jsx)(s.p,{children:"This scheduler could theoretically be useful for any workload that benefits\nfrom minimizing scheduling overhead and timer ticks. An example of where this\ncould be particularly useful is running VMs, where running with infinite slices\nand no timer ticks allows the VM to avoid unnecessary expensive vmexits."}),"\n",(0,r.jsx)(s.h3,{id:"production-ready",children:"Production Ready?"}),"\n",(0,r.jsx)(s.p,{children:"Not yet. While tasks are run with an infinite slice (SCX_SLICE_INF), they're\npreempted every 20ms in a timer callback. The scheduler also puts the core\nschedling logic inside of the central / scheduling CPU's ops.dispatch() path,\nand does not yet have any kind of priority mechanism."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"scx_flatcg",children:"scx_flatcg"}),"\n",(0,r.jsx)(s.h3,{id:"overview-1",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"A flattened cgroup hierarchy scheduler. This scheduler implements hierarchical\nweight-based cgroup CPU control by flattening the cgroup hierarchy into a\nsingle layer, by compounding the active weight share at each level. The effect\nof this is a much more performant CPU controller, which does not need to\ndescend down cgroup trees in order to properly compute a cgroup's share."}),"\n",(0,r.jsx)(s.h3,{id:"typical-use-case-1",children:"Typical Use Case"}),"\n",(0,r.jsx)(s.p,{children:"This scheduler could be useful for any typical workload requiring a CPU\ncontroller, but which cannot tolerate the higher overheads of the fair CPU\ncontroller."}),"\n",(0,r.jsx)(s.h3,{id:"production-ready-1",children:"Production Ready?"}),"\n",(0,r.jsx)(s.p,{children:"Yes, though the scheduler (currently) does not adequately accommodate\nthundering herds of cgroups. If, for example, many cgroups which are nested\nbehind a low-priority cgroup were to wake up around the same time, they may be\nable to consume more CPU cycles than they are entitled to."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"scx_nest",children:"scx_nest"}),"\n",(0,r.jsx)(s.h3,{id:"overview-2",children:"Overview"}),"\n",(0,r.jsxs)(s.p,{children:["A scheduler based on the following Inria-Paris paper: ",(0,r.jsx)(s.a,{href:"https://hal.inria.fr/hal-03612592/file/paper.pdf",children:"OS Scheduling with Nest:\nKeeping Tasks Close Together on Warm\nCores"}),". The core idea of the\nscheduler is to make scheduling decisions which encourage work to run on cores\nthat are expected to have high frequency. This scheduler currently will only\nperform well on single CCX / single-socket hosts."]}),"\n",(0,r.jsx)(s.h3,{id:"typical-use-case-2",children:"Typical Use Case"}),"\n",(0,r.jsx)(s.p,{children:"scx_nest is designed to optimize workloads that CPU utilization somewhat low,\nand which can benefit from running on a subset of cores on the host so as to\nkeep the frequencies high on those cores. Some workloads may perform better by\nspreading work across many cores to avoid thrashing the cache, etc. Determining\nwhether a workload is well-suited to scx_nest will likely require\nexperimentation."}),"\n",(0,r.jsx)(s.h3,{id:"production-ready-2",children:"Production Ready?"}),"\n",(0,r.jsx)(s.p,{children:"This scheduler could be used in a production environment, assuming the hardware\nconstraints enumerated above."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"scx_pair",children:"scx_pair"}),"\n",(0,r.jsx)(s.h3,{id:"overview-3",children:"Overview"}),"\n",(0,r.jsxs)(s.p,{children:["A sibling scheduler which ensures that tasks will only ever be co-located on a\nphysical core if they're in the same cgroup. It illustrates how a scheduling\npolicy could be implemented to mitigate CPU bugs, such as L1TF, and also shows\nhow some useful kfuncs such as ",(0,r.jsx)(s.code,{children:"scx_bpf_kick_cpu()"})," can be utilized."]}),"\n",(0,r.jsx)(s.h3,{id:"typical-use-case-3",children:"Typical Use Case"}),"\n",(0,r.jsx)(s.p,{children:"While this scheduler is only meant to be used to illustrate certain sched_ext\nfeatures, with a bit more work (e.g. by adding some form of priority handling\ninside and across cgroups), it could have been used as a way to quickly\nmitigate L1TF before core scheduling was implemented and rolled out."}),"\n",(0,r.jsx)(s.h3,{id:"production-ready-3",children:"Production Ready?"}),"\n",(0,r.jsx)(s.p,{children:"No"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"scx_qmap",children:"scx_qmap"}),"\n",(0,r.jsx)(s.h3,{id:"overview-4",children:"Overview"}),"\n",(0,r.jsxs)(s.p,{children:["Another simple, yet slightly more complex scheduler that provides an example of\na basic weighted FIFO queuing policy. It also provides examples of some common\nuseful BPF features, such as sleepable per-task storage allocation in the\n",(0,r.jsx)(s.code,{children:"ops.prep_enable()"})," callback, and using the ",(0,r.jsx)(s.code,{children:"BPF_MAP_TYPE_QUEUE"})," map type to\nenqueue tasks. It also illustrates how core-sched support could be implemented."]}),"\n",(0,r.jsx)(s.h3,{id:"typical-use-case-4",children:"Typical Use Case"}),"\n",(0,r.jsx)(s.p,{children:"Purely used to illustrate sched_ext features."}),"\n",(0,r.jsx)(s.h3,{id:"production-ready-4",children:"Production Ready?"}),"\n",(0,r.jsx)(s.p,{children:"No"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"scx_simple",children:"scx_simple"}),"\n",(0,r.jsx)(s.h3,{id:"overview-5",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"A simple scheduler that provides an example of a minimal sched_ext\nscheduler. scx_simple can be run in either global weighted vtime mode, or\nFIFO mode."}),"\n",(0,r.jsx)(s.h3,{id:"typical-use-case-5",children:"Typical Use Case"}),"\n",(0,r.jsx)(s.p,{children:"Though very simple, this scheduler should perform reasonably well on\nsingle-socket CPUs with a uniform L3 cache topology. Note that while running in\nglobal FIFO mode may work well for some workloads, saturating threads can\neasily drown out inactive ones."}),"\n",(0,r.jsx)(s.h3,{id:"production-ready-5",children:"Production Ready?"}),"\n",(0,r.jsx)(s.p,{children:"This scheduler could be used in a production environment, assuming the hardware\nconstraints enumerated above, and assuming the workload can accommodate a\nsimple scheduling policy."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"scx_userland",children:"scx_userland"}),"\n",(0,r.jsx)(s.h3,{id:"overview-6",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"A simple weighted vtime scheduler where all scheduling decisions take place in\nuser space. This is in contrast to Rusty, where load balancing lives in user\nspace, but scheduling decisions are still made in the kernel."}),"\n",(0,r.jsx)(s.h3,{id:"typical-use-case-6",children:"Typical Use Case"}),"\n",(0,r.jsx)(s.p,{children:"There are many advantages to writing schedulers in user space. For example, you\ncan use a debugger, you can write the scheduler in Rust, and you can use data\nstructures bundled with your favorite library."}),"\n",(0,r.jsx)(s.p,{children:"On the other hand, user space scheduling can be hard to get right. You can\npotentially deadlock due to not scheduling a task that's required for the\nscheduler itself to make forward progress (though the sched_ext watchdog will\nprotect the system by unloading your scheduler after a timeout if that\nhappens). You also have to bootstrap some communication protocol between the\nkernel and user space."}),"\n",(0,r.jsx)(s.p,{children:"A more robust solution to this would be building a user space scheduling\nframework that abstracts much of this complexity away from you."}),"\n",(0,r.jsx)(s.h3,{id:"production-ready-6",children:"Production Ready?"}),"\n",(0,r.jsxs)(s.p,{children:["No. This scheduler uses an ordered list for vtime scheduling, and is stricly\nless performant than just using something like ",(0,r.jsx)(s.code,{children:"scx_simple"}),". It is purely\nmeant to illustrate that it's possible to build a user space scheduler on\ntop of sched_ext."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>l});var n=i(6540);const r={},t=n.createContext(r);function a(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);