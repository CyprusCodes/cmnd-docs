---
sidebar_position: 5
---

# UI Tools

## Introduction

The CMND React SDK provides support for UI Tools, enabling developers to create interactive components that can be integrated into the chatbot interface. These tools can either capture user input or simply display information, and can be rendered in different locations within the application.

## Definition

A UI Tool is defined as a specialized component that implements the `CMNDChatbotUITool` interface. Each tool consists of configuration properties and a `runCmd` function that determines its behavior and rendering logic.

## Key Properties

Each UI Tool must implement the following key properties:

- `name`: Unique identifier for the tool
- `description`: Brief description of the tool's functionality
- `category` and `subcategory`: Classification for organization
- `dangerous`: Boolean indicating if the tool could have potentially harmful effects
- `argumentSchema`: JSON Schema defining the expected arguments
- `capturesUserInput`: Boolean indicating if the tool captures user input
- `runCmd`: Function that implements the tool's logic and returns/renders the component

### Types of Custom UI Tools

There are six main variations of UI tools that can be implemented:

1. **Component Without Input Capture**

   - Returns a React component
   - Does not capture user input
   - Can be rendered anywhere in the application
   - Example: Display components, information panels

2. **Component With Input Capture**

   - Returns a React component
   - Captures and processes user input
   - Can be rendered anywhere in the application
   - Example: Form components, search interfaces

3. **Chat Message Card With Input (Using Ref)**

   - Rendered directly in the chat box as a message card
   - Captures user input
   - Uses ref for DOM manipulation
   - Example: In-chat forms, interactive cards

4. **Chat Message Card Without Input (Using Ref)**

   - Rendered directly in the chat box as a message card
   - Does not capture user input
   - Uses ref for DOM manipulation
   - Example: Status displays, confirmation messages

5. **External Component Without Input**

   - Not rendered in the chat box
   - Does not capture user input
   - Can affect the application state
   - Example: Background color changer, theme switcher

6. **External Component With Input**
   - Not rendered in the chat box
   - Captures and processes user input
   - Can affect the application state
   - Example: Global settings panel, configuration interface

## Implementation Examples

### Example 1: Background Color Tool

This tool demonstrates a simple UI tool that changes the page background color without capturing user input:

```typescript
const BackgroundColorTool: CMNDChatbotUITool = {
  name: "change_background_color",
  description: "Changes the background color of the page",
  category: "UI",
  subcategory: "BG",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      bgColor: {
        type: "string",
        minLength: 1,
        errorMessage: {
          required: "Background Color is required",
        },
      },
    },
    required: ["bgColor"],
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: false,
  runCmd: ({ functionArgs, previousRunResults, captureResults }, ref) => {
    const { bgColor } = functionArgs;
    const messageContainer = ref;
    if (messageContainer) {
      messageContainer.current.innerHTML = `Background color changed to ${bgColor}`;
    }
    document.body.style.backgroundColor = bgColor;
    if (!previousRunResults) {
      captureResults(`Background color changed to ${bgColor}`);
    }
  },
};
```

### Example 2: Username Input Tool

This tool demonstrates a UI tool that captures user input through a form component:

```typescript
export const UsernameTool: CMNDChatbotUITool = {
  name: "capture_username",
  description: "Captures username through an input field",
  category: "UI",
  subcategory: "Input",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      placeholder: {
        type: "string",
        default: "Enter username",
      },
    },
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: true,
  runCmd: ({ functionArgs, captureResults, previousRunResults }, ref) => {
    const UsernameComponent = () => {
      const [username, setUsername] = useState(previousRunResults || "");

      const handleSubmit = () => {
        if (username.trim()) {
          if (captureResults) {
            captureResults(username);
          }
          if (ref?.current) {
            ref.current.innerHTML = `Username set to: ${username}`;
          }
        }
      };

      return (
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={functionArgs?.placeholder || "Enter username"}
            style={{
              padding: "4px 8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              color: "#333",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: "4px 12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Set Username
          </button>
        </div>
      );
    };

    return <UsernameComponent />;
  },
};
```

### Example 3: Graph Plotting Tool

This tool demonstrates a UI tool that plots a graph based on the function argument data:

