//WEATHER APP

// Select elements from the DOM
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "2a7373ef312e6b15d29a6eda3c3af427";
const unitSwitch = document.querySelector(".unitSwitch")
var weatherData;
var useCelsius = false;


//add event listener to the form
weatherForm.addEventListener("submit", async event => {

    //prevent default form submission behavior
    event.preventDefault();
    //print response to console
    //console.log("Form submitted: ", event);

    //get city name from input field
    const city = cityInput.value;

    //check if city name is entered
    if(city)
    {
        try{
            //fetch weather data for given city
            weatherData = await getWeatherData(city);
            //display weather information if successful
            displayWeatherInfo(weatherData);
        }
        catch(error)
        {
            //handle errors during data fetching
            console.error(error);
            displayError(error);
        }
    }
    else{
        //display message if no city is entered
        displayError("Please enter a city");
    }
});

//function to fetch weather data
async function getWeatherData(city){
    //construct API url with given city and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    //fetch data from API
    const response = await fetch(apiUrl);

    //log response for debugging
    //console.log(response);

    //check status code to see if response was successful
    if(!response.ok)
    {
        throw new Error("Could not fetch weather data");
    }
    //parse the JSON response data
    return await response.json();
}

//function to display weather information
function displayWeatherInfo(data){
    //check console to see if information was properly pulled
    //console.log(data);

    //destructure data to extract relevant information
    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description}]} = data;
    
    //clear card of any existing content
    card.textContent = "";
    card.style.display = "flex";

    //create elements to display weather info
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    tempDisplay.id = "tempDisplay"
    const humidityDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");

    //set content for each element
    cityDisplay.textContent = city;

    tempDisplay.textContent = calcTemp(temp);


    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descriptionDisplay.textContent = description;

    //apply css style to variable
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descriptionDisplay.classList.add("descriptionDisplay");

    //append elements to the card container
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
} 

//function to display error message
function displayError(message){

    //create an element to display the error message
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    //clear existing content from card
    card.textContent = "";
    card.style.display = "flex";

    //append the error message to card
    card.appendChild(errorDisplay);
}

unitSwitch.addEventListener("click", function() {
    useCelsius = !useCelsius;
    var far = document.getElementById("Far");
    var cel = document.getElementById("Cel");
    if(useCelsius){
        cel.style.color = "#8C8C8C";
        far.style.color = "#B3B6B7";
    } else {
        far.style.color = "#8C8C8C";
        cel.style.color = "#B3B6B7";
    }
    displayWeatherInfo(weatherData);
})

function calcTemp(temp){
    if(useCelsius){
        return `${(temp - 273.15).toFixed(1)}°C`;
    } else {
        return `${((temp - 273.15) * 1.8 +32).toFixed(1)}°F`;
    }
}