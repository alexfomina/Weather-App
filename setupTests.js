// setupTests.js
const { setup } = require('jest-environment-jsdom-sixteen');

setup();

// Mock TextEncoder
global.TextEncoder = require('util').TextEncoder;

// Polyfill TextDecoder
global.TextDecoder = require('util').TextDecoder;

const { JSDOM } = require('jsdom');

// Create a DOM environment
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://example.com', // Set a URL to mimic a complete browser environment
});

// Assign the window and document objects to the global object
global.window = dom.window;
global.document = dom.window.document;

// Custom mock for localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    }
  };
})();

// Assign the localStorage mock to the global object
Object.defineProperty(global, 'localStorage', {
  value: localStorageMock
});

// Assign navigator object to the global object
global.navigator = {
  userAgent: 'node.js',
};
