const fs =  require("fs")
const router = require('express').Router()
const csvController = require('./controllers/csv') 

router.post('/', csvController.csvUpload)

router.get('/test', (req, res) => {
    fs.readFile('test.html', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('internal sever error')
        }
        res.status(200).send(data)
    })
})

module.exports = router