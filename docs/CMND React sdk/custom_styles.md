---
sidebar_position: 3
---

# Custom Styles

## Introduction

The CMND React SDK allows you to customize the CSS styles of the chat interface using the `customStyles` prop. This provides a flexible way to adjust the appearance of various chat elements without needing to create custom components.

## Available Custom Styles

The following style properties are available for customization:

- **chatAvatarStyle**: Defines the appearance of the chatbot's avatar, such as size, shape, and border radius.
- **inputStyle**: Controls the styling of the text input field, including padding, border, and background color.
- **sendButtonStyle**: Styles the send button, including its background color, text color, padding, and border radius.
- **chatbubbleStyle**: Applies general styles to both user and bot chat bubbles, such as background color, border, and text formatting.
- **botChatbubbleStyle**: Specifically customizes the appearance of the chatbot's messages, allowing differentiation from user messages.
- **userChatbubbleStyle**: Defines the look of user-sent messages, including background color and text color.

## Usage

To apply custom styles, pass the `customStyles` prop when initializing the chat component:

```typescript
import { ChatProvider } from "@cmnd/react-sdk";

function App() {
  return (
    <ChatProvider
      baseUrl="<your-cmnd-api-base-url>"
      chatbotId={"<your-chatbot-id>"}
      organizationId={"<your-organization-id>"}
      customStyles={{
        chatAvatarStyle: {
          borderRadius: "50%",
          width: "40px",
          height: "40px",
        },
        inputStyle: {
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        },
        sendButtonStyle: {
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 15px",
          borderRadius: "5px",
        },
        chatbubbleStyle: {
          backgroundColor: "#f1f1f1",
          padding: "10px",
          borderRadius: "10px",
        },
        botChatbubbleStyle: {
          backgroundColor: "#e0e0e0",
        },
        userChatbubbleStyle: {
          backgroundColor: "#007bff",
          color: "white",
        },
      }}
    />
  );
}
```

:::warning
`chatbubbleStyle` overrides both `botChatbubbleStyle` and `userChatbubbleStyle`
:::

## Benefits of Custom Styles

Using `customStyles` provides several advantages:

- **Ease of Use:** No need to create separate components for styling.
- **Consistency:** Ensures uniform design across different chat elements.
- **Flexibility:** Quickly adjust styles to match different themes or branding guidelines.

## Best Practices

- Use meaningful color contrasts for accessibility.
- Maintain sufficient padding and margins for readability.
- Ensure styles are responsive for different screen sizes.

With `customStyles`, you can easily personalize the chat experience while keeping implementation simple and maintainable.
