
//WORKING VERSION BELOW
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

//function to display weather information
function displayWeatherInfo(data){
    //check console to see if information was properly pulled
    //console.log(data);

    //destructure data to extract relevant information
    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}]} = data;
    
    //clear card of any existing content
    card.textContent = "";
    card.style.display = "flex";

    //create elements to display weather info
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const weatherIcon = document.createElement("img");

    //set content for each element
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = description;

    // Set weather icon based on weather condition
    switch (Math.floor(id / 100)) {
        case 2: // Thunderstorm
            weatherIcon.src = "images/thunderstorm.png";
            break;
        case 3: // Drizzle
            weatherIcon.src = "images/drizzle.png";
            break;
        case 5: // Rain
            weatherIcon.src = "images/rain.png";
            break;
        case 6: // Snow
            weatherIcon.src = "images/snow.png";
            break;
        case 7: // Atmosphere
            weatherIcon.src = "images/atmosphere.png";
            break;
        case 8: // Clear or Clouds
            if (id === 800) {
                weatherIcon.src = "images/clear.png";
            } else {
                weatherIcon.src = "images/clouds.png";
            }
            break;
        default: // Other conditions
            weatherIcon.src = "images/clouds.png";
            break;
    }

    //apply css style to variables
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descriptionDisplay.classList.add("descriptionDisplay");
    
    // Add CSS styling for the weather icon
    weatherIcon.classList.add("weatherIcon");

    //append elements to the card container
    card.appendChild(cityDisplay);
    card.appendChild(weatherIcon);
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


