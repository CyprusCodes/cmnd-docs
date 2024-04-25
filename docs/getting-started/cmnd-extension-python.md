---
sidebar_position: 1
---

# Create Custom CMND.ai Tools with Python

The CMND.ai Extension empowers users to craft custom tools, integrate them into CMND.ai, and seamlessly employ them alongside their own assistants.

To do this, CMND.ai provides FastAPI and Flask applications designed to execute various server-side tools and add them to CMND.ai dynamically based on requests. This allows users to query tool information and run specific tools by passing parameters.

## Getting Started

1. Clone the repository:
   ```bash
   git clone git@github.com:CyprusCodes/cmnd-extension-sample-python.git
   ```

2. Install the requirements:
   ```bash
   pip install -r requirements.txt
   ```

3. Navigate to the cloned directory:
   ```bash
   cd cmnd-extension-sample-python
   ```

4. Determine whether you are using FastAPI or Flask, and navigate to the chosen directory.

5. Navigate to the `tools.py` file.

6. Within `tools.py`, create your tool definition by first defining data validation schema using Pydantic, then create your tool's implementation, and at the end, create your tool configuration and metadata:

   ```python
   from pydantic import BaseModel, Field
   import httpx
   import os

   # Define data validation schemas using Pydantic for different functionalities
   class WeatherCitySchema(BaseModel):
       city: str = Field(..., title="City", description="City name required")

   # Define your tool's implementation
   async def weather_from_location(city: str):
       api_key = os.getenv('WEATHER_API_KEY')
       if not api_key:
           raise ValueError("API key for weather data is not set in environment variables.")
       url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
       async with httpx.AsyncClient() as client:
           response = await client.get(url)
           return response.json()

   # Define your tool's configuration and metadata
   tool = [
       {
           "name": "weather_from_location",
           "description": "Gets the weather details from a given city name",
           "parameters": WeatherCitySchema.schema(),
           "runCmd": weather_from_location,
           "isDangerous": False,
           "functionType": "backend",
           "isLongRunningTool": False,
           "rerun": True,
           "rerunWithDifferentParameters": True
       }
   ]
   ```

7. Run your app (server):
   ```bash
   python3 main.py
   ```

8. Any API keys required for your tools should be stored in your `.env` file.

## Running Your Server Publicly Using Ngrok

1. Create an Ngrok account and set up Ngrok on your personal computer. [Ngrok accounts and setup](https://ngrok.com/docs/getting-started/?os=macos)

2. After setting up Ngrok on your computer, run `main.py`:
   ```bash
   python3 main.py
   ```

3. To run your app on a public URL, use the following command in your terminal. Make sure the port specified in your `main.py` is the same as the port used by Ngrok in your command:
   ```bash
   ngrok http 8000
   ```

   Ensure the port specified in the ngrok command matches the port your app is running on.