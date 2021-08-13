Feature("My test");
const {I} = inject();

let server = false;
BeforeSuite(async () => {
    I.say("Start server");
    server = await I.startServer();
});

AfterSuite(() => {
    I.say("Start stop");
    server && server.stop();
})

Scenario("My scenario", () => {
    I.amOnPage("/");
    I.screenshotElement(".hello", "Hello_world")
    I.seeVisualDiff('Hello_world.png', {prepareBaseImage: process.env.CAPTURE_SCREENSHOTS ? true : false, tolerance: 2})
})