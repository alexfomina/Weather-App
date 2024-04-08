const { JSDOM } = require('jsdom');

// Import the function you want to test
const displayWeatherInfo = require('./index');

// Set up jsdom
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;

// Write your test cases
test("displayWeatherInfo displays correct information", () => {
    const mockData = {
      name: "London",
      main: { temp: 283.15, humidity: 70 },
      weather: [{ description: "Clear sky" }],
    };
  
    const card = document.createElement("div");
    card.classList.add("card");
  
    displayWeatherInfo(mockData, card);
  
    expect(card.textContent).toContain("London");
    expect(card.textContent).toContain("10°C"); // Converted temperature
    expect(card.textContent).toContain("Humidity: 70%");
    expect(card.textContent).toContain("Clear sky");
  
    expect(card.classList.contains("card")).toBe(true);
    expect(card.querySelectorAll(".cityDisplay").length).toBe(1);
    expect(card.querySelectorAll(".tempDisplay").length).toBe(1);
    expect(card.querySelectorAll(".humidityDisplay").length).toBe(1);
    expect(card.querySelectorAll(".descriptionDisplay").length).toBe(1);
});
