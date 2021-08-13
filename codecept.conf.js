exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
      show: false,
      browser: 'chromium'
    },
    "ResembleHelper" : {
      "require": "codeceptjs-resemblehelper",
      "screenshotFolder" : "./output/",
      "baseFolder": "./tests/screenshots/base/",
      "diffFolder": "./tests/screenshots/diff/"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'express-server-start',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}