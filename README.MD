# Start a simple web server to run your tests against and visual diff

Ever had a need to spin up a simple web server to host a static file to do screenshots tests.
Here is how you can achieve this.

`npm install`

Run tests:
`npm test`

Generate new screenshots:
`npm test:screenshots`


Info:
- steps_file contains custom step `I.startServer`. This is optional if your server is already running
- To show the browser window show show in codecept.conf.js