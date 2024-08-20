---
sidebar_position: 3
---

# Rerun With Different Parameters 

## Overview:

The `rerunWithDifferentParameters` attribute in CMND's function configuration controls whether the tool can be rerun with different parameters if the initial execution fails. This feature allows developers to dictate whether the LLM should attempt to modify the input parameters and retry the function or restrict it to a single attempt with the provided parameters.

## Usage:

The `rerunWithDifferentParameters` attribute is a boolean flag that can be set to either True or False:

- `rerunWithDifferentParameters`: False: When set to False, the function is restricted from being rerun with different parameters. If the tool fails to execute successfully on the first attempt, the LLM will not attempt to rerun it with altered parameters. This is useful when the integrity of the parameters is critical, and rerunning the tool with different inputs could lead to unintended consequences or errors.

- `rerunWithDifferentParameters`: True: When set to True, the LLM is permitted to rerun the tool with modified parameters if the initial attempt fails. This can be helpful in scenarios where the function's success depends on variable inputs, and retrying with adjusted parameters could resolve the issue.


## Example:

Consider the following function configuration for `echo_username`:

```python
{
    "name": "echo_username",
    "description": "echos the username saved in the memory",
    "parameters": custom_json_schema(EchoUsernameSchema),
    "runCmd": echo_username,
    "isDangerous": False,
    "functionType": "backend",
    "isLongRunningTool": False,
    "rerun": False,
    "rerunWithDifferentParameters": False
}
```

- In this example, `rerunWithDifferentParameters`: False means that if the echo_username function fails to execute with the given parameters, the LLM will not attempt to rerun it with different parameters. This ensures that the function only operates with the specific inputs provided by the user or the system.

- If `rerunWithDifferentParameters` were set to True, the LLM might try different variations of the parameters if the function fails, increasing the chances of successful execution but potentially altering the intended operation.


## Considerations:

- Parameter Integrity: Use `rerunWithDifferentParameters`: False when it is essential that the function operates only with the specified parameters, ensuring that no unintended changes occur during execution retries.

- Flexibility in Execution: Set `rerunWithDifferentParameters`: True for functions that may benefit from adaptive input adjustments, especially in cases where the initial parameter set might not be optimal for success.

- By managing the `rerunWithDifferentParameters` attribute effectively, developers can control how their functions behave under varying conditions, enhancing the robustness and predictability of CMND interactions.