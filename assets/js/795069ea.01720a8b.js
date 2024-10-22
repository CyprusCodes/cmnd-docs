"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1949],{8096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(4848),s=t(8453);const r={sidebar_position:2},i="Create Custom CMND.ai Tools with JavaScript",l={id:"getting-started/cmnd-extension-js",title:"Create Custom CMND.ai Tools with JavaScript",description:"Setting Up and Creating CMND Tools",source:"@site/docs/getting-started/cmnd-extension-js.md",sourceDirName:"getting-started",slug:"/getting-started/cmnd-extension-js",permalink:"/docs/getting-started/cmnd-extension-js",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/cmnd-extension-js.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create Custom CMND.ai Tools with Python",permalink:"/docs/getting-started/cmnd-extension-python"},next:{title:"Connect Tools",permalink:"/docs/getting-started/connect-tools"}},a={},c=[{value:"Setting Up and Creating CMND Tools",id:"setting-up-and-creating-cmnd-tools",level:2},{value:"1. Setting Up the CMND Tool Repo",id:"1-setting-up-the-cmnd-tool-repo",level:3},{value:"Requirements",id:"requirements",level:4},{value:"Steps",id:"steps",level:4},{value:"2. Creating Custom CMND Tools",id:"2-creating-custom-cmnd-tools",level:3},{value:"Steps",id:"steps-1",level:4},{value:"Example Tool Implementation",id:"example-tool-implementation",level:4},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"create-custom-cmndai-tools-with-javascript",children:"Create Custom CMND.ai Tools with JavaScript"})}),"\n",(0,o.jsx)(n.h2,{id:"setting-up-and-creating-cmnd-tools",children:"Setting Up and Creating CMND Tools"}),"\n",(0,o.jsx)(n.p,{children:"This documentation provides instructions on setting and creating custom tools to extend the CMND AI functionality."}),"\n",(0,o.jsx)(n.h3,{id:"1-setting-up-the-cmnd-tool-repo",children:"1. Setting Up the CMND Tool Repo"}),"\n",(0,o.jsx)(n.h4,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Node.js and npm installed on your system."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Clone Repository:"})," Clone the repository containing the demo node js extension codebase to your local machine."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/CyprusCodes/cmnd-extension-sample-nodejs.git\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Install Dependencies:"})," Navigate to the project directory and run the following command to install the required dependencies:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Environment Configuration:"})," Create a ",(0,o.jsx)(n.code,{children:".env"})," file in the root directory of the project and configure any necessary environment variables, such as ",(0,o.jsx)(n.code,{children:"PORT"})," for the server and any API keys required for external services."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Start the Server:"})," Run the following command to start the server:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Access Endpoints:"})," Once the server is running, you can access the provided endpoints to list available tools and execute specific CMND tools."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"2-creating-custom-cmnd-tools",children:"2. Creating Custom CMND Tools"}),"\n",(0,o.jsx)(n.p,{children:"To extend the functionality of CMND, you can create custom tools. Each tool should follow a specific structure and provide the necessary functionality."}),"\n",(0,o.jsx)(n.h4,{id:"steps-1",children:"Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Create a New Tool:"})," In the ",(0,o.jsx)(n.code,{children:"tools.js"})," file at the root directory of the project."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Define Tool Schema:"})," Use the ",(0,o.jsx)(n.code,{children:"yup"})," library to define a schema for validating the input parameters of your tool."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Implement Tool Functionality:"})," Define the functionality of your tool by creating an object with the following properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"name"}),": The name of the tool."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"description"}),": A brief description of the tool's functionality."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"category"}),": The category of the tool's functionality."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"subcategory"}),": The subcategory of the tool's functionality."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"functionType"}),": The function type of the tool's functionality."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dangerous"}),": The type of the tool's functionality that specifies whether it needs user confirmation to be used."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"associatedCommands"}),": commands associated with this tool."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"parameters"}),": The schema for validating input parameters."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rerun"}),": Specifies whether the tool can be rerun."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rerunWithDifferentParameters"}),": Specifies whether the tool can be rerun with different parameters."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"runCmd"}),": A method that executes the tool's functionality asynchronously."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Export Tool Object:"})," Export the tool object from the module so that it can be imported and used by the server."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Restart the Server:"})," After creating a new tool, restart the server to ensure that it recognizes the newly added tool."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"example-tool-implementation",children:"Example Tool Implementation"}),"\n",(0,o.jsx)(n.p,{children:"Below is an example implementation of a custom CMND tool in the tool.js file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'require("dotenv").config();\nconst axios = require("axios"); // Only for external API calls\nconst yup = require("yup");\nconst yupToJsonSchema = require("./yupToJsonSchema");\n\nconst yourSchema = yup.object({\n  // Define your validation schema here Use yup methods to define validation rules for each parameter\n  // parameter1: yup.string().required(),\n  // parameter2: yup.number().positive(),\n});\n\nconst yourJSONSchema = yupToJsonSchema(yourSchema);\n\nconst YOUR_TOOL_NAME = {\n  name: "your_tool_name",\n  description: "Describe what your tool does and how it works here", // Describe functionality\n  category: "your_category", // Choose a relevant category\n  subcategory: "your_subcategory", // Specify a subcategory if applicable\n  functionType: "your_function_type", // Specify backend or frontend\n  dangerous: false, // Set to true if user confirmation is required\n  associatedCommands: [], // List any associated commands (if any)\n  prerequisites: [], // List any prerequisites for your tool to run\n  parameters: yourJSONSchema,\n  rerun: true, // Set to false if rerun is not allowed\n  rerunWithDifferentParameters: true, // Set to false if different parameters are not allowed\n  runCmd: async (\n    {\n      /* your parameter names here */\n    }\n  ) => {\n    try {\n      // Implement your tool\'s logic here:\n\n      const data = await axios.get(/* url based on parameters */);\n      return JSON.stringify(data);\n    } catch (err) {\n      // Handle potential errors and return a meaningful message\n      return "Error trying to execute the tool";\n    }\n  },\n};\n\n// Add your tool object to the tools array (assuming it exists)\nconst tools = [YOUR_TOOL_NAME, YOUR_OTHER_TOOL_NAME];\nmodule.exports = tools; // Export the tool object\n'})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"By following the steps, you can set up the CMND Node Js Extension Tools and create custom tools to suit your specific needs. Leveraging these tools can help streamline your workflow and automate various tasks effectively."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);