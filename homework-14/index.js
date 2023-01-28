const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use('/public', express.static(__dirname + "/static"));

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
