---
sidebar_position: 3
---

# Memory Object
## Introduction
A memory object serve the purpose of transferring data between multiple 
independent tools within one conversation. This is useful when you want to keep 
important contextual information. Think of it as like a train of thought.
## How to use:
When writing a tool add in a memory object within the tool parameters and then return.
You can return it just by itself
```python
def introductions(user_name: str, memory: dict):
    memory["user_name"] = user_name
    return memory
```
Or with another object you want returned to the AI.
```python
def introductions(user_name: str, memory: dict):
    api_url = "https://api.example.com/v1/log_in"
    
    params = {
        "user_name": user_name,
        "token": "*****",
    }
    response = requests.get(api_url, params=params)
    response_code = response.status_code
    memory["user_name"] = user_name
    
    return {
            "responseString": f"{response_code}",
            "memory": memory
             }
```
Once a memory object is initialized it can be used within that conversation by another tool that memory object was passed to.
```python
def repeat_user_name(memory: dict):
    return f"Hello again {memory['user_name']}"
```


## Use cases:
There can be several reasons why one might use memory object, below are some examples:
* We are going to use a flight api to pass the information we gather from it to other function calls to do various other things.
```python
import requests

def search_flights(origin: str, destination: str, date: str, api_key: str = "YOUR_API_KEY"):
    api_url = "https://api.flights.example.com/v1/search"
    
    params = {
        "from": origin.upper(),
        "to": destination.upper(),
        "date": date
    }
    
    headers = {"Authorization": f"Bearer {api_key}"}
    
    try:
        response = requests.get(api_url, params=params, headers=headers)
        response.raise_for_status()
        flights_info = response.json()["flights"]
        memory["flights_info"] = flights_info
        return {
                "responseString": f"{flights_info}",
                "memory": memory
                }
    except Exception as e:
        return f"Error searching flights: {e}"

``` 
* You might want to send the data acquired from an earlier function call to a more specialized tool such as one that would send an email:
```python

 # send the flight information via e-mail
def send_email(memory: dict,
            sender_email:str,
            sender_password:str,
            recipient_email:str):
    flight = memory["flights_info"]
    msg = MIMEMultipart()
    email_body = f"{flight['airline']}: ${flight['price']} at {flight['departure_time']}"
    msg['Subject'] = "Here are some nice tickets"
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg.attach(MIMEText(email_body, 'plain'))

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, recipient_email, msg.as_string())
        return "Email sent successfully!"
    except Exception as e:
        return f"Error sending email: {e}"
    
```
* You might want to change the price from one currency to the another. We can pass the price data inside the memory object to another function call to convert it to desired currency.
```python
def convert_to_eur(memory: dict):
    """Convert USD price to EUR using current exchange rate"""
    try:
        # Example exchange rate API - replace with your preferred service
        api_url = "https://api.exchangerate.example.com/v1/usd-to-eur"
        response = requests.get(api_url)
        exchange_rate = response.json()["rate"]
        # take the flight price info from previous function call.
        prince_usd = memory["flights_info"]["price"]
        return round(price_usd * exchange_rate, 2)
    except Exception as e:
        return f"Error getting exchange rate: {e}"
```

* You might want to get a list of tourist attraction at the destination location. We can call the memory object and pass the destination location to another API. 
```python
def get_attractions(memory: dict,city: str, limit: int = 10):
    """Get top tourist attractions for a given city"""
    # Using a tourism API (e.g., Google Places, TripAdvisor, etc.)
    api_url = "https://api.tourism.example.com/v1/attractions"
    
    params = {
        "city": memory["flight_info"]["arrival_city"],
        "limit": limit
    }
    
    try:
        response = requests.get(api_url, params=params)
        response.raise_for_status()
        attractions = response.json()["attractions"]
        return [{
            "name": attr["name"],
            "rating": attr["rating"],
            "description": attr["description"],
            "address": attr["address"]
        } for attr in attractions]
    except Exception as e:
        return f"Error getting attractions: {e}"
```
