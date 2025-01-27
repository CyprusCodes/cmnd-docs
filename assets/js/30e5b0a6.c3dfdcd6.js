"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6155],{2271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>r});var i=t(4848),s=t(8453);const d={sidebar_position:3},o="Basic Commands",c={id:"Embed Widget/commands",title:"Basic Commands",description:"CMND embed widget has 3 basic commands init, show and hide.",source:"@site/docs/Embed Widget/commands.md",sourceDirName:"Embed Widget",slug:"/Embed Widget/commands",permalink:"/docs/Embed Widget/commands",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Embed Widget/commands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/Embed Widget/usage"},next:{title:"Configuration",permalink:"/docs/Embed Widget/configuration"}},a={},r=[];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"basic-commands",children:"Basic Commands"})}),"\n",(0,i.jsxs)(n.p,{children:["CMND embed widget has 3 basic commands ",(0,i.jsx)(n.code,{children:"init"}),", ",(0,i.jsx)(n.code,{children:"show"})," and ",(0,i.jsx)(n.code,{children:"hide"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["The ",(0,i.jsx)(n.code,{children:"init"})," command"]}),": This command is used to initialize the embed widget, it is mandatory to call this command before the embed widget can be used.\nIt takes parameters ",(0,i.jsx)(n.code,{children:"Organization ID"})," and ",(0,i.jsx)(n.code,{children:"Chatbot ID"})," inside an object."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Below is an example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'//my_script.js\nwindow.cmndChat("init", {\n  chatbot_id: "YOUR CHATBOT ID HERE",\n  organization_id: "YOUR ORGANIZATION ID HERE",\n});\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["The ",(0,i.jsx)(n.code,{children:"hide"})," command"]}),": This command is used to hide the widget, it does not destroy the widget but hides it from the ",(0,i.jsx)(n.code,{children:"DOM"}),". If you call this command you can use the ",(0,i.jsx)(n.code,{children:"show"})," command to show the widget on the ",(0,i.jsx)(n.code,{children:"DOM"}),". It does not take any param."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Below is an example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'//my_script.js\nwindow.cmndChat("hide");\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["The ",(0,i.jsx)(n.code,{children:"show"})," command:"]})," This command is used to show the widget on the DOM after it has been hidden using the hide command. It does not take any parameters."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Below is an example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'//my_script.js\nwindow.cmndChat("show");\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["These CMND commands can be called without calling ",(0,i.jsx)(n.code,{children:"window"})]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Below is an example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'//my_script.js\ncmndChat("init", {\n  chatbot_id: "YOUR CHATBOT ID HERE",\n  organization_id: "YOUR ORGANIZATION ID HERE",\n});\n\nconst hideWidget = () => {\n  cmndChat("hide");\n};\n\nconst showWidget = () => {\n  cmndChat("show");\n};\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Below is a full use case"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-HTML",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <script src="https://embed.cmnd.ai/widget.js"><\/script>\n    <script defer>\n        document.addEventListener("DOMContentLoaded", function() {\n            cmndChat("init", {\n                chatbot_id: "YOUR CHATBOT ID HERE",\n                organization_id: "YOUR ORGANIZATION ID HERE",\n            });\n        });\n    <\/script>\n</head>\n<body>\n    <button onclick="cmndChat(\'show\')">\n        Show Chatbot\n    </button>\n    <button onclick="cmndChat(\'hide\')">\n        Hide ChatBot\n    </button>\n</body>\n</html>\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const s={},d=i.createContext(s);function o(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);