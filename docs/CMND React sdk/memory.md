---
sidebar_position: 4
---

# Memory Management

## Introduction

The CMND React SDK provides memory management capabilities that allow you to store and manage conversation context through the `initialMemory` prop and memory management functions. Refer to the [Memory Object Documentation
](/docs/tools_config/memory-object) for more information on when you should leverage `memory` object in your extensions.

## Memory Features

### Initial Memory Setup

You can initialize the chat with predefined memory values using the `initialMemory` prop when setting up the ChatProvider:

```typescript
<ChatProvider
  baseUrl="<your-cmnd-api-base-url>"
  chatbotId={"<your-chatbot-id>"}
  organizationId={"<your-organization-id>"}
  initialMemory={{
    accessToken: "your-access-token",
    date: "2022-01-01",
    // Add any other initial memory key-value pairs
  }}
/>
```

### Memory Management Functions

The SDK provides two main functions for managing conversation memory:

#### setCurrentConversationMemory

Allows you to set or update memory values during an active conversation.

```typescript
import { setCurrentConversationMemory } from "@cmnd-ai/chatbot-react";

// Set single or multiple memory values
await setCurrentConversationMemory({
  name: "John Doe",
  email: "jon@doe.com",
  phone: "1234567890",
});
```

:::warning
`setCurrentConversationMemory` method is only available when user is interacting with an active chat thread.
:::

#### deleteCurrentConversationMemory

Enables you to remove specific memory keys from the current conversation.

```typescript
import { deleteCurrentConversationMemory } from "@cmnd-ai/chatbot-react";

// Delete a specific memory key
await deleteCurrentConversationMemory("name");
```

:::warning
`deleteCurrentConversationMemory` method is only available when user is interacting with an active chat thread.
:::

## Usage Example

Here's a complete example showing how to implement memory management in your chat application:

```typescript
import { ChatProvider } from "@cmnd/react-sdk";
import {
  setCurrentConversationMemory,
  deleteCurrentConversationMemory,
} from "@cmnd-ai/chatbot-react";

function ChatApp() {
  const handleSetMemory = async () => {
    try {
      const response = await setCurrentConversationMemory({
        name: "John Doe",
        email: "jon@doe.com",
        phone: "1234567890",
      });
      console.log("Memory Set:", response);
    } catch (error) {
      console.error("Error setting memory:", error);
    }
  };

  const handleDeleteMemory = async () => {
    try {
      const response = await deleteCurrentConversationMemory("name");
      console.log("Memory Deleted:", response);
    } catch (error) {
      console.error("Error deleting memory:", error);
    }
  };

  return (
    <>
      <ChatProvider
        baseUrl="<your-cmnd-api-base-url>"
        chatbotId={"<your-chatbot-id>"}
        organizationId={"<your-organization-id>"}
        initialMemory={{
          accessToken: "your-access-token",
          date: "2022-01-01",
        }}
      />
      <Button onClick={handleSetMemory}>Set Memory</Button>
      <Button onClick={handleDeleteMemory}>Delete Memory</Button>
    </>
  );
}
```

## Best Practices

1. **Security Considerations**

   - Don't store anything sensitive in memory, as it's not meant for secure storage.
   - Regularly clean up unnecessary memory entries

2. **Performance Optimization**

   - Only store essential information in memory
   - Clear outdated memory values when no longer needed
   - Avoid storing large data structures in memory

3. **Error Handling**
   - Implement proper error handling for memory operations
   - Validate memory values before storage
   - Provide feedback for failed memory operations

:::note

- Memory values persist only for the current conversation session
- Memory operations are asynchronous and return Promises
- Ensure proper error handling for memory management functions
- Memory keys should be strings and values should be serializable
  :::
