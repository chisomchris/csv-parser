const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const validator = require('./validators')

module.exports = function (filePath) {
   const jsonData = []
   return new Promise(function (resolve, reject) {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('error', () => {
                reject('error reading file')
            })
            .on('data', (row) => {
  if (!validator.data(row)) {
    jsonData.push({
      message : "invalid entries"
    })
     } else{
    jsonData.push(row)
     }
  })
 .on('end', () => {
    resolve(jsonData)
 })
    })
} 