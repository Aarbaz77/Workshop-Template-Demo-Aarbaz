# Development Setup Guide

This guide will help you get the project set up locally for development.

## Prerequisites

Before you begin, ensure you have:
- **Node.js** (v18.x or v20.x) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- A code editor (VS Code recommended - [Download](https://code.visualstudio.com/))

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/web-app-skeleton.git
cd web-app-skeleton
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- Jest (testing framework)
- ESLint (code linter)
- Babel (JavaScript transpiler)
- And other development tools

### 3. Verify Installation

```bash
npm test
```

All tests should pass ✅

## Development Workflow

### Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Code Quality

```bash
# Check for linting errors
npm run lint

# Auto-fix linting errors
npm run lint:fix
```

### File Structure

```
web-app-skeleton/
├── index.html              # Main HTML file
├── styles.css              # CSS styling
├── script.js               # Main JavaScript
├── package.json            # Dependencies & scripts
├── __tests__/              # Test files
│   ├── dom.test.js
│   ├── form.test.js
│   └── notifications.test.js
├── .github/
│   ├── ISSUE_TEMPLATE/     # GitHub issue templates
│   └── workflows/
│       └── tests.yml       # CI/CD configuration
├── assets/                 # Asset files
│   ├── images/
│   ├── fonts/
│   └── js/
├── jest.config.js          # Jest configuration
├── babel.config.js         # Babel configuration
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.json        # Prettier configuration
├── TESTING.md              # Testing guide
├── CODE_QUALITY.md         # Code quality info
└── README.md               # Project README
```

## Common Tasks

### Adding a New Feature

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Implement your feature** in `script.js` or appropriate file

3. **Write tests** in `__tests__/` directory
   ```bash
   npm run test:watch
   ```

4. **Check code quality:**
   ```bash
   npm run lint:fix
   ```

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add your feature description"
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

### Fixing a Bug

1. **Create a bug-fix branch:**
   ```bash
   git checkout -b fix/bug-description
   ```

2. **Reproduce the bug** with a test

3. **Fix the bug** in the code

4. **Verify the test passes:**
   ```bash
   npm test
   ```

5. **Follow the commit process** as above

### Updating Styles

1. **Edit** `styles.css`
2. **Test** in your browser by opening `index.html`
3. **Run tests** to ensure nothing broke:
   ```bash
   npm test
   ```

### Adding New Dependencies

```bash
npm install package-name
```

Update `package.json` is automatic. Commit the changes:

```bash
git add package.json package-lock.json
git commit -m "Add new dependency: package-name"
```

## Debugging

### Browser DevTools

1. Open `index.html` in your browser
2. Press `F12` to open Developer Tools
3. Check Console for errors
4. Use debugger to set breakpoints

### VS Code Debugging

1. Set breakpoint by clicking line number
2. Run in debug mode: `F5`
3. Step through code with debugger

### Test Debugging

```bash
# Run tests with node debugger
node --inspect-brk node_modules/.bin/jest --runInBand

# Open chrome://inspect in Chrome DevTools
```

## Useful npm Scripts

| Script | Purpose |
|--------|---------|
| `npm test` | Run all tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate coverage report |
| `npm run lint` | Check code style |
| `npm run lint:fix` | Auto-fix code style |

## Git Workflow

### Before Committing

```bash
# Pull latest changes
git pull origin develop

# Create feature branch
git checkout -b feature/name

# Make changes and test
npm test
npm run lint:fix

# Stage and commit
git add .
git commit -m "Clear commit message"

# Push to remote
git push origin feature/name
```

### Pull Request Checklist

- [ ] Tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Coverage maintained above 70%
- [ ] Code follows style guide
- [ ] Commit messages are descriptive
- [ ] No sensitive data committed

## Troubleshooting

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Tests Failing After Updates

```bash
# Clear Jest cache
npm test -- --clearCache
```

### Port Already in Use

```bash
# Find process using port 8000
lsof -i :8000

# Kill process
kill -9 <PID>
```

### Git Issues

```bash
# Reset local changes
git reset --hard HEAD

# Pull fresh copy
git pull origin main
```

## Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Git Documentation](https://git-scm.com/doc)
- [Jest Documentation](https://jestjs.io/)
- [ESLint Documentation](https://eslint.org/)

## Support

For issues or questions:
1. Check existing [GitHub Issues](https://github.com/yourusername/web-app-skeleton/issues)
2. Read [CONTRIBUTING.md](CONTRIBUTING.md)
3. Open a new issue with clear description

---

Happy coding! 🚀
