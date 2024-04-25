---
sidebar_position: 7
---

# Configuration

There are two types of configurations for cmnd namely `hardcoded` configurations and `inherited` configurations.

## 1.  **Hardcoded configurations:** 

These configurations are hardcoded into the object passed in the [`init`](/docs/Embed%20Widget/commands).
    - **hide_default_launcher**: This configuration hides the embed widget by default. It will be hidden until you call the [`show`](/docs/Embed%20Widget/commands) command. It is optional to use this configuration. Its value is a boolean, `true` or `false`

**Below is an example**

```javascript
//my_script.js
cmndChat("init", {
  chatbot_id: "YOUR CHATBOT ID HERE",
  organization_id: "YOUR ORGANIZATION ID HERE",
  hide_default_launcher: true,
});
```

    -   **custom_launcher_selector**: This configuration places your embed widget inside a custom div with the `ID` attribute of your choice. It is optional to use this configuration. Its value is a `string`

**Below is an example**

```javascript
//my_script.js
cmndChat("init", {
  chatbot_id: "YOUR CHATBOT ID HERE",
  organization_id: "YOUR ORGANIZATION ID HERE",
  custom_launcher_selector: "my-div",
});
```

in the above example it places the embed widget in a div with an id of `"my-div"`
**Below is an example**

```HTML
<div id="my-div"></div>
```

:::info

You can use both **hide_default_launcher** and **custom_launcher_selector** simultaneously.

:::

**Below is an example**

```javascript
//my_script.js
cmndChat("init", {
  chatbot_id: "YOUR CHATBOT ID HERE",
  organization_id: "YOUR ORGANIZATION ID HERE",
  custom_launcher_selector: "my-div",
  hide_default_launcher: true,
});
```

:::tip

The order of the configurations does not matter.

:::

## 2.  **Inherited configurations:**

These configurations are inherited from the server, you can customize them on [CMND](https://app.cmnd.ai/chatbots).

    - #### Style Configurations

These configurations allow you to customize the visual appearance of the embed widget according to your preferences.

### Message Bubble Styles

- `messageBubbleBorderRadius`: Specifies the border radius of the message bubbles.
- `userMessageBubbleBgColor`: Background color of the message bubble for user messages.
- `responseMessageBubbleBgColor`: Background color of the message bubble for bot responses.
- `userMessageBubbleTextColor`: Text color of user messages within the message bubble.
- `responseMessageBubbleTextColor`: Text color of bot responses within the message bubble.

### Loading Indicator Styles

- `loadingDotColor`: Color of the loading indicator dots.

### Widget Styles

- `widgetBgColor`: Background color of the widget.
- `widgetTextColor`: Text color of the widget content.
- `widgetBorderRadius`: Border radius of the widget.
- `widgetButtonBorderRadius`: Border radius of the widget button.
- `widgetButtonBgColor`: Background color of the widget button.
- `widgetButtonIconColor`: Color of icons within the widget button.
- `widgetButtonClosedIconColor`: Color of the closed state icon on the widget button.
- `widgetButtonOpenedIconColor`: Color of the opened state icon on the widget button.
- `sendIconColor`: Color of the send icon within the input field.
- `sendIconBgColor`: Background color of the send icon.
- `newChatIconcolor`: Color of the new chat icon.
- `expandIconColor`: Color of the expand icon.
- `minimiseIconColor`: Color of the minimize icon.

### Input Field Styles

- `inputBgColor`: Background color of the input field.
- `inputBorderColor`: Border color of the input field.
- `inputBorderRadius`: Border radius of the input field.
- `inputTextColor`: Text color of the input field.
- `inputTextSize`: Font size of the text within the input field.
- `inputPlaceholderText`: Placeholder text within the input field.
- `inputPlaceholderColor`: Color of the input field placeholder text.

### Footer Styles

- `footerTextColor`: Text color of the footer section.

### Other Styles

- `avatarImageUrl`: URL of the avatar image.
- `titleText`: Text for the widget title.
- `subTitleText`: Text for the widget subtitle.
- `titleFontSize`: Font size for the widget title.
- `subTitleFontSize`: Font size for the widget subtitle.
- `iconSize`: Size of icons within the widget.
- `widgetShadowIntensity`: Intensity of the widget shadow.
- `widgetAnimation`: Animation style for the widget.
- `widgetButtonPosition`: Position of the widget button (`"left"` or `"right"`).
- `fontFamily`: Font family to be used within the widget.