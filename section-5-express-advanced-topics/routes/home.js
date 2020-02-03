//Darius Rain
//File: Root route 

const express = require('express'),
router = express.Router();

router.get("/", (req, res) => {
    res.send("On root route");
  });


  module.exports = router;