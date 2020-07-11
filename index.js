require('dotenv').config();
const server = require("./api/server");

const port = process.env.PORT || 5000;

server.get("/hi", (req, res) => {
  res.send("hi");
});
server.listen(port, () => console.log(`listening to ${port}`));