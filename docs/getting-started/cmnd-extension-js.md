---
sidebar_position: 2
---

# Create Custom CMND.ai Tools with JavaScript

## Setting Up and Creating CMND Tools

This documentation provides instructions on setting and creating custom tools to extend the CMND AI functionality.

### 1. Setting Up the CMND Tool Repo

#### Requirements

- Node.js and npm installed on your system.

#### Steps

1. **Clone Repository:** Clone the repository containing the demo node js extension codebase to your local machine.

   ```bash
   git clone https://github.com/CyprusCodes/cmnd-extension-sample-nodejs.git
   ```

2. **Install Dependencies:** Navigate to the project directory and run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Environment Configuration:** Create a `.env` file in the root directory of the project and configure any necessary environment variables, such as `PORT` for the server and any API keys required for external services.

4. **Start the Server:** Run the following command to start the server:

   ```bash
   npm start
   ```

5. **Access Endpoints:** Once the server is running, you can access the provided endpoints to list available tools and execute specific CMND tools.

### 2. Creating Custom CMND Tools

To extend the functionality of CMND, you can create custom tools. Each tool should follow a specific structure and provide the necessary functionality.

#### Steps

1. **Create a New Tool:** In the `tools.js` file at the root directory of the project.

2. **Define Tool Schema:** Use the `yup` library to define a schema for validating the input parameters of your tool.

3. **Implement Tool Functionality:** Define the functionality of your tool by creating an object with the following properties:

   - `name`: The name of the tool.
   - `description`: A brief description of the tool's functionality.
   - `category`: The category of the tool's functionality.
   - `subcategory`: The subcategory of the tool's functionality.
   - `functionType`: The function type of the tool's functionality.
   - `dangerous`: The type of the tool's functionality that specifies whether it needs user confirmation to be used.
   - `associatedCommands`: commands associated with this tool.
   - `parameters`: The schema for validating input parameters.
   - `rerun`: Specifies whether the tool can be rerun.
   - `rerunWithDifferentParameters`: Specifies whether the tool can be rerun with different parameters.
   - `runCmd`: A method that executes the tool's functionality asynchronously.

4. **Export Tool Object:** Export the tool object from the module so that it can be imported and used by the server.

5. **Restart the Server:** After creating a new tool, restart the server to ensure that it recognizes the newly added tool.

#### Example Tool Implementation

Below is an example implementation of a custom CMND tool in the tool.js file:

```js
require("dotenv").config();
const axios = require("axios"); // Only for external API calls
const yup = require("yup");
const yupToJsonSchema = require("./yupToJsonSchema");

const yourSchema = yup.object({
  // Define your validation schema here Use yup methods to define validation rules for each parameter
  // parameter1: yup.string().required(),
  // parameter2: yup.number().positive(),
});

const yourJSONSchema = yupToJsonSchema(yourSchema);

const YOUR_TOOL_NAME = {
  name: "your_tool_name",
  description: "Describe what your tool does and how it works here", // Describe functionality
  category: "your_category", // Choose a relevant category
  subcategory: "your_subcategory", // Specify a subcategory if applicable
  functionType: "your_function_type", // Specify backend or frontend
  dangerous: false, // Set to true if user confirmation is required
  associatedCommands: [], // List any associated commands (if any)
  prerequisites: [], // List any prerequisites for your tool to run
  parameters: yourJSONSchema,
  rerun: true, // Set to false if rerun is not allowed
  rerunWithDifferentParameters: true, // Set to false if different parameters are not allowed
  runCmd: async (
    {
      /* your parameter names here */
    }
  ) => {
    try {
      // Implement your tool's logic here:

      const data = await axios.get(/* url based on parameters */);
      return JSON.stringify(data);
    } catch (err) {
      // Handle potential errors and return a meaningful message
      return "Error trying to execute the tool";
    }
  },
};

// Add your tool object to the tools array (assuming it exists)
const tools = [YOUR_TOOL_NAME, YOUR_OTHER_TOOL_NAME];
module.exports = tools; // Export the tool object
```

## Conclusion

By following the steps, you can set up the CMND Node Js Extension Tools and create custom tools to suit your specific needs. Leveraging these tools can help streamline your workflow and automate various tasks effectively.
