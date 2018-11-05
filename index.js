const express = require('express')
const exphbs = require('express-handlebars')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
//const mongoose = require('mongoose')

//Mongoose connection
//mongoose.connect('mongodb://localhost/servicehour')
//let db = mongoose.connection

//Test database connection
/*db.once('open', () => {
    console.log('Connected to MongoDB')
})*/

//Initialize Database
var db = new sqlite3.Database('servicehour');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS namelist (
        sid INT PRIMARY KEY,
        ename VARCHAR(255),
        sex VARCHAR(1)
    )`)

    db.run(`CREATE TABLE IF NOT EXISTS record (
        rid INTEGER PRIMARY KEY AUTOINCREMENT,
        applicant VARCHAR(255),
        hours INT,
        day DATE,
        sid INT
    )`)
})

//Inistialize app
const app = express()

//Port number
port = 3000

var hbs = exphbs.create({
    defaultLayout: 'main'
})

//Set template view engine
app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))



//Home directory
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Service Hour',
    })
})

//Routes
let input = require('./routes/input')
app.use('/input', input)

let check = require('./routes/check')
app.use('/check',check)

//Start server
app.listen(port, () => {
    console.log('Server listening on port '+port)
})