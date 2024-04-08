// WEATHER APP

// Select elements from the DOM
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "2a7373ef312e6b15d29a6eda3c3af427";

// Add event listener to the form
weatherForm.addEventListener("submit", async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get city name from input field
    const city = cityInput.value;

    // Check if city name is entered
    if (city) {
        try {
            // Fetch weather data for given city
            const weatherData = await getWeatherData(city);
            // Display weather information if successful
            displayWeatherInfo(weatherData);
        } catch (error) {
            // Handle errors during data fetching
            console.error(error);
            displayError(error);
        }
    } else {
        // Display message if no city is entered
        displayError("Please enter a city");
    }
});

// Function to fetch weather data
async function getWeatherData(city) {
    // Construct API url with given city and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Fetch data from API
    const response = await fetch(apiUrl);

    // Check status code to see if response was successful
    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }
    // Parse the JSON response data
    return await response.json();
}

// Function to display weather information
function displayWeatherInfo(data) {
    // Destructure data to extract relevant information
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }],
    } = data;

    // Clear card of any existing content
    card.textContent = "";
    card.style.display = "flex";

    // Create elements to display weather info
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");

    // Set content for each element
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = description;

    // Append elements to the card container
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
}

// Function to display error message
function displayError(message) {
    // Create an element to display the error message
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    // Clear existing content from card
    card.textContent = "";
    card.style.display = "flex";

    // Append the error message to card
    card.appendChild(errorDisplay);
}
