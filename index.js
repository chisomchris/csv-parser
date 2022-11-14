const express = require('express');
const fs = require('fs')
const csvRoute = require('./router')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')
const app = express();

// add middlewares
app.use(cors())
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// upload CSV route handler
app.use('/api/v1/upload', csvRoute)

// api documentation page
app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('internal sever error')
        }
        res.status(200).send(data)
    })
})

// generic route handler
app.use(( req, res, next) => {
  const url = req.url
  res.status(404).json({
error : "no resource available here" + ' - ' + url
})
})

// catch all handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// listen on port 8000
app.listen(8000, () => {
console.log(`Server started...`);
});