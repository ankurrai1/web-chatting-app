const http = require("http");

const app=require("./app.js");

const server = http.createServer(app);
const io = app.io
io.attach(server );

const PORT = app.get("port");
const environment = app.get("env");

server.listen(PORT,() => {
    console.log(`app listening on port ${PORT}!`)
    console.log(`app is running in ${environment}`);
});