```typescript
export const PlotGraphTool: CMNDChatbotUITool = {
  name: "plot_graph",
  description: "Plots a graph using Recharts",
  category: "visualization",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      type: {
        type: "string",
        enum: ["line", "bar", "pie", "doughnut"],
        errorMessage: {
          required: "Graph type is required",
          enum: "Graph type must be one of: line, bar, pie, or doughnut",
        },
      },
      data: {
        type: "object",
        properties: {
          labels: {
            type: "array",
            items: { type: "string" },
            errorMessage: {
              required: "Labels for the graph are required",
            },
          },
          datasets: {
            type: "array",
            items: {
              type: "object",
              properties: {
                label: { type: "string" },
                data: {
                  type: "array",
                  items: { type: "number" },
                  errorMessage: {
                    required: "Dataset values are required",
                  },
                },
                backgroundColor: {
                  type: "array",
                  items: { type: "string" },
                },
                borderColor: {
                  type: "array",
                  items: { type: "string" },
                },
                borderWidth: { type: "number" },
              },
            },
          },
        },
        required: ["labels", "datasets"],
      },
    },
    required: ["type", "data"],
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: true,

  runCmd: ({ functionArgs, captureResults, previousRunResults }) => {
    const GraphComponent = () => {
      const { type, data } = functionArgs;

      // Transform the data to Recharts format
      const transformedData = data.labels.map((label, index) => ({
        name: label,
        ...data.datasets.reduce((acc, dataset) => {
          acc[dataset.label] = dataset.data[index];
          return acc;
        }, {}),
      }));

      const renderGraph = () => {
        switch (type) {
          case "line":
            return (
              <ResponsiveContainer width={400} height={400}>
                <LineChart data={transformedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {data.datasets.map((dataset, index) => (
                    <Line
                      isAnimationActive={false}
                      key={dataset.label}
                      type="monotone"
                      dataKey={dataset.label}
                      stroke={
                        dataset.borderColor?.[0] ||
                        `#${Math.floor(Math.random() * 16777215).toString(16)}`
                      }
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            );

          case "bar":
            return (
              <ResponsiveContainer width={400} height={400}>
                <BarChart data={transformedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {data.datasets.map((dataset, index) => (
                    <Bar
                      isAnimationActive={false}
                      key={dataset.label}
                      dataKey={dataset.label}
                      fill={
                        dataset.backgroundColor?.[0] ||
                        `#${Math.floor(Math.random() * 16777215).toString(16)}`
                      }
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            );

          case "pie":
          case "doughnut":
            // For pie/doughnut, we need to transform data differently
            const pieData = data.labels.map((label, index) => ({
              name: label,
              value: data.datasets[0].data[index],
            }));

            return (
              <ResponsiveContainer width={400} height={400}>
                <PieChart>
                  <Pie
                    isAnimationActive={false}
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={type === "doughnut" ? 60 : 0}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            );
        }
      };

      if (captureResults && !previousRunResults) {
        captureResults(`Graph of type ${type} rendered successfully`);
      }

      return (
        <div className="w-full h-[400px] border rounded-lg p-4 bg-white">
          {renderGraph()}
        </div>
      );
    };

    return <GraphComponent />;
  },
};
```

### Example 4: Dynamic Prompt Tool

This tool demonstrates a UI tool that dynamically generates prompts based on user input and predefined templates. It captures user input and uses it to create customized prompts that can be displayed within the chatbot interface or used for further processing.

```typescript
export const DynamicPromptTool: CMNDChatbotUITool = {
  name: "dynamic_prompt",
  description: "Prompts the user for any input with a custom message",
  category: "UI",
  subcategory: "Input",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      message: {
        type: "string",
        default: "Please enter a value:",
      },
      defaultValue: {
        type: "string",
        default: "",
      },
    },
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: true,
  runCmd: ({ functionArgs, captureResults, previousRunResults }, ref) => {
    const message = functionArgs?.message || "Please enter a value:";
    const defaultValue = functionArgs?.defaultValue || "";
    let userInput = previousRunResults || "";
    if (!previousRunResults) {
      userInput = prompt(message, defaultValue);
    }

    if (userInput !== null && userInput.trim()) {
      captureResults(userInput);
      if (ref?.current) {
        ref.current.innerHTML = `You entered: ${userInput}`;
      }
    }
  },
};
```

### Example 5: Chat Notification Tool

This tool demonstrates a UI tool that triggers a toast within the chat interface. It does not capture user input but displays a toast to the user.

```typescript
export const ChatNotificationTool: CMNDChatbotUITool = {
  name: "chat_notification",
  description: "Displays a notification toast in the chat",
  category: "UI",
  subcategory: "Chat",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      type: {
        type: "string",
        enum: ["info", "success", "warning", "error"],
        default: "info",
      },
      title: {
        type: "string",
        minLength: 1,
      },
      message: {
        type: "string",
        minLength: 1,
      },
      duration: {
        type: "number",
        default: 4000, // Default duration in milliseconds
      },
    },
    required: ["title", "message"],
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: false,
  runCmd: ({ functionArgs, captureResults, previousRunResults }) => {
    const { type = "info", title, message, duration = 4000 } = functionArgs;

    const toastTypes = {
      info: toast,
      success: toast.success,
      warning: toast,
      error: toast.error,
    };

    if (!previousRunResults) {
      toastTypes[type](`${title}: ${message}`, {
        duration,
      });
      captureResults(`Notification displayed: ${title}: ${message}`);
      return <div>Notification displayed</div>;
    } else {
      if (previousRunResults) {
        return <div>Notification displayed</div>;
      }
    }
  },
};
```

## Usage

To utilize the UI Tools with the CMND React SDK, pass the defined tools as a prop to the `ChatProvider` component.

```typescript
<ChatProvider
  baseUrl="<your-cmnd-api-base-url>"
  chatbotId={"<your-chatbot-id>"}
  organizationId={"<your-organization-id>"}
  UITools={[
    BackgroundColorTool,
    UsernameTool,
    PlotGraphTool,
    DynamicPromptTool,
    ChatNotificationTool,
  ]}
/>
```
