---
sidebar_position: 2
---

# Usage

1. Before you begin, you will need your `Organization ID` and your `Chatbot ID` these can be gotten from [CMND](https://app.cmnd.ai).

2. To Initialize the embed widget, you will need to call the `"init"` command from an HTML script attached to your web page and pass in your `Organization ID` and `Chatbot ID`.

:::note
`Organization ID` will be a number example: 5.

`Chatbot ID` will be a string example "2".
:::

**Below is an example**

```javascript
//my_script.js
window.cmndChat("init", {
  chatbot_id: "YOUR CHATBOT ID HERE",
  organization_id: "YOUR ORGANIZATION ID HERE",
});
```

**Below is an example in a script tag**

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
            window.cmndChat("init", {
                chatbot_id: "YOUR CHATBOT ID HERE",
                organization_id: "YOUR ORGANIZATION ID HERE",
            });
        });
    </script>
</head>
<body>

</body>
</html>
```
:::warning
 You can initialize the embed widget from any script attached to your website, but ensure your ```DOM``` is loaded first before calling the ```"init"``` command. In the above example, we have used an event listener to check if our ```DOM``` is loaded.
:::

:::info
    If your script is placed inside the ```<body></body>``` , we do not need an event listener to initialize the embed widget.
:::
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://embed.cmnd.ai/widget.js"></script>
</head>
<body>
     <script >
        window.cmndChat("init", {
                chatbot_id: "YOUR CHATBOT ID HERE",
                organization_id: "YOUR ORGANIZATION ID HERE",
        });
    </script>
</body>
</html>
```