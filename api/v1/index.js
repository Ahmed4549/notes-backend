const express = require("express");
const notesRouter = express.Router();

notesRouter.get("/", (req, res) => {
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
    {
      text: "IOT Course",
      link: "some link here",
    },
    {
      text: "IOT Course",
      link: "some link here",
    },
    {
      text: "IOT Course",
      link: "some link here",
    },
  ];
  res.json({ notes });
});

notesRouter.get("/dummy", (req, res) => {
  res.send("dummy world");
});

module.exports = {
  notesRouter,
};
