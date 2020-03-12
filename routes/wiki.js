const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require("../models");
const { addPage } = require("../views");

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title[2],
    content: req.body.title[3]
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/')
});
router.post('/', (req, res, next) => {
    res.json(req.body);
});
router.get('/add', async (req, res, next) => {
   await res.send(addPage());
});

module.exports = router;

