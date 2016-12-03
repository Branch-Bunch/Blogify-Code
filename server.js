const dotenv = require('dotenv').config()
const ReplitClient = require('replit-client')

const TOKEN = JSON.parse(process.env.TOKEN)

let repl = new ReplitClient('api.repl.it', 80, 'python3', TOKEN)

repl.connect()
    .then(() => {
        console.log('connected')
        repl.evaluate('x = 1\nprint(x)', {stdout: (out) => {
           console.log(out) 
        }})
            .then((result) => {
                if (result.error) {
                    console.log(result.error)
                }
                console.log(result.data)
            })
    }, (error) => {
        console.log('failed')
        console.log(error)
    })
