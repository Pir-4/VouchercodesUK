# VouchercodesUK Test Automation Project

This project contains end-to-end test automation for the VouchercodesUK website, specifically focusing on restaurant offer search functionality. The tests are built using Playwright and TypeScript, following the Page Object Model pattern.

## Overview

The test suite validates the restaurant offer search feature by testing various combinations of:
- **Locations**: Different UK postcodes (e.g., "N17 10QJ", "SW7 5ND")
- **Dates**: Multiple date options (Any, Today, Tomorrow, and future dates)
- **People**: Different party sizes (from 1 to 10+ people)

The tests verify that users can:
1. Navigate to the restaurant search page
2. Fill in location, date, and number of people
3. Search for offers
4. Receive valid offer results

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js**: Version 18 or higher
- **npm**: Comes with Node.js
- **Git**: For cloning the repository

To verify your installation:

```bash
node --version
npm --version
```

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/Pir-4/VouchercodesUK.git
   cd VouchercodesUK
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```
   
   This will install Chromium, Firefox, and WebKit browsers required for test execution.

## Configuration

### Environment Variables

The project uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```env
PAGE_URL=https://www.vouchercodes.co.uk
APP_LOG_LEVEL=info
SCREENSHOTS_PATH=/tmp/screenshots
IS_SAVE_SCREENSHOTS=false
```

**Environment Variables Explained:**
- `PAGE_URL`: The base URL of the website to test (required)
- `APP_LOG_LEVEL`: Logging level (`debug`, `info`, `warn`, `error`) - defaults to `info`
- `SCREENSHOTS_PATH`: Directory path for saving screenshots - defaults to `/tmp/screenshots`
- `IS_SAVE_SCREENSHOTS`: Whether to save screenshots (`true` or `false`) - defaults to `false`

**Note**: The `.env` file is not included in version control. Create your own `.env` file based on your needs.

## Running Tests

### Basic Test Execution

Run all tests in all configured browsers (Chromium, Firefox, WebKit):

```bash
npx playwright test
```

### Run Tests in a Specific Browser

Run tests in a single browser:

```bash
# Chromium
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# WebKit (Safari)
npx playwright test --project=webkit
```

### Run Tests in Headed Mode

View the browser while tests run:

```bash
npx playwright test --headed
```

### Run Tests in UI Mode

Use Playwright's interactive UI mode for debugging:

```bash
npx playwright test --ui
```

This opens a graphical interface where you can:
- See all tests
- Run individual tests
- Debug with breakpoints
- Watch test execution in real-time

### Run a Specific Test File

Run only the restaurants test file:

```bash
npx playwright test src/tests/restaurants.test.ts
```

### Run Tests with a Specific Title Pattern

Run tests matching a specific pattern:

```bash
# Run all tests for a specific location
npx playwright test -g "N17 10QJ"

# Run tests for a specific date
npx playwright test -g "Today"

# Run tests for a specific number of people
npx playwright test -g "2"
```

### Run Tests in Debug Mode

Debug tests step-by-step with Playwright Inspector:

```bash
npx playwright test --debug
```

Or set a breakpoint in code and run:

```bash
npx playwright test --debug --headed
```

### Run Tests with More Workers (Parallel Execution)

By default, tests run in parallel. You can control the number of parallel workers:

```bash
# Run with a specific number of workers
npx playwright test --workers=4
```

### Run Tests and Generate Report

After test execution, view the HTML report:

```bash
npx playwright test
npx playwright show-report
```

The report includes:
- Test results and status
- Screenshots for failed tests
- Videos for failed tests
- Trace files for debugging

### Run Tests with Retries

Retry failed tests automatically:

```bash
npx playwright test --retries=2
```

### Common Test Execution Examples

```bash
# Run all tests in Chromium with UI mode
npx playwright test --project=chromium --ui

# Run all tests headed with debugging
npx playwright test --headed --debug

# Run specific test file in headed mode
npx playwright test src/tests/restaurants.test.ts --headed

# Run tests and open report automatically
npx playwright test && npx playwright show-report
```

## Project Structure

```
VouchercodesUK/
├── src/
│   ├── base/
│   │   ├── asserts/          # Custom assertion utilities
│   │   ├── config.ts         # Environment configuration
│   │   ├── logger/           # Logging utilities
│   │   └── pages/            # Page Object Model classes
│   │       ├── basePage.ts
│   │       ├── mainPage.ts
│   │       └── restaurantsPage.ts
│   └── tests/
│       ├── fixtures.ts       # Playwright fixtures
│       ├── helpers.ts        # Test helper functions
│       ├── params.ts         # Test data parameters
│       └── restaurants.test.ts  # Test specifications
├── playwright.config.ts      # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## Test Structure

### Test Data

Test parameters are defined in `src/tests/params.ts`:
- **LOCATIONS**: Array of UK postcodes to test
- **DATES**: Array of date options (Any, Today, Tomorrow, future dates)
- **PEOPLE**: Array of party sizes (1-10, 10+)

### Test Implementation

The main test file (`restaurants.test.ts`) uses nested loops to create parameterized tests for all combinations of locations, dates, and people. Each test:

1. Opens the main page
2. Closes privacy/cookie windows
3. Navigates to the restaurants page
4. Fills in location, date, and number of people
5. Verifies the input values are correct
6. Searches for offers
7. Verifies that offers are found (count > 0)

## Features

- **Page Object Model**: Clean separation of test logic and page interactions
- **Custom Assertions**: Reusable assertion utilities with clear error messages
- **Logging**: Structured logging throughout test execution
- **Screenshots**: Automatic screenshots on test failure
- **Video Recording**: Videos recorded for failed tests
- **Trace Files**: Detailed traces for debugging failed tests
- **Multi-browser Support**: Tests run on Chromium, Firefox, and WebKit
- **Parallel Execution**: Tests run in parallel for faster execution

## Troubleshooting

### Browsers Not Installed

If you see errors about missing browsers:

```bash
npx playwright install
```

### Tests Fail Due to Timeouts

If tests are timing out, you can increase timeouts in `playwright.config.ts` or set environment variables:

```bash
PLAYWRIGHT_TIMEOUT=60000 npx playwright test
```

### Environment Variables Not Loaded

Ensure your `.env` file is in the root directory and contains the required variables, especially `PAGE_URL`.

### Viewing Test Reports

After test execution, open the HTML report:

```bash
npx playwright show-report
```

The report is also available at `playwright-report/index.html` in your project directory.

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
