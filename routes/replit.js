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

router.post('/', (req, res) => {
    console.log(req.body)
    let repl = new ReplitClient('api.repl.it', 80, req.body.lang, TOKEN)
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
                })
                .catch((error) => {
                    let data  = { data: error.toString() }
                    console.log(data)
                    res.send(data)
                })
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
    repl.disconnect()
})

module.exports = router
