---
sidebar_position: 4
---

# Prerequisites 

The `prerequisites` attribute in CMND's function configuration is used to specify dependencies that must be fulfilled before a tool can be executed. By defining a list of prerequisite tools, developers can enforce an execution order, ensuring that certain tools are run in a specific sequence to maintain logic and consistency within the application/conversation.


The `prerequisites` attribute is an array of tool names that must be executed before the current tool becomes available. If any of the tools listed in the `prerequisites` array have not been run, the current tool will not be available for execution.

- Example Array: 

```python
["tool1", "tool2", "tool3"]

```
 In this scenario, the current tool will only become available once tool1, tool2, and tool3 have all been executed.

Consider the following function configuration for echo_username:

```python
{
    "name": "echo_username",
    "description": "echos the username saved in the memory",
    "parameters": custom_json_schema(EchoUsernameSchema),
    "runCmd": echo_username,
    "isDangerous": False,
    "functionType": "backend",
    "isLongRunningTool": False,
    "prerequisites": ["product_finder", "put_username"]
}
```

- In this example, the `echo_username` function has two `prerequisites`: product_finder and put_username. This means that before the echo_username function can be executed or made available, both product_finder and put_username must be run.

- If either of these prerequisite tools has not been executed, the echo_username function will not appear as an option for the user or system to invoke.

Considerations:

- Execution Order: The `prerequisites` attribute is crucial for maintaining the correct execution order in complex workflows. By setting `prerequisites`, developers can ensure that necessary conditions or data are in place before a tool runs.

- Availability Control: Tools with unmet `prerequisites` will remain hidden or unavailable, preventing premature or incorrect execution that could lead to errors or incomplete operations.

- The `prerequisites` attribute adds a layer of control and safety to CMND, making sure that tools are only used when the necessary conditions are met, thereby enhancing the reliability and effectiveness of the application.