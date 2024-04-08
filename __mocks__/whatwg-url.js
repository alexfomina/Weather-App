// __mocks__/whatwg-url.js

// Define a mock implementation for TextEncoder
class MockTextEncoder {
    encode() {
      // Mock implementation, can be empty
    }
  }
  
  // Export the mocked TextEncoder
  global.TextEncoder = MockTextEncoder;
  