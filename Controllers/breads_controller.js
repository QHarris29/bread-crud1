const express = require('express');
const router = express.Router();
const Bread = require('../Models/bread');

//Bread routes
router.get('/', (req, res) => {
    res.send(Bread);
});

router.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex]);
});

module.exports = router;