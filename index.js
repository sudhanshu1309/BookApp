const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 8000; //port

const userRoutes = require("./routes/user");

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello there! This is root directory.");
});

//starting a server
app.listen(port, () => {
  console.log(`This is listening at http:localhost:${port}`);
});

//DB connection
databaseUri = "mongodb://localhost:27017/bookapp";
mongoose
  .connect(databaseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((e) => {
    console.log("DB Connection Failed " + e);
  });

app.use("/api", userRoutes);
