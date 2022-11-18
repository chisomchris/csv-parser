exports.extname = function (string) {
  return string.slice(string.lastIndexOf('.') + 1) === 'csv'
}

exports.mimetype = (input = '') => {
  return /text\/csv/.test(input) || /text\/comma-separated-values/.test(input)
}

exports.data = (row) => {
  const {
    first_name,
    last_name,
    other_name,
    student_id
  } = row

  return (
    (first_name && first_name.trim() !== "") &&
    (last_name && last_name.trim() !== "") &&
    (student_id && student_id.trim() !== "") &&
    (other_name ? other_name.trim() !== "" : true)
  )
}

exports.headers = (header) => {
  const headers = Object.keys(header)

  return headers.length === 4 ? (
    headers.includes("first_name") &&
    headers.includes("last_name") &&
    headers.includes("student_id") &&
    headers.includes("other_name")
  ) : (
    headers.includes("first_name") &&
    headers.includes("last_name") &&
    headers.includes("student_id")
  )

}