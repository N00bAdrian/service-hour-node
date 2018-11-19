const express = require('express')
//const db = require('../index')
//const sqlite = require('sqlite3')
const router = express.Router();

router.get('/', (req,res) => {
    //let stmt = db.prepare('SELECT * FROM namelist')

    let namelist = [2013086, 2013096, 2013092, 2013103, 2013132]

    res.render('input', {
        title: 'Input Service Hours',
        namelist: namelist
    })
})

router.post('/add', (req, res) => {
    let record = new Record()
    record.applicant = req.body.applicant
    record.hours = req.body.hours
    record.date = req.body.date
    record.sid = req.body.sid

    article.save((err) => {
        if (err){
            console.log(err)
            return
        }
        else{
            req.flash('success', 'Article Added')
            res.redirect('/check/act')
        }
    })
})

router.get('/namelist', (req,res) => {
    res.render('namelist', {
        title: 'Update Namelist'
    })
})

module.exports = router