# Food Order Simulation 🍕  

## Description  
This project is a simulation of a food ordering process using modern JavaScript concepts. It demonstrates how to handle asynchronous operations effectively, transitioning from callback hell to cleaner solutions using Promises and `async/await`. The simulation walks through placing an order, preparing it, picking it up, and delivering it.  

---

## Features  
1. **Callback Hell Example**  
   - Showcases the issues caused by deeply nested callbacks in asynchronous programming.

2. **Promise Chaining**  
   - Resolves callback hell using a chain of Promises for better readability and maintainability.

3. **Full Order Simulation**  
   - Simulates the sequence of a food order lifecycle:  
     - **Placing Order**  
     - **Preparing Order**  
     - **Pickup Order**  
     - **Deliver Order**

4. **Error Handling**  
   - Implements robust error handling using `.catch()` and `finally()` for resolving or rejecting Promises.

---

## Tech Stack  
- **Languages:** JavaScript (ES6)  
- **Concepts:** Callback Hell, Promises, `async/await`  

---

## Workflow  
1. **Placing Order**  
   - Simulates interaction with Domino's to place an order, resolving if the food is available.  
   - Example Output:  
     ```
     Talking with Domino's  
     Order Placed  
     ```

2. **Preparing Order**  
   - Simulates preparing the food after the order is placed.  
   - Example Output:  
     ```
     Preparing Order  
     Order Prepared  
     ```

3. **Pickup Order**  
   - Simulates the pickup of the prepared order.  
   - Example Output:  
     ```
     Order is ready for pickup  
     Order picked up  
     ```

4. **Deliver Order**  
   - Simulates the delivery process after pickup.  
   - Example Output:  
     ```
     Order is out for delivery  
     Order delivered successfully  
     ```

5. **Error Handling**  
   - If any step fails (e.g., food is unavailable), it rejects the Promise and handles the error.  
   - Example Output:  
     ```
     Food not available  
     ```

---

## Code Highlights  

### Callback Hell Example:  
Illustrates deeply nested callbacks, which are hard to read and maintain:  
```javascript  
placingOrder(cart, (order) => {  
  preparingOrder(order, (prepOrder) => {  
    pickupOrder(prepOrder, (pOrder) => {  
      deliverOrder(pOrder);  
    });  
  });  
});
```  

### Promise Chaining:  
Resolves the above problem using Promises:  
```javascript  
placingOrder(cart)  
  .then((order) => preparingOrder(order))  
  .then((prepOrder) => pickupOrder(prepOrder))  
  .then((pOrder) => deliverOrder(pOrder))  
  .catch((error) => console.log(error))  
  .finally(() => console.log("Order is completed"));
```  

---

## How to Run  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/food-order-simulation.git  
   cd food-order-simulation  
   ```  

2. Open the `index.html` file in a browser or run the script in Node.js to see the simulation in action.

---

## Learning Outcomes  
- Understand the problems with callback hell.  
- Learn how to resolve callback hell using Promises.  
- Gain hands-on experience with asynchronous workflows.  
- Practice error handling with Promises.  

---

2.
# Weather App 🌤️

## Description  
This is a simple weather application that allows users to search for the current weather of any city around the world. The app fetches data from the [OpenWeatherMap API](https://openweathermap.org/api) and displays relevant weather information such as temperature, humidity, wind speed, and a corresponding weather icon. The app provides real-time weather updates with an intuitive interface.

---

## Features  
- **City Search**: Search for the weather by entering a city name in the search bar.
- **Weather Information**: Displays current weather details, including temperature, humidity, and wind speed.
- **Weather Icons**: Uses weather icons based on the weather conditions (e.g., clear, rain, clouds).
- **Error Handling**: Displays an error message if the city is not found.

---

## Tech Stack  
- **Languages**: JavaScript, HTML, CSS  
- **API**: OpenWeatherMap API  
- **Icons**: Custom weather icons for different weather conditions  
- **Environment**: Web (Browser)

---

## Workflow  
1. **Enter a City**: Type the name of a city into the search bar and click the "Search" button.
2. **Fetch Weather Data**: The app fetches weather data from OpenWeatherMap using the provided API key.
3. **Display Weather Info**: Upon receiving a valid response, the app displays:
   - **City Name**
   - **Temperature in °C**
   - **Humidity Percentage**
   - **Wind Speed in meters per second**
   - **Corresponding Weather Icon**
4. **Handle Errors**: If the city name is invalid or the city is not found, an error message is displayed.

---

## Code Explanation

1. **Fetching Data from OpenWeatherMap API**  
   The `checkWeather()` function uses the `fetch` API to send a request to OpenWeatherMap, appending the city name and API key to the URL. The response is checked to ensure the city is valid. If the city is valid, the data is parsed and displayed on the page.
   
2. **Displaying Weather Information**  
   - The city name, temperature, humidity, and wind speed are dynamically displayed in their respective HTML elements.
   - The weather icon is updated based on the weather condition using a mapping of conditions to icon images stored in the `objSrc` object.
   
3. **Error Handling**  
   If the city is not found (response status `404`), an error message is shown, and the weather information is hidden.

4. **UI Interaction**  
   The search button listens for a click event to trigger the `checkWeather()` function. The search bar is cleared after the city is searched.

---

## How to Run  

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your browser to launch the app.
3. Enter a city name and click the "Search" button to fetch and display the weather information.

---

## Example  
**Input**:  
City: "New York"  

**Output**:  
- City: New York  
- Temperature: 23°C  
- Humidity: 75%  
- Wind Speed: 5 m/s  
- Weather Icon: Clear skies

---

## API Key  
To make the app functional, you need to get your own API key from [OpenWeatherMap](https://openweathermap.org/api). +
---

