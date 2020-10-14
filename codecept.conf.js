const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
     // windowSize: '1200x900',
      chrome: {
        args: [ '--start-maximized'],
        defaultViewport: {
          width: 0,
          height: 0
        }
      }
      
    }
  },
  include: {
   // I: './steps_file.js',
    youtubePage: './pages/youtubePage.js',
    googleSignInPage: './pages/googleSignInPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Codeceptjs',
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