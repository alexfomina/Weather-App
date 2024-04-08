// Import the function you want to test
const getWeatherData = require('./getWeatherData');

// Mock fetch function
global.fetch = jest.fn();

// Write your test
test("getWeatherData throws error for non-ok status code", async () => {
    // Mock the fetch function to return a response with non-ok status code
    fetch.mockResolvedValueOnce(new Response(null, { status: 404 }));
  
    try {
      await getWeatherData("anyCity");
      fail("Expected error to be thrown");
    } catch (error) {
      expect(error.message).toEqual("Could not fetch weather data");
    }
});
