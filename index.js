const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/api", (req, res) => {
  res.send("hello world");
});

app.get("/api/notes", (req, res) => {
  const notes = [
    {
      text: "Blockchain Course",
      link: "some link here",
    },
    {
      text: "CNC Course",
      link: "some link here",
    },
    {
      text: "IOT Course",
      link: "some link here",
    },
  ];
  res.json({ notes });
});

app.listen(port, () => {
  console.log("Notes Backend Running on port: ", port);
});
