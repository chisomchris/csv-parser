exports.extname = function (string){
return string.slice(string.lastIndexOf('.')+ 1) === 'csv'
}

exports.mimetype = (input = '') => {
  return /text\/csv/.test(input) || /text\/comma-separated-values/.test(input)
}