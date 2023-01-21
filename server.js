const APP = require("express");
const routes = require("./routes");

const app = new APP();

const port = process.env.port || 8080;
app.listen(port, async function () {
    try {
        console.log("Server running on port", port);
    } catch (error) {
        console.log("Error in setting environment variables", error);
        process.exit(-1);
    }
});

app.use('/', require('./routes/index.js'));
