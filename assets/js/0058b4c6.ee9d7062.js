"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[849],{6164:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Concepts","href":"/docs/introduction/general-concepts","docId":"introduction/general-concepts","unlisted":false},{"type":"link","label":"Assistants","href":"/docs/introduction/assistants","docId":"introduction/assistants","unlisted":false},{"type":"link","label":"Tools","href":"/docs/introduction/tools","docId":"introduction/tools","unlisted":false}],"href":"/docs/category/introduction"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create Custom CMND.ai Tools with Python","href":"/docs/getting-started/cmnd-extension-python","docId":"getting-started/cmnd-extension-python","unlisted":false},{"type":"link","label":"Create Custom CMND.ai Tools with JavaScript","href":"/docs/getting-started/cmnd-extension-js","docId":"getting-started/cmnd-extension-js","unlisted":false},{"type":"link","label":"Connect Tools","href":"/docs/getting-started/connect-tools","docId":"getting-started/connect-tools","unlisted":false}],"href":"/docs/category/getting-started"},{"type":"category","label":"Embed Widget","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/Embed Widget/installation","docId":"Embed Widget/installation","unlisted":false},{"type":"link","label":"Usage","href":"/docs/Embed Widget/usage","docId":"Embed Widget/usage","unlisted":false},{"type":"link","label":"Commands","href":"/docs/Embed Widget/commands","docId":"Embed Widget/commands","unlisted":false},{"type":"link","label":"Configuration","href":"/docs/Embed Widget/configuration","docId":"Embed Widget/configuration","unlisted":false}],"href":"/docs/category/embed-widget"},{"type":"category","label":"CMND Chatbot Package","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Documentation","href":"/docs/tutorial-extras copy/documentation","docId":"tutorial-extras copy/documentation","unlisted":false}],"href":"/docs/category/cmnd-chatbot-package"},{"type":"category","label":"Tool Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Post Tool Call","href":"/docs/tools_config/post-tool-call-prompt","docId":"tools_config/post-tool-call-prompt","unlisted":false},{"type":"link","label":"Rerun","href":"/docs/tools_config/rerun","docId":"tools_config/rerun","unlisted":false},{"type":"link","label":"Rerun With Different Parameters","href":"/docs/tools_config/rerunWithDifferentParameters","docId":"tools_config/rerunWithDifferentParameters","unlisted":false},{"type":"link","label":"Prerequisites","href":"/docs/tools_config/prerequisites","docId":"tools_config/prerequisites","unlisted":false}],"href":"/docs/category/tool-configuration"}]},"docs":{"Embed Widget/commands":{"id":"Embed Widget/commands","title":"Commands","description":"CMND embed widget has 3 commands init, show and hide.","sidebar":"tutorialSidebar"},"Embed Widget/configuration":{"id":"Embed Widget/configuration","title":"Configuration","description":"There are two types of configurations for cmnd namely hardcoded configurations and inherited configurations.","sidebar":"tutorialSidebar"},"Embed Widget/installation":{"id":"Embed Widget/installation","title":"Installation","description":"1. To install the CMND embed widget you will need the HTML script tag pointing to the CMND embed widget bundle of for the embed widget","sidebar":"tutorialSidebar"},"Embed Widget/usage":{"id":"Embed Widget/usage","title":"Usage","description":"1. Before you begin, you will need your Organization ID and your Chatbot ID these can be gotten from CMND.","sidebar":"tutorialSidebar"},"getting-started/cmnd-extension-js":{"id":"getting-started/cmnd-extension-js","title":"Create Custom CMND.ai Tools with JavaScript","description":"Setting Up and Creating CMND Tools","sidebar":"tutorialSidebar"},"getting-started/cmnd-extension-python":{"id":"getting-started/cmnd-extension-python","title":"Create Custom CMND.ai Tools with Python","description":"The CMND.ai Extension empowers users to craft custom tools, integrate them into CMND.ai, and seamlessly employ them alongside their own assistants.","sidebar":"tutorialSidebar"},"getting-started/connect-tools":{"id":"getting-started/connect-tools","title":"Connect Tools","description":"Setting Up CMND Tools","sidebar":"tutorialSidebar"},"introduction/assistants":{"id":"introduction/assistants","title":"Assistants","description":"computer programs that serve as virtual assistants and communicate with users through text-based interfaces on websites, social media platforms and messaging apps. These chatbots can assist customers, respond to inquiries or start a discussion with them. By equiping the asssitant with tools, the asssitant will be able to perform tasks that the LLM cannot do, and give it\'s result to the LLM to give you the final answer.","sidebar":"tutorialSidebar"},"introduction/general-concepts":{"id":"introduction/general-concepts","title":"Concepts","description":"- LLM: A type of AI, like ChatGPT, trained on vast amounts of text data to generate human-like responses based on text inputs.","sidebar":"tutorialSidebar"},"introduction/tools":{"id":"introduction/tools","title":"Tools","description":"Tools serve as a means to enable the Language Learning Model (LLM) to perform tasks that it initially lacks the capability to execute. For instance, if an assistant lacks the ability to search the internet, a tool can bridge this gap by accessing online resources to support the assistant\'s primary task. For instance, if a user prompt requests information about \\"CMND.ai\\", but the LLM have not been trained on a data that contains information about CMND.ai, the LLM receives this prompt and autonomously decides to employ a predefined tool to scour the internet for relevant information on the topic. Subsequently, the LLM processes and formats this retrieved data before presenting it to the user as an answer.","sidebar":"tutorialSidebar"},"tools_config/post-tool-call-prompt":{"id":"tools_config/post-tool-call-prompt","title":"Post Tool Call","description":"In AI-driven applications, ensuring seamless interaction between users, tools, and the LLM is crucial. To address the challenge of managing LLM behavior based on tool outputs, we introduce a technique called Post-Tool Call Prompting. This technique enables developers to adjust the LLM\'s behavior after a tool executes and before the results are presented to the user, allowing for specific flow control based on the outcomes of the tools used.","sidebar":"tutorialSidebar"},"tools_config/prerequisites":{"id":"tools_config/prerequisites","title":"Prerequisites","description":"The prerequisites attribute in CMND\'s function configuration is used to specify dependencies that must be fulfilled before a tool can be executed. By defining a list of prerequisite tools, developers can enforce an execution order, ensuring that certain tools are run in a specific sequence to maintain logic and consistency within the application/conversation.","sidebar":"tutorialSidebar"},"tools_config/rerun":{"id":"tools_config/rerun","title":"Rerun","description":"In CMND.ai, where you can create custom functions to interact with the language model, the rerun attribute plays a crucial role in determining the availability of these functions after their initial execution. The rerun attribute allows developers to control whether a function remains available for repeated use or is removed from the list of available functions after it has been invoked once.","sidebar":"tutorialSidebar"},"tools_config/rerunWithDifferentParameters":{"id":"tools_config/rerunWithDifferentParameters","title":"Rerun With Different Parameters","description":"The rerunWithDifferentParameters attribute in CMND\'s function configuration controls whether the tool can be rerun with different parameters if the initial execution fails. This feature allows developers to dictate whether the LLM should attempt to modify the input parameters and retry the function or restrict it to a single attempt with the provided parameters.","sidebar":"tutorialSidebar"},"tutorial-extras copy/documentation":{"id":"tutorial-extras copy/documentation","title":"Documentation","description":"cmnd-chat-bot-package","sidebar":"tutorialSidebar"}}}}')}}]);