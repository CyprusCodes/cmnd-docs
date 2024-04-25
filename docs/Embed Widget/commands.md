---
sidebar_position: 6
---

# Commands

CMND embed widget has 3 commands `init`, `show` and `hide`.

1. **The `init` command**: This command is used to initialize the embed widget, it is mandatory to call this command before the embed widget can be used.
It takes parameters `Organization ID` and `Chatbot ID` inside an object.

**Below is an example**

```javascript
//my_script.js
window.cmndChat("init", {
  chatbot_id: "YOUR CHATBOT ID HERE",
  organization_id: "YOUR ORGANIZATION ID HERE",
});
```

2. **The `hide` command**: This command is used to hide the widget, it does not destroy the widget but hides it from the `DOM`. If you call this command you can use the `show` command to show the widget on the `DOM`. It does not take any param.

**Below is an example**

```javascript
//my_script.js
window.cmndChat("hide");
```

3. **The `show` command:** This command is used to show the widget on the DOM after it has been hidden using the hide command. It does not take any parameters.

**Below is an example**

```javascript
//my_script.js
window.cmndChat("show");
```

:::info
These CMND commands can be called without calling `window`
:::
**Below is an example**

```javascript
//my_script.js
cmndChat("init", {
  chatbot_id: "YOUR CHATBOT ID HERE",
  organization_id: "YOUR ORGANIZATION ID HERE",
});

const hideWidget = () => {
  cmndChat("show");
};

const showWidget = () => {
  cmndChat("hide");
};
```

**Below is a full use case**

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://embed.cmnd.ai/widget.js"></script>
    <script defer>
        document.addEventListener("DOMContentLoaded", function() {
            cmndChat("init", {
                chatbot_id: "YOUR CHATBOT ID HERE",
                organization_id: "YOUR ORGANIZATION ID HERE",
            });
        });
    </script>
</head>
<body>
    <button onclick="cmndChat('show')">
        Show Chatbot
    </button>
    <button onclick="cmndChat('hide')">
        Hide ChatBot
    </button>
</body>
</html>
```
