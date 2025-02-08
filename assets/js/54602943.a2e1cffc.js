"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6870],{2625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(4848),r=t(8453);const s={sidebar_position:3},i="Memory Object",a={id:"tools_config/memory-object",title:"Memory Object",description:"Introduction",source:"@site/docs/tools_config/memory-object.md",sourceDirName:"tools_config",slug:"/tools_config/memory-object",permalink:"/docs/tools_config/memory-object",draft:!1,unlisted:!1,editUrl:"https://github.com/CyprusCodes/cmnd-docs/tree/main/docs/tools_config/memory-object.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Rerun",permalink:"/docs/tools_config/rerun"},next:{title:"Prerequisites",permalink:"/docs/tools_config/prerequisites"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to use:",id:"how-to-use",level:2},{value:"Conclusion:",id:"conclusion",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"memory-object",children:"Memory Object"})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"A memory object serves the purpose of transferring large chunks of data between multiple independent tools within one conversation. This is useful when you want to keep important but large contextual information."}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use",children:"How to use:"}),"\n",(0,o.jsx)(n.p,{children:"When writing a tool, add a memory object within the tool parameters and then return it within the response."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def fetch_titanic_data(memory: dict):\n    """\n    Fetch Titanic dataset from GitHub CSV.\n    """\n    # Raw GitHub content URL\n    github_url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"\n\n    try:\n        response = requests.get(github_url)\n        response.raise_for_status()\n\n        # Read CSV directly into pandas DataFrame\n        df = pd.read_csv(io.StringIO(response.text))\n\n        # Store DataFrame in memory\n        memory["titanic_dataframe"] = df\n\n        return {\n            "responseString": f"Successfully fetched {len(df)} records",\n            "memory": memory\n        }\n    except Exception as e:\n        return {\n            "responseString": f"Error fetching data: {str(e)}",\n            "memory": memory\n        }\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"Once a memory object is initialized, it can be used within that conversation by another tool that the memory object was passed to, for more in-depth analysis."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'def count_survivors(memory: dict):\n    """\n    Count the number of survivors from the stored Titanic data.\n    """\n    if "titanic_dataframe" not in memory:\n        return {\n            "responseString": "No Titanic data in memory. Fetch data first.",\n            "memory": memory\n        }\n    \n    # Retrieve DataFrame from memory\n    df = memory["titanic_dataframe"]\n    \n    # Count survivors\n    survivors_count = len(df[df[\'Survived\'] == 1])\n    total_passengers = len(df)\n    survival_info = {\n                "Number of total survivors":f"{survivors_count}",\n                "Total number of passengers":f"{total_passengers}",\n    }\n    \n    return survival_info\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"Memory object is important for efficiency and dependability. By storing only essential data, reducing the use of too many tokens or too much contextual information. This is illustrated by the example of the Titanic, where storing data in memory allows for easier transfer to other tools for analysis, like determining the number of survivors."}),"\n",(0,o.jsx)(n.p,{children:"Here is a different example on how memory object can be used:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'\ndef get_passenger_details(memory: dict):\n    """\n    Get list of passengers with their fare, age, and sex.\n    In order to calculate some basic statistics about the data.\n    """\n    if "titanic_dataframe" not in memory:\n        return {\n            "responseString": "Please load the dataset first",\n            "memory": memory\n        }\n\n    fares_info = memory["titanic_dataframe"][[\'Name\', \'Sex\', \'Age\', \'Fare\']]\n\n    return f"{fares_info}"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Here we are passing the whole table to the function and then using pandas library to pass only the necessary columns to LLM for in debt analysis of fares."}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use memory object to efficiently pass large chunks of data between tools."}),"\n",(0,o.jsx)(n.li,{children:'Add "memory" to parameters list in order to use it.'}),"\n",(0,o.jsx)(n.li,{children:"Return the memory object as well as a response in order to pass it to other tools."}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);