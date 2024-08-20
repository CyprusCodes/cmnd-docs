"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6520],{5770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),r=t(8453);const o={sidebar_position:2},s="Rerun",a={id:"tools_config/rerun",title:"Rerun",description:"In CMND.ai, where you can create custom functions to interact with the language model, the rerun attribute plays a crucial role in determining the availability of these functions after their initial execution. The rerun attribute allows developers to control whether a function remains available for repeated use or is removed from the list of available functions after it has been invoked once.",source:"@site/docs/tools_config/rerun.md",sourceDirName:"tools_config",slug:"/tools_config/rerun",permalink:"/docs/tools_config/rerun",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools_config/rerun.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Post Tool Call",permalink:"/docs/tools_config/post-tool-call-prompt"},next:{title:"Rerun With Different Parameters",permalink:"/docs/tools_config/rerunWithDifferentParameters"}},l={},c=[];function u(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"rerun",children:"Rerun"})}),"\n",(0,i.jsx)(n.p,{children:"In CMND.ai, where you can create custom functions to interact with the language model, the rerun attribute plays a crucial role in determining the availability of these functions after their initial execution. The rerun attribute allows developers to control whether a function remains available for repeated use or is removed from the list of available functions after it has been invoked once."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"rerun"})," attribute is a boolean flag that can be set to either True or False within the function configuration."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["rerun: False: When ",(0,i.jsx)(n.code,{children:"rerun"})," is set to False, the function remains part of the available tools indefinitely, allowing it to be executed multiple times. This is useful for functions that are intended to be reusable and are not meant to be one-time operations."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["rerun: True: When ",(0,i.jsx)(n.code,{children:"rerun"})," is set to True, the function will appear in the available tools only until it is used for the first time. After its initial execution, it will be removed from the available tools, making it unavailable for future use. This is ideal for functions designed for one-time tasks or operations where repeated execution is not necessary or desired."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Consider the following function configuration for ",(0,i.jsx)(n.code,{children:"echo_username"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'{\n    "name": "echo_username",\n    "description": "echos the username saved in the memory",\n    "parameters": custom_json_schema(EchoUsernameSchema),\n    "runCmd": echo_username,\n    "isDangerous": False,\n    "functionType": "backend",\n    "isLongRunningTool": False,\n    "rerun": False\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In this example, ",(0,i.jsx)(n.code,{children:"rerun"}),": False indicates that the echo_username function will always be available for execution. Users can invoke this function multiple times as needed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"rerun"})," attribute were set to True, the echo_username function will not be available for execution after the first execution, preventing it from being called again unless it is re-added manually or through some other mechanism."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Considerations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Persistent Functions: Use ",(0,i.jsx)(n.code,{children:"rerun"}),": False for functions that provide utility throughout the lifecycle of the application or conversation, such as those that retrieve or display information repeatedly."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["One-Time Functions: Use ",(0,i.jsx)(n.code,{children:"rerun"}),": True for functions meant for single-use scenarios, such as initializing a process, generating a unique identifier, or any operation where repeat execution could cause conflicts or unintended behavior."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["By carefully setting the ",(0,i.jsx)(n.code,{children:"rerun"})," attribute, developers can fine-tune the behavior and availability of custom functions within CMND, ensuring a smooth and controlled user experience."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);