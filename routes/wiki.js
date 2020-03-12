const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/')
});
router.post('/', (req, res, next) => {
    res.send('got to POST /wiki/')
});
router.get('/add', async (req, res, next) => {
   await res.send('got to GET wiki/add');
});

module.exports = router;

