"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5500],{9666:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=i(4848),t=i(8453);const s={sidebar_position:1},o="Prerequisites",a={id:"prerequisites/prerequisites",title:"Prerequisites",description:"Overview:",source:"@site/docs/prerequisites/prerequisites.md",sourceDirName:"prerequisites",slug:"/prerequisites/",permalink:"/docs/prerequisites/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/prerequisites/prerequisites.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/docs/category/prerequisites"}},c={},l=[{value:"Overview:",id:"overview",level:2},{value:"Usage:",id:"usage",level:2},{value:"Example:",id:"example",level:2},{value:"Considerations:",id:"considerations",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"prerequisites",children:"Prerequisites"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview:"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"prerequisites"})," attribute in CMND's function configuration is used to specify dependencies that must be fulfilled before a tool can be executed. By defining a list of prerequisite tools, developers can enforce an execution order, ensuring that certain tools are run in a specific sequence to maintain logic and consistency within the application/conversation."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage:"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"prerequisites"})," attribute is an array of tool names that must be executed before the current tool becomes available. If any of the tools listed in the ",(0,r.jsx)(n.code,{children:"prerequisites"})," array have not been run, the current tool will not be available for execution."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Example Array: ["tool1", "tool2", "tool3"]: In this scenario, the current tool will only become available once tool1, tool2, and tool3 have all been executed.'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example:"}),"\n",(0,r.jsx)(n.p,{children:"Consider the following function configuration for echo_username:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'{\n    "name": "echo_username",\n    "description": "echos the username saved in the memory",\n    "parameters": custom_json_schema(EchoUsernameSchema),\n    "runCmd": echo_username,\n    "isDangerous": False,\n    "functionType": "backend",\n    "isLongRunningTool": False,\n    "prerequisites": ["product_finder", "put_username"]\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In this example, the ",(0,r.jsx)(n.code,{children:"echo_username"})," function has two ",(0,r.jsx)(n.code,{children:"prerequisites"}),": product_finder and put_username. This means that before the echo_username function can be executed or made available in the availableFunction array, both product_finder and put_username must be run."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If either of these prerequisite tools has not been executed, the echo_username function will not appear as an option for the user or system to invoke."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"considerations",children:"Considerations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Execution Order: The ",(0,r.jsx)(n.code,{children:"prerequisites"})," attribute is crucial for maintaining the correct execution order in complex workflows. By setting ",(0,r.jsx)(n.code,{children:"prerequisites"}),", developers can ensure that necessary conditions or data are in place before a tool runs."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Availability Control: Tools with unmet ",(0,r.jsx)(n.code,{children:"prerequisites"})," will remain hidden or unavailable, preventing premature or incorrect execution that could lead to errors or incomplete operations."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"prerequisites"})," attribute adds a layer of control and safety to CMND, making sure that tools are only used when the necessary conditions are met, thereby enhancing the reliability and effectiveness of the application."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(6540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);