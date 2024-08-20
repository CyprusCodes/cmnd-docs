---
sidebar_position: 1
---

# Post Tool Call

In AI-driven applications, ensuring seamless interaction between users, tools, and the LLM is crucial. To address the challenge of managing LLM behavior based on tool outputs, we introduce a technique called Post-Tool Call Prompting. This technique enables developers to adjust the LLM's behavior after a tool executes and before the results are presented to the user, allowing for specific flow control based on the outcomes of the tools used.

 Post-Tool Call Prompting associates each tool with a pre-configured prompt, guiding the LLM's response according to the tool's execution. This method utilizes the `postCallPrompt` property, which serves as a mechanism to direct how the LLM should behave following the completion of a tool operation. By employing this strategy, you can ensure that the LLM responds appropriately to different tool outcomes, enhancing both the flow and overall user experience.

Consider the example where a user is logging into a system. The process involves the user providing their username and password, which are then sent to a backend tool to validate the credentials. The flow of the conversation with the LLM may need to adjust based on the tool's response—whether it's a success or failure.

```python
    {
        "name": "user_login",
        "description": "Login tool, it takes the username and password as input and returns an access token",
        "parameters": custom_json_schema(UserLoginSchema),
        "runCmd": user_login,
        "isDangerous": False,
        "functionType": "backend",
        "isLongRunningTool": False,
        "postCallPrompt": "if the login tool output is failure, ask the user to try again, if successfuk, contunye the conversation."

    }
```    

Conclusion:

- Post-Tool Call Prompting is a powerful technique that allows developers to adjust the behavior of LLMs in real time based on the outcomes of tool executions. Where developers can manage different scenarios such as failures or successes more effectively, ensuring that users have a smooth and intuitive experience.

- This technique is particularly useful for applications that rely heavily on backend tools to process user requests, as it provides a seamless way to handle complex workflows without compromising the user experience.

- To implement this in a CMND tool, use the `postCallPrompt` property and provide a clear description of the desired behavior for the LLM.