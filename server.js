const express = require("express")
const path = require("path")
const http = require("http")


async function start() {
    // if you wanted to spin up lots of server you could use npm package portfinder
    const port = 3000;
    const url = `http://localhost:${port}`;
    const app = express();
    app.use("*", express.static(path.join(__dirname, "./docs")));
    const server = http.createServer(app).on("error", (err) => console.error(err));
    server.listen(port);
    return {port, url, stop: () => {server.close()}}
}

module.exports.start = start;