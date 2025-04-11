"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85],{1296:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(4848),a=n(8453);const o={id:"quickstart",title:"Quickstart with CMND.ai",sidebar_position:1},s="Quickstart with CMND.ai",r={id:"quickstart",title:"Quickstart with CMND.ai",description:"To get you started, this guide will walk you through the simplest way to use CMND.ai \u2014 by creating a chatbot and embedding it into a React application.",source:"@site/docs/quickstart_with_cmnd.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"quickstart",title:"Quickstart with CMND.ai",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"CMND React SDK",permalink:"/docs/category/cmnd-react-sdk"}},c={},d=[{value:"1. Create a Chatbot on CMND.ai",id:"1-create-a-chatbot-on-cmndai",level:2},{value:"2. Install the CMND React SDK",id:"2-install-the-cmnd-react-sdk",level:2},{value:"3. Embed the Chatbot in Your App",id:"3-embed-the-chatbot-in-your-app",level:2},{value:"Need a full example?",id:"need-a-full-example",level:2},{value:"\ud83c\udf89 That&#39;s it!",id:"-thats-it",level:2}];function l(t){const e={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...t.components},{Details:o}=e;return o||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"quickstart-with-cmndai",children:"Quickstart with CMND.ai"})}),"\n",(0,i.jsx)(e.p,{children:"To get you started, this guide will walk you through the simplest way to use CMND.ai \u2014 by creating a chatbot and embedding it into a React application."}),"\n",(0,i.jsx)(e.admonition,{title:"What you'll achieve",type:"note",children:(0,i.jsx)(e.p,{children:"You'll have a working AI chatbot in your React app in just a few minutes."})}),"\n",(0,i.jsx)(e.h2,{id:"1-create-a-chatbot-on-cmndai",children:"1. Create a Chatbot on CMND.ai"}),"\n",(0,i.jsx)(e.p,{children:"Before jumping into code, you'll need a CMND account."}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Don't have an account yet?"}),(0,i.jsxs)(e.p,{children:["If you don't have a CMND account, ",(0,i.jsx)(e.a,{href:"https://calendly.com/ersel-aker/cmnd-ai-exploration",children:"sign up here"}),"."]})]}),"\n",(0,i.jsx)(e.p,{children:"Once you're logged in:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Navigate to the ",(0,i.jsx)(e.strong,{children:"Chatbots"})," section from the sidebar.",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.img,{alt:"Chatbots sidebar",src:n(1044).A+"",width:"256",height:"514"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Create Chatbot"})," button in the top-right corner."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Choose the ",(0,i.jsx)(e.strong,{children:"React Chatbot"})," option.",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.img,{alt:"React chatbot option",src:n(8648).A+"",width:"451",height:"356"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Configure your chatbot in the ",(0,i.jsx)(e.strong,{children:"General"})," tab (title, model type, output token length, cost limit, token limit, system prompt)."]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"You can start with the default settings and adjust later as needed"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"General tab settings",src:n(8139).A+"",width:"889",height:"594"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Create Chatbot"})," button in the top right corner \u2014 and just like that, your chatbot is ready to go!"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"2-install-the-cmnd-react-sdk",children:"2. Install the CMND React SDK"}),"\n",(0,i.jsx)(e.p,{children:"Inside your React project, install the SDK:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Terminal"',children:"npm install @cmnd-ai/chatbot-react\n"})}),"\n",(0,i.jsx)(e.h2,{id:"3-embed-the-chatbot-in-your-app",children:"3. Embed the Chatbot in Your App"}),"\n",(0,i.jsxs)(e.p,{children:["Now plug the chatbot into your React app by using the ",(0,i.jsx)(e.code,{children:"ChatProvider"})," and ",(0,i.jsx)(e.code,{children:"CmndChatBot"})," components from the SDK:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",metastring:'title="Javascript" showLineNumbers',children:'import { ChatProvider, CmndChatBot } from "@cmnd-ai/chatbot-react";\n\nconst App = () => {\n  return (\n    <ChatProvider\n      baseUrl="https://api.cmnd.ai"\n      chatbotId={YOUR_CHATBOT_ID}\n      organizationId={YOUR_ORG_ID}\n    >\n      <CmndChatBot />\n    </ChatProvider>\n  );\n};\n\nexport default App;\n'})}),"\n",(0,i.jsx)(e.admonition,{title:"Important",type:"caution",children:(0,i.jsxs)(e.p,{children:["Replace ",(0,i.jsx)(e.code,{children:"YOUR_CHATBOT_ID"})," and ",(0,i.jsx)(e.code,{children:"YOUR_ORG_ID"})," with the actual values provided in the ",(0,i.jsx)(e.strong,{children:"Embed"})," tab after you create your chatbot."]})}),"\n",(0,i.jsx)(e.h2,{id:"need-a-full-example",children:"Need a full example?"}),"\n",(0,i.jsxs)(e.p,{children:["Check out our open-source example app: ",(0,i.jsx)(e.a,{href:"https://github.com/CyprusCodes/cmnd-react-chatbot-example",children:"CMND React Chatbot Example on GitHub"})]}),"\n",(0,i.jsx)(e.h2,{id:"-thats-it",children:"\ud83c\udf89 That's it!"}),"\n",(0,i.jsx)(e.p,{children:"You now have a fully working AI chatbot running inside your React application. From here, you can explore advanced features like connecting tools, building assistants, and customizing your chatbot even further using the CMND React SDK."})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},8139:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/chatbot-general-tab-settings-a26d394717b79db5294dde136f1baf0c.png"},8648:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/react-chatbot-option-6ad95306d656517b6a3a04c4b537d4ea.png"},1044:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/sidebar-chatbots-6eed37a5fab774eb29b4861431d78220.png"},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>r});var i=n(6540);const a={},o=i.createContext(a);function s(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);