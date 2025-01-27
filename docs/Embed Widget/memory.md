---
sidebar_position: 5
---

# Memory

### Overview

The **CMND Memory** feature enables persistent data storage within the widget, allowing you to maintain user preferences, details, and contextual information across chat sessions.

### Initial Memory

When initializing the CMND Chat widget, you can provide initial memory values using the `initialMemory` command. These values will be available immediately when the chat session begins.

```javascript
//script.js
window
  .cmndChat("init", {
    chatbot_id: "YOUR_CHATBOT_ID",
    organization_id: "YOUR_ORGANIZATION_ID",
    initialMemory: {
      email: "user@example.com",
      name: "John Doe",
    },
  })
  .then((initOptions) => {
    console.log("Initialization complete", initOptions);
  })
  .catch((err) => {
    console.error("Initialization failed", err);
  });
```

### Setting Memory

Use `setCurrentConversationMemory` to store or update key-value pairs in memory. This method returns a Promise.

```javascript
//script.js
window
  .cmndChat("setCurrentConversationMemory", {
    memory: {
      favouriteColor: "red",
      age: 25,
    },
  })
  .then((memoryOptions) => {
    console.log("Memory set successfully", memoryOptions);
  })
  .catch((err) => {
    console.log("Failed to set memory", err);
  });
```

:::warning
The `setCurrentConversationMemory` method is only available when a user is interacting with an active chat thread.
:::

### Deleting Memory

Use `deleteCurrentConversationMemory` to remove specific keys from memory. This method returns a Promise.

```javascript
//script.js
window
  .cmndChat("deleteCurrentConversationMemory", {
    memoryKeyToDelete: "email",
  })
  .then((memoryOptions) => {
    console.log("Memory deleted successfully", memoryOptions);
  })
  .catch((err) => {
    console.log("Failed to delete memory", err);
  });
```

:::warning
The `deleteCurrentConversationMemory` method is only available when a user is interacting with an active chat thread.
:::

### Sample Implementation

Here's a practical example showing how to initialize the CMND Chat widget with user information, set and delete the information.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CMND Chat with Initial Memory</title>
    <script src="https://embed.cmnd.ai/widget.js"></script>
  </head>
  <body>
    <script>
      // Initialize CMND widget with initial memory
      window
        .cmndChat("init", {
          chatbot_id: "YOUR_CHATBOT_ID",
          organization_id: "YOUR_ORGANIZATION_ID",
          initialMemory: {
            email: "user@example.com",
            name: "John Smith",
          },
        })
        .then((initOptions) => {
          console.log("Chat initialized with user data", initOptions);
        })
        .catch((err) => {
          console.error("Failed to initialize chat", err);
        });

      // Example of updating memory later
      function updateUserEmail() {
        window
          .cmndChat("setCurrentConversationMemory", {
            memory: {
              email: "newemail@example.com",
            },
          })
          .then(() => console.log("Email updated"))
          .catch((err) => console.error("Error updating email:", err));
      }

      // Example of removing user data
      function removeUserData() {
        window
          .cmndChat("deleteCurrentConversationMemory", {
            memoryKeyToDelete: "email",
          })
          .then(() => console.log("Email removed"))
          .catch((err) => console.error("Error removing email:", err));
      }
    </script>

    <!-- Optional: Buttons to demonstrate memory updates -->
    <button onclick="updateUserEmail()">Update Email</button>
    <button onclick="removeUserData()">Remove Email</button>
  </body>
</html>
```
