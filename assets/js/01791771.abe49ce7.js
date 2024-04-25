"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1102],{1058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(4848),s=t(8453);const o={sidebar_position:1},r="Documentation",i={id:"tutorial-extras copy/documentation",title:"Documentation",description:"cmnd-chat-bot-package",source:"@site/docs/tutorial-extras copy/documentation.md",sourceDirName:"tutorial-extras copy",slug:"/tutorial-extras copy/documentation",permalink:"/docs/tutorial-extras copy/documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras copy/documentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CMND Chatbot Package",permalink:"/docs/category/cmnd-chatbot-package"}},c={},d=[{value:"cmnd-chat-bot-package",id:"cmnd-chat-bot-package",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"With yarn",id:"with-yarn",level:3},{value:"Example implementation",id:"example-implementation",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"documentation",children:"Documentation"}),"\n",(0,a.jsx)(n.h2,{id:"cmnd-chat-bot-package",children:"cmnd-chat-bot-package"}),"\n",(0,a.jsx)(n.p,{children:"This npm package provides a customizable chatbot component for use in web applications, designed specifically for Node.js environments."}),"\n",(0,a.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(n.p,{children:"Before using this package, ensure you have the following prerequisites installed on your computer:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Node.js (version 12 or higher)"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Package URL:"})," ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/cmnd-chat-bot-package",children:"cmnd-chat-bot-package on npm"})]}),"\n",(0,a.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["You can install the ",(0,a.jsx)(n.code,{children:"cmnd-chat-bot-package"})," from npm using npm or yarn:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install cmnd-chat-bot-package\n"})}),"\n",(0,a.jsx)(n.h3,{id:"with-yarn",children:"With yarn"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add cmnd-chat-bot-package\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-implementation",children:"Example implementation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'import { ChatProvider, CmndChatBot } from "test-cmnd-chatbot";\nimport { useEffect } from "react";\n\nconst components = {\n  messages({ props }) {\n    const messages = props.chats.data?.messages || [];\n\n    useEffect(() => {\n      const comp = document.querySelector(`#lastItemId`);\n      if (!comp) return;\n\n      setTimeout(() => {\n        comp.scrollIntoView({\n          behavior: "smooth",\n          block: "end", // Scroll to the bottom of the container\n        });\n      }, 500);\n    }, [messages.length]);\n\n    const getchild = () => {\n      if (props.chats.error) {\n        return <h1>Error</h1>;\n      }\n      if (!props.chats.data?.messages?.length)\n        return <h1>Ask me a question</h1>;\n\n      return (\n        <div>\n          {messages.map((eachMessage, msgIndex) => (\n            <div\n              key={eachMessage.id}\n              id={msgIndex === messages.length - 1 ? "lastItemId" : undefined}\n            >\n              {eachMessage.message + ""}\n            </div>\n          ))}\n        </div>\n      );\n    };\n\n    return <div style={{ flexGrow: 1 }}>{getchild()}</div>;\n  },\n  userInputBox({ props }) {\n    return (\n      <div\n        style={{\n          display: "flex",\n          gap: "1rem",\n        }}\n      >\n        <input\n          style={{\n            flexGrow: 1,\n          }}\n          type="text"\n          value={props.userInputData.textValue}\n          onChange={(e) => props.userInputData.setTextValue(e.target.value)}\n          placeholder="Type here"\n          disabled={props.userInputData.isSending}\n        />\n        <button\n          onClick={props.userInputData.submitMessage}\n          disabled={props.userInputData.isSending}\n        >\n          {props.userInputData.isSending ? "Sending..." : "Send"}\n        </button>\n      </div>\n    );\n  },\n  error({ props }) {\n    return <div>Error: {props.chats.error + ""}</div>;\n  },\n};\n\nfunction App() {\n  return (\n    <div>\n      <ChatProvider apiKey="xxxxx" chatbotId={1} organizationId={1}>\n        {(params) => <CmndChatBot {...params} components={components} />}\n      </ChatProvider>\n    </div>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can find an example implementation from ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/cmnd-chat-bot-package",children:"here"})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(6540);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);