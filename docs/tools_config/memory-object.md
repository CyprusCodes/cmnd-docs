---
sidebar_position: 3
---

# Memory Object
## Introduction
A memory object serves the purpose of transferring large chunks of data between multiple independent tools within one conversation. This is useful when you want to keep important but large contextual information.
## How to use:
When writing a tool, add a memory object within the tool parameters and then return it within the response.

```python
def fetch_titanic_data(memory: dict):
    """
    Fetch Titanic dataset from GitHub CSV.
    """
    # Raw GitHub content URL
    github_url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"

    try:
        response = requests.get(github_url)
        response.raise_for_status()

        # Read CSV directly into pandas DataFrame
        df = pd.read_csv(io.StringIO(response.text))

        # Store DataFrame in memory
        memory["titanic_dataframe"] = df

        return {
            "responseString": f"Successfully fetched {len(df)} records",
            "memory": memory
        }
    except Exception as e:
        return {
            "responseString": f"Error fetching data: {str(e)}",
            "memory": memory
        }

```
Once a memory object is initialized, it can be used within that conversation by another tool that the memory object was passed to, for more in-depth analysis.

```python
def count_survivors(memory: dict):
    """
    Count the number of survivors from the stored Titanic data.
    """
    if "titanic_dataframe" not in memory:
        return {
            "responseString": "No Titanic data in memory. Fetch data first.",
            "memory": memory
        }
    
    # Retrieve DataFrame from memory
    df = memory["titanic_dataframe"]
    
    # Count survivors
    survivors_count = len(df[df['Survived'] == 1])
    total_passengers = len(df)
    survival_info = {
                "Number of total survivors":f"{survivors_count}",
                "Total number of passengers":f"{total_passengers}",
    }
    
    return survival_info

```
Memory object is important for efficiency and dependability. By storing only essential data, reducing the use of too many tokens or too much contextual information. This is illustrated by the example of the Titanic, where storing data in memory allows for easier transfer to other tools for analysis, like determining the number of survivors.

Here is a different example on how memory object can be used:
```python 

def get_passenger_details(memory: dict):
    """
    Get list of passengers with their fare, age, and sex.
    In order to calculate some basic statistics about the data.
    """
    if "titanic_dataframe" not in memory:
        return {
            "responseString": "Please load the dataset first",
            "memory": memory
        }

    fares_info = memory["titanic_dataframe"][['Name', 'Sex', 'Age', 'Fare']]

    return f"{fares_info}"
```
Here we are passing the whole table to the function and then using pandas library to pass only the necessary columns to LLM for in debt analysis of fares.

## Conclusion:
- Use memory object to efficiently pass large chunks of data between tools.
- Add "memory" to parameters list in order to use it. 
- Return the memory object as well as a response in order to pass it to other tools.
