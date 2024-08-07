//routes/pages.js file
const express = require('express');
const router = express.Router();
//callback function
router.get('/', (req, res) => {
    res.send("This is the homepage")
});
router.get("/about", (req, res) => {
    res.send("This is the about us page")    
});
module.exports = router;