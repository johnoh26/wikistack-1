const express = require('express');
const router = express.Router();

const userRouter = router.use(function (req, res, next) {
    //code
    next()
});


module.exports = {
    userRouter
  };