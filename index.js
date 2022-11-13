const express = require('express');
const {v4 : uuid } = require('uuid')
const fs = require('fs')
const csvRoute = require('./router')
const cors = require('cors')
// const helmet = require('helmet')
const formidable = require('formidable')
const path = require('path')

const app = express();
app.use(cors())
// app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/csv', csvRoute)

app.post('/api/upload', (req, res, next) => {

    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
console.log(files.csv.filepath)
        var oldPath = files.csv.filepath;
        var newPath = path.join(__dirname, 'uploads1') + '/' + uuid() + '.csv'
        var rawData = fs.readFileSync(oldPath)

        fs.writeFile(newPath, rawData, function (err) {
            if (err) console.log(err)
            return res.send("Successfully uploaded")
        })
    })
});

app.post("/api/uploadCSV", (req, res) => {
    const form = new formidable.IncomingForm();
    const uploadFolder = path.join(__dirname, "uploads2");
    form.maxFileSize = 100 * 1024 * 1024; 
    form.uploadDir = uploadFolder;
    form.parse(req, async (err, fields, files) => {
        // console.log(fields);
        // console.log(files);
        if (err) {
            console.log("Error parsing the files");
            return res.status(400).json({
                status: "Fail",
                message: "There was an error parsing the files",
                error: err,
            });
        }
        const file = files.csv;
        console.log(file)
        
    });

});

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('internal sever error')
        }
        res.status(200).send(data)
    })
})
app.get('/api', (req, res) => {
    fs.readFile('index2.html', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('internal sever error')
        }
        res.status(200).send(data)
    })
})
app.get('/api1', (req, res) => {
    fs.readFile('index3.html', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('internal sever error')
        }
        res.status(200).send(data)
    })
})

app.listen(5000, () => {
    console.log(`Server started...`);
});