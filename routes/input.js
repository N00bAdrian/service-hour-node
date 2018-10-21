const express = require('express')
const router = express.Router();

router.get('/', (req,res) => {
    res.render('input', {
        title: 'Input Service Hours'
    })
})

module.exports = router