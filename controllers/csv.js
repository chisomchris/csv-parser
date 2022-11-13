const fs = require('fs')
const convertCSV = require('../utilities/convert')
const formidable = require('formidable')
const validator = require('../utilities/validators')

exports.csvUpload = function (req, res, next) {
const form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    
const filePath = files.csv.filepath;

if (
!(
validator.extname(files.csv.originalFilename) 
&& 
validator.mimetype(files.csv.mimetype))) {
  return res.status(400).json({
    success : false,
    message : 'File not supprted, only CSV files are accepted'
  })
}
    
convertCSV(filePath)
    .then(data => {
     res.status(200).json(data) 
  })
  .catch(error => {
                res.status(400).send(error)
            })
 })
}