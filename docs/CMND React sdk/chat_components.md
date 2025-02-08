---
sidebar_position: 2
---

# Chat Components

## Introduction

The CMND React SDK provides customizable UI components that allow you to tailor your conversation view's appearance to match your application's theme. This feature is particularly valuable when integrating with existing UI libraries or maintaining consistent design systems.

## Component Customization

### Available Components

The SDK supports customization of the following components:

#### InputField Component

The `InputField` component allows you to customize the appearance and behavior of the message input area.
Below is a type definition for the `InputFieldProps`, the props can be imported.

```typescript
interface InputFieldProps {
  /** Current input value */
  input: string;

  /** Function to update input value */
  setInput: (input: string) => void;

  /** Boolean indicating if message can be sent */
  canSendMessage: boolean;

  /** Function to handle message sending */
  handleSendClick: () => void;
}
```

```typescript
// Usage example
import { InputFieldProps } from "@cmnd-ai/chatbot-react";

const CustomInputField = ({
  input,
  setInput,
  canSendMessage,
  handleSendClick,
}: InputFieldProps) => {
  return (
    <div className="custom-input-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
    </div>
  );
};
```

#### SendButton Component

The `SendButton` component allows you to customize the appearance and behavior of the message send button.
Below is a type definition for the `SendButtonProps`, the props can be imported.

```typescript
interface SendButtonProps {
  /** Function to handle message sending */
  handleSendClick: () => void;

  /** Boolean indicating if message can be sent */
  canSendMessage: boolean;
}
```

```typescript
// Usage example
import { SendButtonProps } from "@cmnd-ai/chatbot-react";

const CustomSendButton = ({
  handleSendClick,
  canSendMessage,
}: SendButtonProps) => {
  return (
    <button
      onClick={handleSendClick}
      disabled={!canSendMessage}
      className="custom-send-button"
    >
      Send
    </button>
  );
};
```

## Implementation

To use custom components, pass them as props when initializing the chat component:

```typescript
import { ChatProvider } from "@cmnd/react-sdk";

function App() {
  return (
    <ChatProvider
      baseUrl="<your-cmnd-api-base-url>"
      chatbotId={"<your-chatbot-id>"}
      organizationId={"<your-organization-id>"}
      Components={{
        InputField: CustomInputField,
        SendButton: CustomSendButton,
      }}
    />
  );
}
```

## Best Practices

1. Maintain Accessibility

   - Ensure custom components maintain ARIA attributes and keyboard navigation
   - Provide appropriate visual feedback for different states

2. Error Handling

   - Implement proper error states in custom components
   - Handle edge cases like empty messages or network issues

3. Responsive Design
   - Make components responsive to different screen sizes
   - Consider mobile-first design principles

## Component States

Each component should handle the following states:

- Default
- Hover
- Active/Focus
- Disabled
- Error
- Loading (if applicable)

## TypeScript Support

The SDK provides full TypeScript support for all component props and interfaces. This ensures type safety and better developer experience when implementing custom components.

## Examples

### Material-UI Implementation

```typescript
import {
  ChatProvider,
  InputFieldProps,
  SendButtonProps,
} from "@cmnd/react-sdk";
import { TextField, Button } from "@mui/material";

const MaterialInputField = ({
  input,
  setInput,
  canSendMessage,
}: InputFieldProps) => (
  <TextField
    value={input}
    onChange={(e) => setInput(e.target.value)}
    variant="outlined"
    fullWidth
    disabled={!canSendMessage}
  />
);

const MaterialSendButton = ({
  handleSendClick,
  canSendMessage,
}: SendButtonProps) => (
  <Button
    onClick={handleSendClick}
    disabled={!canSendMessage}
    variant="contained"
    color="primary"
  >
    Send
  </Button>
);

function App() {
  return (
    <ChatProvider
      baseUrl="<your-cmnd-api-base-url>"
      chatbotId={"<your-chatbot-id>"}
      organizationId={"<your-organization-id>"}
      Components={{
        InputField: CustomInputField,
        SendButton: CustomSendButton,
      }}
    />
  );
}
```

### Tailwind CSS Implementation

```typescript
import {
  ChatProvider,
  InputFieldProps,
  SendButtonProps,
} from "@cmnd/react-sdk";

const TailwindInputField = ({
  input,
  setInput,
  canSendMessage,
}: InputFieldProps) => (
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    disabled={!canSendMessage}
  />
);

const TailwindSendButton = ({
  handleSendClick,
  canSendMessage,
}: SendButtonProps) => (
  <button
    onClick={handleSendClick}
    disabled={!canSendMessage}
    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
  >
    Send
  </button>
);

function App() {
  return (
    <ChatProvider
      baseUrl="<your-cmnd-api-base-url>"
      chatbotId={"<your-chatbot-id>"}
      organizationId={"<your-organization-id>"}
      Components={{
        InputField: TailwindInputField,
        SendButton: TailwindSendButton,
      }}
    />
  );
}
```
