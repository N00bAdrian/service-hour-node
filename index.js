const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const mongoose = require('mongoose')

//Mongoose connection
mongoose.connect('mongodb://localhost/servicehour')
let db = mongoose.connection

//Test database connection
db.once('open', () => {
    console.log('Connected to MongoDB')
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