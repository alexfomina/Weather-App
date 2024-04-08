// Import jsdom and set it up
const { JSDOM } = require('jsdom');
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

// Import the function you want to test
const displayError = require('./displayError');

// Write your test
test("displayError sets the error message content", () => {
    const errorMessage = "Test error message";
    const errorDisplay = document.createElement("p");
  
    displayError(errorMessage, errorDisplay);
  
    expect(errorDisplay.textContent).toBe(errorMessage);
    expect(errorDisplay.classList.contains("errorDisplay")).toBe(true);
});
