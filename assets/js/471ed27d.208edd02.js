"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77],{6493:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(4848),a=n(8453);const o={sidebar_position:3},i="Tools",r={id:"introduction/tools",title:"Tools",description:'Tools serve as a means to enable the Language Learning Model (LLM) to perform tasks that it initially lacks the capability to execute. For instance, if an assistant lacks the ability to search the internet, a tool can bridge this gap by accessing online resources to support the assistant\'s primary task. For instance, if a user prompt requests information about "CMND.ai", but the LLM have not been trained on a data that contains information about CMND.ai, the LLM receives this prompt and autonomously decides to employ a predefined tool to scour the internet for relevant information on the topic. Subsequently, the LLM processes and formats this retrieved data before presenting it to the user as an answer.',source:"@site/docs/introduction/tools.md",sourceDirName:"introduction",slug:"/introduction/tools",permalink:"/docs/introduction/tools",draft:!1,unlisted:!1,editUrl:"https://github.com/CyprusCodes/cmnd-docs/tree/main/docs/introduction/tools.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Assistants",permalink:"/docs/introduction/assistants"},next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},c={},l=[{value:"The interaction between Language Learning Models (LLMs), Assistants, and Tools",id:"the-interaction-between-language-learning-models-llms-assistants-and-tools",level:2}];function d(t){const e={h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,a.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"tools",children:"Tools"})}),"\n",(0,s.jsx)(e.p,{children:'Tools serve as a means to enable the Language Learning Model (LLM) to perform tasks that it initially lacks the capability to execute. For instance, if an assistant lacks the ability to search the internet, a tool can bridge this gap by accessing online resources to support the assistant\'s primary task. For instance, if a user prompt requests information about "CMND.ai", but the LLM have not been trained on a data that contains information about CMND.ai, the LLM receives this prompt and autonomously decides to employ a predefined tool to scour the internet for relevant information on the topic. Subsequently, the LLM processes and formats this retrieved data before presenting it to the user as an answer.'}),"\n",(0,s.jsx)(e.p,{children:"When considering the creation of a tool, the focus lies in providing the assistant with functionalities to aid its task execution. For instance, if we aim to develop an assistant capable of retrieving weather information, and the assistant lacks the ability to access real-time data, we must equip it with a function to perform this task. Such a function can be an API, database query, or any mechanism capable of returning relevant data."}),"\n",(0,s.jsx)(e.p,{children:'Regarding the interaction between tools and assistants, the process unfolds as follows: Upon receiving a user prompt, such as "What is the weather in Jerusalem," the LLM autonomously identifies the need for a tool to accomplish the task, as it lacks the capability to do so itself. Subsequently, the LLM extracts relevant parameters (City: Jerusalem) from the user prompt and utilizes them to execute the tool (function). The function then carries out the necessary task and returns the data. Finally, the assistant utilizes this retrieved data to formulate the final response to the user.'}),"\n",(0,s.jsx)(e.h2,{id:"the-interaction-between-language-learning-models-llms-assistants-and-tools",children:"The interaction between Language Learning Models (LLMs), Assistants, and Tools"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"../../static/img/assistants.png",src:n(2014).A+"",width:"735",height:"296"})})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},2014:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/assistants-9b095857f4835ff5159f98f7db82f261.png"},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function i(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);