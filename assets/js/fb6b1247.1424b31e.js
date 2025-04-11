"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4901],{4305:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var t=i(4848),d=i(8453);const o={id:"commands",title:"Basic Commands",description:"Commands to control the Embed Widget Chatbot in your website.",sidebar_position:3},s="Basic Commands",a={id:"cmnd-embed-widget/commands",title:"Basic Commands",description:"Commands to control the Embed Widget Chatbot in your website.",source:"@site/docs/cmnd-embed-widget/commands.md",sourceDirName:"cmnd-embed-widget",slug:"/cmnd-embed-widget/commands",permalink:"/docs/cmnd-embed-widget/commands",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"commands",title:"Basic Commands",description:"Commands to control the Embed Widget Chatbot in your website.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation & Setup",permalink:"/docs/cmnd-embed-widget/installation"},next:{title:"Configuration Options",permalink:"/docs/category/configuration-options-1"}},c={},r=[{value:"Available Commands",id:"available-commands",level:2},{value:"1. The <code>init</code> Command",id:"1-the-init-command",level:3},{value:"2. The <code>hide</code> Command",id:"2-the-hide-command",level:3},{value:"3. The <code>show</code> Command",id:"3-the-show-command",level:3},{value:"Usage Notes",id:"usage-notes",level:2},{value:"Omitting the <code>window</code> Qualifier",id:"omitting-the-window-qualifier",level:3},{value:"Practical Examples",id:"practical-examples",level:3},{value:"Sample Implementation",id:"sample-implementation",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"basic-commands",children:"Basic Commands"})}),"\n",(0,t.jsxs)(n.p,{children:["The CMND Embed Widget provides three essential commands to control its behavior on your website: ",(0,t.jsx)(n.code,{children:"init"}),", ",(0,t.jsx)(n.code,{children:"show"}),", and ",(0,t.jsx)(n.code,{children:"hide"}),". This guide explains how to use each command effectively."]}),"\n",(0,t.jsx)(n.h2,{id:"available-commands",children:"Available Commands"}),"\n",(0,t.jsxs)(n.h3,{id:"1-the-init-command",children:["1. The ",(0,t.jsx)(n.code,{children:"init"})," Command"]}),"\n",(0,t.jsx)(n.p,{children:"This command initializes the widget on your page. You must call this command before using any other widget functionality."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chatbot_id"}),": Your unique chatbot identifier"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"organization_id"}),": Your CMND organization identifier"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Both parameters must be passed as properties in an object."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="JavaScript" showLineNumbers',children:'window.cmndChat("init", {\n  chatbot_id: "YOUR_CHATBOT_ID",\n  organization_id: "YOUR_ORGANIZATION_ID",\n});\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"2-the-hide-command",children:["2. The ",(0,t.jsx)(n.code,{children:"hide"})," Command"]}),"\n",(0,t.jsx)(n.p,{children:"This command hides the widget from view without destroying it. The widget remains initialized in the background and can be shown again later."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="JavaScript" showLineNumbers',children:'window.cmndChat("hide");\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"3-the-show-command",children:["3. The ",(0,t.jsx)(n.code,{children:"show"})," Command"]}),"\n",(0,t.jsx)(n.p,{children:"This command displays the widget after it has been hidden. The widget must be initialized before this command can be used."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="JavaScript" showLineNumbers',children:'window.cmndChat("show");\n'})}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,t.jsxs)(n.h3,{id:"omitting-the-window-qualifier",children:["Omitting the ",(0,t.jsx)(n.code,{children:"window"})," Qualifier"]}),"\n",(0,t.jsxs)(n.p,{children:["All CMND commands can be called without the ",(0,t.jsx)(n.code,{children:"window"})," qualifier for brevity:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="JavaScript" showLineNumbers',children:'// These are equivalent:\nwindow.cmndChat("init", {\n  /* params */\n});\ncmndChat("init", {\n  /* params */\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"practical-examples",children:"Practical Examples"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Function Wrappers"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="JavaScript" showLineNumbers',children:'// Initialize the widget\ncmndChat("init", {\n  chatbot_id: "YOUR_CHATBOT_ID",\n  organization_id: "YOUR_ORGANIZATION_ID",\n});\n\n// Create convenience functions\nconst hideWidget = () => {\n  cmndChat("hide");\n};\n\nconst showWidget = () => {\n  cmndChat("show");\n};\n\n// Call these functions when needed\nshowWidget(); // Shows the widget\nhideWidget(); // Hides the widget\n'})}),"\n",(0,t.jsx)(n.h2,{id:"sample-implementation",children:"Sample Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Here's a complete HTML example showing how to initialize the widget and add buttons to toggle its visibility:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="HTML" showLineNumbers',children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>CMND Widget Example</title>\n\n    \x3c!-- Load the CMND Widget script --\x3e\n    <script src="https://embed.cmnd.ai/widget.js"><\/script>\n\n    \x3c!-- Initialize when DOM is ready --\x3e\n    <script>\n      document.addEventListener("DOMContentLoaded", function () {\n        cmndChat("init", {\n          chatbot_id: "YOUR_CHATBOT_ID",\n          organization_id: "YOUR_ORGANIZATION_ID",\n        });\n      });\n    <\/script>\n\n    <style>\n      /* Optional styling for the buttons */\n      button {\n        padding: 10px 15px;\n        margin: 10px;\n        border: none;\n        border-radius: 4px;\n        background-color: #0066ff;\n        color: white;\n        cursor: pointer;\n      }\n\n      button:hover {\n        background-color: #0055dd;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>CMND Widget Controls</h1>\n\n    \x3c!-- Buttons to control widget visibility --\x3e\n    <button onclick="cmndChat(\'show\')">Show Chatbot</button>\n    <button onclick="cmndChat(\'hide\')">Hide Chatbot</button>\n  </body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.admonition,{title:"Command Sequence",type:"tip",children:[(0,t.jsx)(n.p,{children:"For proper operation, follow this sequence:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Load the widget script"}),"\n",(0,t.jsxs)(n.li,{children:["Call ",(0,t.jsx)(n.code,{children:"init"})," with your credentials"]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"show"})," and ",(0,t.jsx)(n.code,{children:"hide"})," as needed to control visibility"]}),"\n"]}),(0,t.jsxs)(n.p,{children:["Remember that ",(0,t.jsx)(n.code,{children:"init"})," must be called before any other commands."]})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(6540);const d={},o=t.createContext(d);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);