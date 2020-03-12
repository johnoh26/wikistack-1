const express = require("express");
const router = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");

router.post("/", async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  await res.send("got to GET /wiki/");
});
router.post("/", async (req, res, next) => {
  await res.json(req.body);
  await res.send("got to POST /wiki/");
});
router.get("/add", async (req, res, next) => {
  await res.send(addPage());
});

module.exports = router;
