/**
 * Jest Setup File
 * This file runs after the test environment is set up
 */

// Mock DOM elements
Object.defineProperty(document, 'querySelector', {
  writable: true,
  value: jest.fn(),
});

Object.defineProperty(document, 'querySelectorAll', {
  writable: true,
  value: jest.fn(),
});

// Suppress console errors in tests (optional)
// global.console = {
//   ...console,
//   error: jest.fn(),
//   warn: jest.fn(),
// };
