const dotenv = require('dotenv').config()
const ReplitClient = require('replit-client')
const express = require('express')
const bodyParser = require('body-parser')
const TOKEN = JSON.parse(process.env.TOKEN)

const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

let js = ['javascript', 'js', 'node']

function parseLang(lang) {
    if (js.includes(lang)) {
        return 'nodejs'
    }
    return lang
}

router.post('/', (req, res) => {
    console.log(req.body)
    let repl = new ReplitClient('api.repl.it', 80, parseLang(req.body.lang), TOKEN)
    repl.connect()
        .then(() => {
            console.log('connected')
            repl.evaluate(req.body.code, {
                stdout: (out) => out
            })
                .then((result) => {
                    if (result.error) throw new Error(result.error)
                    console.log(result)
                    res.send({
                        data: result.data 
                    })
                    repl.disconnect()
                    console.log('disconnecting')
                })
                .catch((error) => {
                    let data  = { data: error.toString() }
                    console.log(data)
                    res.send(data)
                })
        })
        .catch((error) => {
            let data = { data: error.toString() }
            console.log(data)
            res.status(500).send(data)
        })
})

module.exports = router
