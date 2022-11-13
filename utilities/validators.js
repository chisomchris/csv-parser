exports.extname = function (string){
return string.slice(string.lastIndexOf('.')+ 1) === 'csv'
}

exports.mimetype = (input = '') => {
  return /text\/csv/.test(input) || /text\/comma-separated-values/.test(input)
}

exports.data = ( row ) => {
  const {
    name,
    organization,
    award,
    certificate_number,
    description,
    date
    } = row

return (
   (name && name.trim() !== "") &&
   (award && award.trim() !== "") &&
   (date && date.trim() !== "") &&
   (organization && organization.trim() !== "") &&
   (description && description.trim() !== "") &&
   (certificate_number && certificate_number.trim() !== "") 
   ) 
}

exports.headers = ( header ) => {
const headers = Object.keys(header)
return (
headers.includes("name") &&
headers.includes("organization") &&
headers.includes("description") &&
headers.includes("award") &&
headers.includes("date") &&
headers.includes("certificate_number")     
  )
}