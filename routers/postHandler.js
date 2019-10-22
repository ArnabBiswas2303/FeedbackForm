const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('WElCOME TO POST!');
});

router.post('/', (req,res) => {
    
})

module.exports = router;