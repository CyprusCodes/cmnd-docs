"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4995],{5192:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=s(4848),r=s(8453);const t={sidebar_position:2},i=void 0,c={id:"Integrations/Facebook APIs",title:"Facebook APIs",description:"This guide will walk you through the process of setting up Facebook OAuth credentials to authenticate and authorize your cmnd integration to access Facebook APIs.",source:"@site/docs/Integrations/Facebook APIs.md",sourceDirName:"Integrations",slug:"/Integrations/Facebook APIs",permalink:"/docs/Integrations/Facebook APIs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Integrations/Facebook APIs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google APIs",permalink:"/docs/Integrations/Google APIs"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps to Set Up Facebook OAuth Credentials",id:"steps-to-set-up-facebook-oauth-credentials",level:2},{value:"1. <strong>Create a Facebook Developer Account</strong>",id:"1-create-a-facebook-developer-account",level:3},{value:"2. <strong>Create a New App</strong>",id:"2-create-a-new-app",level:3},{value:"3. <strong>Add a New Product</strong>",id:"3-add-a-new-product",level:3},{value:"4. <strong>Configure Facebook Login Settings</strong>",id:"4-configure-facebook-login-settings",level:3},{value:"5. <strong>Get Your App ID and App Secret</strong>",id:"5-get-your-app-id-and-app-secret",level:3},{value:"6. <strong>Download OAuth Credentials</strong>",id:"6-download-oauth-credentials",level:3},{value:"Required Scopes",id:"required-scopes",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This guide will walk you through the process of setting up Facebook OAuth credentials to authenticate and authorize your cmnd integration to access Facebook APIs."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Facebook Developer Account"}),": You need a Facebook developer account to access the Facebook Developer Console."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"App"}),": You\u2019ll create a new app in the Facebook Developer Console."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"steps-to-set-up-facebook-oauth-credentials",children:"Steps to Set Up Facebook OAuth Credentials"}),"\n",(0,o.jsxs)(n.h3,{id:"1-create-a-facebook-developer-account",children:["1. ",(0,o.jsx)(n.strong,{children:"Create a Facebook Developer Account"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Go to the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://developers.facebook.com/",children:"Facebook Developer website"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Log in with your Facebook account. If you don\u2019t have an account, you\u2019ll need to sign up."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Complete the registration process to enable your developer account."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"2-create-a-new-app",children:["2. ",(0,o.jsx)(n.strong,{children:"Create a New App"})]}),"\n",(0,o.jsxs)(n.p,{children:["Once logged in, go to the ",(0,o.jsx)(n.strong,{children:"My Apps"})," section."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Create App"})," button."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Choose an app type"})," dialog, select ",(0,o.jsx)(n.strong,{children:"Other"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Choose ",(0,o.jsx)(n.strong,{children:"Business"})," as the app type."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Provide a ",(0,o.jsx)(n.strong,{children:"custom app name"})," and an ",(0,o.jsx)(n.strong,{children:"email address"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"Create App"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"3-add-a-new-product",children:["3. ",(0,o.jsx)(n.strong,{children:"Add a New Product"})]}),"\n",(0,o.jsx)(n.p,{children:"After creating the app, you\u2019ll be redirected to your app\u2019s dashboard."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the left sidebar, scroll to the ",(0,o.jsx)(n.strong,{children:"Add a Product"})," section."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Under ",(0,o.jsx)(n.strong,{children:"Facebook Login"}),", click ",(0,o.jsx)(n.strong,{children:"Set up"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"4-configure-facebook-login-settings",children:["4. ",(0,o.jsx)(n.strong,{children:"Configure Facebook Login Settings"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the left sidebar, go to ",(0,o.jsx)(n.strong,{children:"Facebook Login > Settings"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure the following:"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Valid OAuth Redirect URIs"}),": Provide the URL to which Facebook will redirect users after successful login. For development, use:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:5173/redirect\n"})}),"\n",(0,o.jsx)(n.p,{children:"For the live cmnd app, use:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"https://app.cmnd.ai/redirect\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Allowed Domains for the JavaScript SDK"}),": Add your domain to enable Facebook login on your site."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"5-get-your-app-id-and-app-secret",children:["5. ",(0,o.jsx)(n.strong,{children:"Get Your App ID and App Secret"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(n.strong,{children:"Settings > Basic"})," in the left sidebar."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Here, you\u2019ll find your ",(0,o.jsx)(n.strong,{children:"App ID"})," and ",(0,o.jsx)(n.strong,{children:"App Secret"}),". You\u2019ll need these credentials to integrate Facebook login into your cmnd app."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"6-download-oauth-credentials",children:["6. ",(0,o.jsx)(n.strong,{children:"Download OAuth Credentials"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Once you've configured Facebook Login, navigate to the ",(0,o.jsx)(n.strong,{children:"Settings"})," tab for your app."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Download or securely store your ",(0,o.jsx)(n.strong,{children:"App ID"})," and ",(0,o.jsx)(n.strong,{children:"App Secret"}),", as they will be required when making requests to Facebook APIs."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"required-scopes",children:"Required Scopes"}),"\n",(0,o.jsx)(n.p,{children:"When integrating Facebook login, you'll need to request the following scopes depending on your app\u2019s requirements:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"pages_show_list"}),": Allows your app to show a list of Pages the user manages."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"pages_manage_posts"}),": Grants permission to create and manage posts on a Page."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"business_management"}),": Allows your app to manage business assets."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"pages_read_engagement"}),": Lets your app read engagement metrics for a Page."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["You have successfully set up Facebook OAuth credentials. You can now use the ",(0,o.jsx)(n.strong,{children:"App ID"}),", ",(0,o.jsx)(n.strong,{children:"App Secret"}),", and ",(0,o.jsx)(n.strong,{children:"Redirect URL"})," to integrate Facebook Login into your cmnd app. Ensure that your credentials, especially the ",(0,o.jsx)(n.code,{children:"App Secret"}),", are kept secure and not exposed in public repositories."]}),"\n",(0,o.jsxs)(n.p,{children:["For more information on using Facebook OAuth, you can refer to the ",(0,o.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/",children:"Facebook Login documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var o=s(6540);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);