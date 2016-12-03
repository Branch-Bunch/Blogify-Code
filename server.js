const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const replitRoute = require('./routes/replit.js')

const PORT = process.env.PORT

app.use(express.static(__dirname + '/public'))
app.use('/replit', replitRoute)

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

