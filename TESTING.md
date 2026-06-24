# Testing Guide

This document provides comprehensive guidelines for testing in this project.

## Quick Start

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run linter
npm run lint
```

## Test Structure

All tests are located in the `__tests__/` directory and follow Jest conventions.

### Test File Naming

- `*.test.js` - Standard Jest test files
- `*.spec.js` - Alternative test file naming convention

### Example Test File

```javascript
describe('Feature Name', () => {
  beforeEach(() => {
    // Setup code runs before each test
    document.body.innerHTML = '<div id="test"></div>';
  });

  afterEach(() => {
    // Cleanup code runs after each test
    document.body.innerHTML = '';
  });

  test('should do something specific', () => {
    const element = document.querySelector('#test');
    expect(element).toBeInTheDocument();
  });
});
```

## Current Test Suites

### 1. DOM Tests (`dom.test.js`)

Tests for HTML structure and element presence:
- Header and navigation
- Main content sections
- Feature cards
- Footer
- Button elements

**Run only these tests:**
```bash
npm test -- dom.test.js
```

### 2. Form Tests (`form.test.js`)

Tests for contact form functionality:
- Form element presence
- Form field retrieval
- FormData handling
- Submit button validation

**Run only these tests:**
```bash
npm test -- form.test.js
```

### 3. Notification Tests (`notifications.test.js`)

Tests for notification system:
- Element creation
- Message content
- Notification types (success, error, info)

**Run only these tests:**
```bash
npm test -- notifications.test.js
```

## Writing New Tests

### Step 1: Create Test File

Create a new file in `__tests__/` directory:

```javascript
// __tests__/my-feature.test.js
describe('My Feature', () => {
  test('should work correctly', () => {
    // Test implementation
  });
});
```

### Step 2: Setup DOM (if needed)

```javascript
beforeEach(() => {
  document.body.innerHTML = `
    <form id="my-form">
      <input type="text" id="input">
      <button type="submit">Submit</button>
    </form>
  `;
});
```

### Step 3: Write Assertions

```javascript
test('form should submit', () => {
  const form = document.querySelector('#my-form');
  expect(form).toBeInTheDocument();
  
  const input = document.querySelector('#input');
  input.value = 'test';
  expect(input.value).toBe('test');
});
```

### Step 4: Run Tests

```bash
npm test
```

## Jest Matchers Reference

### Common Matchers

| Matcher | Usage |
|---------|-------|
| `toBe()` | Exact equality |
| `toEqual()` | Deep equality |
| `toContain()` | Array/string contains value |
| `toBeInTheDocument()` | Element exists in DOM |
| `toHaveClass()` | Element has CSS class |
| `toHaveAttribute()` | Element has attribute |
| `toHaveBeen Called()` | Spy was called |
| `toThrow()` | Function throws error |

### DOM-Specific Matchers

```javascript
expect(element).toBeInTheDocument();
expect(element).toHaveClass('active');
expect(element).toHaveAttribute('href');
expect(element).toHaveTextContent('Hello');
expect(element).toBeVisible();
expect(element).toBeDisabled();
```

## Testing Best Practices

### 1. One Assertion Per Test (Generally)

```javascript
// ✅ Good
test('button should be clickable', () => {
  expect(button).not.toBeDisabled();
});

test('button should have correct text', () => {
  expect(button.textContent).toBe('Click Me');
});

// ❌ Avoid
test('button should work', () => {
  expect(button).not.toBeDisabled();
  expect(button.textContent).toBe('Click Me');
});
```

### 2. Descriptive Test Names

```javascript
// ✅ Good
test('should submit form with valid data', () => {});

// ❌ Avoid
test('form works', () => {});
```

### 3. Use Setup/Teardown Methods

```javascript
describe('Form Handler', () => {
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });
});
```

### 4. Mock External Dependencies

```javascript
test('should call API', () => {
  const mockFetch = jest.fn();
  global.fetch = mockFetch;
  
  // Test code
  
  expect(mockFetch).toHaveBeenCalled();
});
```

### 5. Test User Interactions

```javascript
test('button click should trigger handler', () => {
  const handler = jest.fn();
  const button = document.createElement('button');
  button.addEventListener('click', handler);
  
  button.click();
  
  expect(handler).toHaveBeenCalled();
});
```

## Coverage Reports

### Generate Coverage

```bash
npm run test:coverage
```

This creates a `coverage/` directory with detailed reports.

### Viewing Coverage

Open `coverage/lcov-report/index.html` in a browser to see:
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage

### Coverage Goals

Current project minimum thresholds:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## Debugging Tests

### Run Single Test

```bash
npm test -- --testNamePattern="should do something"
```

### Run Single File

```bash
npm test -- dom.test.js
```

### Verbose Output

```bash
npm test -- --verbose
```

### Debug Mode

```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

Then open `chrome://inspect` in Chrome DevTools.

## CI/CD Integration

Tests run automatically on:
- Push to `main` or `develop` branches
- Pull Requests to `main` or `develop` branches

### GitHub Actions Workflow

See `.github/workflows/tests.yml` for the CI configuration.

### Status Badge

```markdown
![Tests](https://github.com/yourusername/web-app-skeleton/actions/workflows/tests.yml/badge.svg)
```

## Continuous Improvement

### Adding Tests for Bug Fixes

When fixing a bug, write a test that fails with the bug and passes with the fix:

```javascript
test('should handle empty input', () => {
  const result = processInput('');
  expect(result).toBe(null);
});
```

### Testing Edge Cases

```javascript
test('should handle null values', () => {
  expect(processData(null)).not.toThrow();
});

test('should handle very long strings', () => {
  const longString = 'a'.repeat(10000);
  expect(processData(longString)).toBeDefined();
});
```

## Troubleshooting

### Tests Not Running

```bash
# Clear Jest cache
npm test -- --clearCache
```

### Import Errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Timeout Issues

```javascript
test('async operation', async () => {
  // Increase timeout to 10 seconds
}, 10000);
```

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library Best Practices](https://testing-library.com/docs/)
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

---

For questions, see [CODE_QUALITY.md](CODE_QUALITY.md) or open an issue on GitHub.
