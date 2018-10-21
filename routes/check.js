const express = require('express')
const router = express.Router();

router.get('/ind', (req, res) => {
    res.render('individual', {
        title: 'Check Individual Hours'
    })
})

router.get('/act', (req, res) => {
    res.render('activity', {
        title: 'Actiivty Record'
    })
})

router.get('/tot', (req, res) => {
    res.render('total', {
        title: 'Total Record'
    })
})

router.get('/mvmt', (req, res) => {
    res.render('mvmt', {
        title: 'Volunteer Movement'
    })
})

module.exports = router