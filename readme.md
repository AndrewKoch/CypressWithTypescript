## To Run
When Cypress initializes, it searches for compatible browsers. This includes all compatible versions! After a browser
has been added, reinitialize the test runner or select the browser with the CLI. Cypress.io maintains this site which
contains a significant number of Chromium releases:
https://chromium.cypress.io/

#### Open Cypress Test Runner
To run tests from Cypress' test runner:

`npm run cypress:open`

#### Run All Tests From Command Line

To run all tests from the command line, the following schema is employed:
`base:browser:headed`

where base is `cypress:run`

browser options are `chrome`, `firefox`, `electron`, or `edge`

and `headed` is an optional argument

So, as an example, the following will headlessly run all Cypress tests with Chrome:

`npm run cypress:run:chrome`

And this will launch an Edge browser run all Cypress tests:

`npm run cypress:run:edge:headed`

See ~/package.json for more details.

---
## Tips and Tools
### Cypress Global Settings
The browser vertical and horizontal resolutions can be set in ~/cypress.json. Below is an example of how to set the
browser to 1080p. By modifying the following values:
```
  "viewportWidth": 1920,
  "viewportHeight": 1080
```

Cypress has a hot reload feature that reruns the current test whenever a change is detected. To disable this, set the
following to false in ~/cypress.json:
```
watchForFileChanges: false
```
Or to enable:
```
watchForFileChanges: true
```

Cypress fails the test if uncaught exceptions are thrown. To disable this behavior, add the following to
~/cypress/support/index.js:
```
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
```

To open Chrome DevTools in headed mode, add the following to ~/cypress/plugins/index.js
```
module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium' || browser.name === 'canary') {
            launchOptions.args.push('--auto-open-devtools-for-tabs')

            return launchOptions
        }
    })
}
```

### Urls and Resources
Cypress.io's documentation for Typescript integration and suggestions on how to add Typescript definition files: 

https://docs.cypress.io/guides/tooling/typescript-support.html

This page had some good suggestions on how to build and organize tests:

https://basarat.gitbook.io/typescript/intro-1/cypress#installation

Cypress.io's suggestions for style and best practices:

https://docs.cypress.io/guides/references/best-practices.html

Cypress.io's list of suggested plugins and extensions:

https://docs.cypress.io/plugins/index.html

Cypress.io's VP of Engineering has an active blog with fairly frequent with posts on Cypress:

https://glebbahmutov.com/blog/tags/cypress/

Cypress has an active forum/chat room:

https://gitter.im/cypress-io/cypress