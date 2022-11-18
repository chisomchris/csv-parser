# csv-parser 

## description

this app service is used to parse and convert CSV file to JSON array.

## endpoints

1. **[/api/upload]( https://talented-sock-jay.cyclic.app/api/upload )** - POST

  -  payload - **csv file**
  -  enctype - **multipart/form-data**
  -  mimetype - **text/csv** or **text/comma-separated-values**
  -  fieldname - **csv**

## usage

send a post request to [/api/upload]( https://talented-sock-jay.cyclic.app/api/upload), the fieldname of the uploaded file must be csv and the column headers must be **first_name**, **last_name**, **student_id**, **other_name (OPTIONAL)**

## example usage

visit [/api/upload/test]( https://talented-sock-jay.cyclic.app/api/upload/test), upload a csv file with the following heading:

   - first_name
   - last_name
   - other_name (OPTIONAL)
   - student_id

view returned JSON array

## bug reports

report any bugs or issues here 

[https://github.com/chisomchris/csv-parser/issues](https://github.com/chisomchris/csv-parser/issues)
