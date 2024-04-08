// setupTests.js
const { JSDOM } = require('jsdom');

// Mock TextEncoder
global.TextEncoder = require('util').TextEncoder;

// Polyfill TextDecoder
global.TextDecoder = require('util').TextDecoder;

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://example.com', // Set a URL to mimic a complete browser environment
});
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
