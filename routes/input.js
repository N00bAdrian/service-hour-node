const express = require('express')
const router = express.Router();

router.get('/', (req,res) => {
    res.render('input', {
        title: 'Input Service Hours'
    })
})

router.get('/namelist', (req,res) => {
    res.render('namelist', {
        title: 'Update Namelist'
    })
})

module.exports = router