const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connect;
db.on("error", console.error.bind(console, "connection err"));
db.once("open", function () {
  console.log("db is running");
});
