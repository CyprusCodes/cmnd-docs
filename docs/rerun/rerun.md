---
sidebar_position: 1
---

# Rerun 

## Overview:

In CMND.ai, where you can create custom functions to interact with the language model, the rerun attribute plays a crucial role in determining the availability of these functions after their initial execution. The rerun attribute allows developers to control whether a function remains available for repeated use or is removed from the list of available functions after it has been invoked once.

## Usage:

The rerun attribute is a boolean flag that can be set to either True or False within the function configuration.

rerun: False: When rerun is set to False, the function remains part of the availableFunction array indefinitely, allowing it to be executed multiple times. This is useful for functions that are intended to be reusable and are not meant to be one-time operations.

rerun: True: When rerun is set to True, the function will appear in the availableFunction array only until it is used for the first time. After its initial execution, it will be removed from the availableFunction array, making it unavailable for future use. This is ideal for functions designed for one-time tasks or operations where repeated execution is not necessary or desired.

## Example: 

```python
{
    "name": "echo_username",
    "description": "echos the username saved in the memory",
    "parameters": custom_json_schema(EchoUsernameSchema),
    "runCmd": echo_username,
    "isDangerous": False,
    "functionType": "backend",
    "isLongRunningTool": False,
    "rerun": False
}
```

* In this example, rerun: False indicates that the echo_username function will always be available for execution in the availableFunction array. Users can invoke this function multiple times as needed.

* If the rerun attribute were set to True, the echo_username function would be removed from the availableFunction array after the first execution, preventing it from being called again unless it is re-added manually or through some other mechanism.

## Considerations:

- Persistent Functions: Use rerun: False for functions that provide utility throughout the lifecycle of the application or conversation, such as those that retrieve or display information repeatedly.

- One-Time Functions: Use rerun: True for functions meant for single-use scenarios, such as initializing a process, generating a unique identifier, or any operation where repeat execution could cause conflicts or unintended behavior.

- By carefully setting the rerun attribute, developers can fine-tune the behavior and availability of custom functions within CMND, ensuring a smooth and controlled user experience.