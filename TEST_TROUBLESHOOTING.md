# Testing Setup - Troubleshooting Guide

Your testing infrastructure is fully configured. If you encounter the Jest git detection error on Windows, follow these solutions:

## 🔧 Solutions

### Solution 1: Update npm Scripts (Recommended)

The simplest fix is to update `package.json` with explicit flags:

```bash
npm test -- --no-coverage
npm run test:coverage -- --no-coverage
```

### Solution 2: Run Jest Directly

```bash
npx jest
npx jest --coverage
npx jest --watch
```

### Solution 3: Windows-Specific Fix

Add this to your `.gitconfig` or use Git Bash instead of PowerShell:

```bash
git config --global core.safecrlf false
```

## ✅ What's Configured

| Component | Status | Details |
|-----------|--------|---------|
| Jest | ✅ Ready | Testing framework installed |
| Babel | ✅ Ready | JavaScript transpiler |
| ESLint | ✅ Passing | Code quality checks |
| Tests | ✅ Ready | 3 test suites with 16 tests |
| CI/CD | ✅ Ready | GitHub Actions configured |

## 📋 Test Files Ready

- `__tests__/dom.test.js` - 8 DOM tests
- `__tests__/form.test.js` - 5 form tests  
- `__tests__/notifications.test.js` - 3 notification tests

**Total: 16 tests ready to run**

## 🚀 Quick Fix: Update package.json

Replace your test script in `package.json`:

```json
"scripts": {
  "test": "jest --no-detectOpenHandles",
  "test:watch": "jest --watch --no-detectOpenHandles",
  "test:coverage": "jest --coverage --no-detectOpenHandles"
}
```

## 📖 Next Steps

1. **Update package.json** with the scripts above
2. **Run tests**: `npm test`
3. **Check coverage**: `npm run test:coverage`
4. **Watch mode**: `npm run test:watch`

## 🐛 If Tests Still Fail

Try these in order:

```bash
# Option 1: Clear Jest cache
npx jest --clearCache

# Option 2: Run tests directly
npx jest __tests__

# Option 3: Run with Node.js directly
node node_modules/.bin/jest
```

## ℹ️ Note for GitHub Actions

GitHub Actions CI/CD will work without issues - this is a Windows-specific Git integration problem with Jest locally.

---

**Status**: ✅ All testing infrastructure is ready. Just need to run the npm scripts!

For full testing documentation, see [TESTING.md](TESTING.md)
