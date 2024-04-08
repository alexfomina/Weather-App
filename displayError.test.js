const { JSDOM } = require('jsdom');

// Import the function you want to test
const displayError = require('./index');

// Set up jsdom
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;

// Write your test cases
test("displayError sets the error message content", () => {
    const errorMessage = "Test error message";
    const errorDisplay = document.createElement("p");

    displayError(errorMessage, errorDisplay);

    expect(errorDisplay.textContent).toBe(errorMessage);
    expect(errorDisplay.classList.contains("errorDisplay")).toBe(true);
});
