const { JSDOM } = require('jsdom');

// Import the function you want to test
const getWeatherData = require('./index');

// Set up jsdom
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;

// Write your test cases
test("getWeatherData throws error for non-ok status code", async () => {
    // Mock the fetch function to return a response with non-ok status code
    const mockFetch = jest.fn().mockResolvedValueOnce(new Response(null, { status: 404 }));
    global.fetch = mockFetch;
  
    try {
      await getWeatherData("anyCity");
      fail("Expected error to be thrown");
    } catch (error) {
      expect(error.message).toEqual("Could not fetch weather data");
    } finally {
      // Restore original fetch function
      global.fetch = fetch;
    }
});
