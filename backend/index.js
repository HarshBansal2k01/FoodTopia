const express = require("express");
const app = express();
const port = 5000;
// importing mongoose
const mongoDB = require("./db");
mongoDB();

// middle ware
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
