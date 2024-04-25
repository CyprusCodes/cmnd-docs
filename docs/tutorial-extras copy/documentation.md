---
sidebar_position: 1
---

# Documentation

## cmnd-chat-bot-package

This npm package provides a customizable chatbot component for use in web applications, designed specifically for Node.js environments.

### Requirements

Before using this package, ensure you have the following prerequisites installed on your computer:

- Node.js (version 12 or higher)

**Package URL:** [cmnd-chat-bot-package on npm](https://www.npmjs.com/package/cmnd-chat-bot-package)

### Installation

You can install the `cmnd-chat-bot-package` from npm using npm or yarn:

```bash
npm install cmnd-chat-bot-package
```

### With yarn

```bash
yarn add cmnd-chat-bot-package
```

### Example implementation

```javascript
import { ChatProvider, CmndChatBot } from "test-cmnd-chatbot";
import { useEffect } from "react";

const components = {
  messages({ props }) {
    const messages = props.chats.data?.messages || [];

    useEffect(() => {
      const comp = document.querySelector(`#lastItemId`);
      if (!comp) return;

      setTimeout(() => {
        comp.scrollIntoView({
          behavior: "smooth",
          block: "end", // Scroll to the bottom of the container
        });
      }, 500);
    }, [messages.length]);

    const getchild = () => {
      if (props.chats.error) {
        return <h1>Error</h1>;
      }
      if (!props.chats.data?.messages?.length)
        return <h1>Ask me a question</h1>;

      return (
        <div>
          {messages.map((eachMessage, msgIndex) => (
            <div
              key={eachMessage.id}
              id={msgIndex === messages.length - 1 ? "lastItemId" : undefined}
            >
              {eachMessage.message + ""}
            </div>
          ))}
        </div>
      );
    };

    return <div style={{ flexGrow: 1 }}>{getchild()}</div>;
  },
  userInputBox({ props }) {
    return (
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <input
          style={{
            flexGrow: 1,
          }}
          type="text"
          value={props.userInputData.textValue}
          onChange={(e) => props.userInputData.setTextValue(e.target.value)}
          placeholder="Type here"
          disabled={props.userInputData.isSending}
        />
        <button
          onClick={props.userInputData.submitMessage}
          disabled={props.userInputData.isSending}
        >
          {props.userInputData.isSending ? "Sending..." : "Send"}
        </button>
      </div>
    );
  },
  error({ props }) {
    return <div>Error: {props.chats.error + ""}</div>;
  },
};

function App() {
  return (
    <div>
      <ChatProvider apiKey="xxxxx" chatbotId={1} organizationId={1}>
        {(params) => <CmndChatBot {...params} components={components} />}
      </ChatProvider>
    </div>
  );
}

export default App;
```

You can find an example implementation from [here](https://www.npmjs.com/package/cmnd-chat-bot-package)
