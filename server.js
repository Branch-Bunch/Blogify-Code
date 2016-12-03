const dotenv = require('dotenv').config()
const ReplitClient = require('replit-client')

const TOKEN = JSON.parse(process.env.TOKEN)

let repl = new ReplitClient('api.repl.it', 80, 'ruby', TOKEN)

repl.connect()
    .then(() => {
        console.log('connected') 
    }, (error) => {
        console.log('failed')
        console.log(error)
    })
