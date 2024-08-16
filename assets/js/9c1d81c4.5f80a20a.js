"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8548],{7472:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var s=o(4848),i=o(8453);const n={sidebar_position:1},l="Post Tool Call Prompting",r={id:"prompting/post-tool-call-prompt",title:"Post Tool Call Prompting",description:"Overview",source:"@site/docs/prompting/post-tool-call-prompt.md",sourceDirName:"prompting",slug:"/prompting/post-tool-call-prompt",permalink:"/docs/prompting/post-tool-call-prompt",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/prompting/post-tool-call-prompt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Prompting",permalink:"/docs/category/prompting"}},a={},h=[{value:"Overview",id:"overview",level:2},{value:"What is Post-Tool Call Prompting?",id:"what-is-post-tool-call-prompting",level:2},{value:"How can we implement Post-Tool Call Prompting in CMND?",id:"how-can-we-implement-post-tool-call-prompting-in-cmnd",level:2},{value:"Here is how Post-Tool Call Prompting comes into play:",id:"here-is-how-post-tool-call-prompting-comes-into-play",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"post-tool-call-prompting",children:"Post Tool Call Prompting"}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"In AI-driven applications, ensuring the smooth interaction between users, tools, and the LLM is essential. To address the challenge of controlling LLM behavior based on tool outputs, we are introducing a technique called Post-Tool Call Prompting. This technique allows developers to adjust the behavior of the LLM after the tool executes and before the LLM gives the results to the user, enabling specific flows based on the outcomes of the tools used."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-post-tool-call-prompting",children:"What is Post-Tool Call Prompting?"}),"\n",(0,s.jsx)(t.p,{children:'Post-Tool Call Prompting is a strategy where a message with a role of "user" and the property "hiddenFromUser": true is injected into the conversation. Although this message is invisible to the user, it serves an essential function for the LLM, guiding its behavior when working with tools. This hidden message helps create pre-defined conditions and actions for the LLM to follow based on the tool\'s execution results.'}),"\n",(0,s.jsx)(t.p,{children:"By utilizing this technique, you can condition the LLM to respond differently depending on the outcome of tool operations, thus improving the flow and user experience."}),"\n",(0,s.jsx)(t.h2,{id:"how-can-we-implement-post-tool-call-prompting-in-cmnd",children:"How can we implement Post-Tool Call Prompting in CMND?"}),"\n",(0,s.jsx)(t.p,{children:"Consider the example where a user is logging into a system. The process involves the user providing their username and password, which are then sent to a backend tool to validate the credentials. The flow of the conversation with the LLM may need to adjust based on the tool's response\u2014whether it's a success or failure."}),"\n",(0,s.jsx)(t.h2,{id:"here-is-how-post-tool-call-prompting-comes-into-play",children:"Here is how Post-Tool Call Prompting comes into play:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"User Interaction:\nThe user provides their login credentials, which are passed to the backend tool to process."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Post-Tool Call Prompting:\nA hidden message is sent with the role of "user" and "hiddenFromUser": true. This message contains instructions that condition the behavior of the LLM based on the tool\'s output.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Here\u2019s a visual example to illustrate how this technique is implemented."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"../../static/img/assistants.png",src:o(4691).A+"",width:"2456",height:"1058"})}),"\n",(0,s.jsx)(t.p,{children:"Flow of Messages: The flow of messages in the conversation would look like this:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"../../static/img/assistants.png",src:o(3949).A+"",width:"787",height:"1255"})}),"\n",(0,s.jsx)(t.p,{children:"In this flow, after the tool attempts to validate the user's credentials, the hidden message will prompt the LLM to handle the failure case by asking the user to retry. This is all done without the user being aware of the hidden instructions guiding the LLM's behavior."}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"Post-Tool Call Prompting is a powerful technique that allows developers to adjust the behavior of LLMs in real time based on the outcomes of tool executions. By injecting hidden messages that guide the LLM after a tool completes, developers can manage different scenarios such as failures or successes more effectively, ensuring that users have a smooth and intuitive experience."}),"\n",(0,s.jsx)(t.p,{children:"This technique is particularly useful for applications that rely heavily on backend tools to process user requests, as it provides a seamless way to handle complex workflows without compromising the user experience."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3949:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/messages-array-3f1fcfb12bcb430d0476f9a7d34188ab.png"},4691:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/post-tool-call-f85de7e7cf70a677a3fa3daa148585cc.png"},8453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>r});var s=o(6540);const i={},n=s.createContext(i);function l(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);