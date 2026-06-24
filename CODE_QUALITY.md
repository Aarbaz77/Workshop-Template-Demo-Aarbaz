# Code Quality & Testing

This project includes a comprehensive testing and code quality setup to ensure code reliability and consistency.

## 🧪 Testing Framework

**Jest** is used as the testing framework for this project.

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-run on file changes)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage

The project maintains a minimum coverage threshold of **70%** across:
- Branches
- Functions
- Lines
- Statements

Current coverage can be viewed in the `coverage/` directory after running `npm run test:coverage`.

## 📝 Linting

**ESLint** with Airbnb config ensures code consistency and catches common errors.

### Running Linter

```bash
# Check for linting errors
npm run lint

# Automatically fix linting errors
npm run lint:fix
```

## 🔍 Code Style

- **Extends**: Airbnb ESLint config
- **Environment**: Browser, ES2021, Node.js, Jest
- **Formatter**: Follows consistent JavaScript conventions

## 🤖 Continuous Integration

GitHub Actions automatically runs on:
- **Push** to `main` or `develop` branches
- **Pull Requests** to `main` or `develop` branches

### CI Workflow Steps

1. **Setup**: Node.js 18.x and 20.x environments
2. **Install**: Dependencies are cached for faster builds
3. **Lint**: Code is checked for style violations
4. **Test**: All tests are run with coverage
5. **Upload**: Coverage reports sent to Codecov

### CI Status Badge

Add this to your README.md to show CI status:

```markdown
![Tests & Code Quality](https://github.com/yourusername/web-app-skeleton/actions/workflows/tests.yml/badge.svg)
```

## 📊 Test Files

Tests are organized in the `__tests__/` directory:

- `__tests__/dom.test.js` - DOM structure and element tests
- `__tests__/form.test.js` - Form handling and validation tests
- `__tests__/notifications.test.js` - Notification system tests

## 📖 Writing Tests

### Test Structure

```javascript
describe('Feature Name', () => {
  beforeEach(() => {
    // Setup before each test
  });

  test('should do something', () => {
    // Test code
    expect(result).toBe(expected);
  });
});
```

### Common Jest Matchers

```javascript
expect(element).toBeInTheDocument();
expect(value).toBe(expected);
expect(array).toContain(item);
expect(spy).toHaveBeenCalled();
expect(element.classList.contains('class')).toBe(true);
```

## 🔧 Configuration Files

- `jest.config.js` - Jest test runner configuration
- `babel.config.js` - Babel transpilation for tests
- `jest.setup.js` - Jest environment setup
- `.eslintrc.json` - ESLint configuration

## 💡 Best Practices

1. **Write tests as you code** - Don't leave testing to the end
2. **Keep tests focused** - Each test should test one thing
3. **Use descriptive names** - Test names should explain what they test
4. **Mock external dependencies** - Keep tests isolated
5. **Maintain coverage** - Aim for high coverage but focus on critical paths

## 📚 Useful Links

- [Jest Documentation](https://jestjs.io/)
- [ESLint Documentation](https://eslint.org/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## 🚀 Next Steps

1. Write tests for new features
2. Maintain code coverage above 70%
3. Keep linting errors to minimum
4. Review CI/CD pipeline results
5. Collaborate and improve test suite

---

For more information about contributing, see [CONTRIBUTING.md](../CONTRIBUTING.md)
