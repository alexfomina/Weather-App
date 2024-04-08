// setupTests.js
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://example.com', // Set a URL to mimic a complete browser environment
  pretendToBeVisual: true, // Pretend to be a visual browser, enabling certain features like scrollIntoView
  storageQuota: 10000000, // Set a larger storage quota if needed
});

global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
