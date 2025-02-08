---
sidebar_position: 1
---

# Installation

## CMND React SDK

This npm package provides a customizable chatbot component for use in web applications, designed specifically for React environments.
Before we begin you will need you chatbot id, organization id, cmnd api base url, this can be found on your the CMND chatbot details page.

### Installation

You can install the [@cmnd-ai/chatbot-react](https://www.npmjs.com/package/@cmnd-ai/chatbot-react) from npm using npm or yarn:

```bash
npm install @cmnd-ai/chatbot-react
```

### With yarn

```bash
yarn add @cmnd-ai/chatbot-react
```

### Example implementation

```javascript
import { ChatProvider } from "@cmnd-ai/chatbot-react";
import "@cmnd-ai/chatbot-react/dist/styles/index.css";

const App = () => {
  return (
    <ChatProvider
      baseUrl="<your-cmnd-api-base-url>"
      chatbotId={"<your-chatbot-id>"}
      organizationId={"<your-organization-id>"}
    />
  );
};

export default App;
```

You can find an example implementation from [here](https://www.npmjs.com/package/cmnd-chat-bot-package)
