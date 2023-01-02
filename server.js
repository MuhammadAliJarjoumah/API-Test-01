const express = require('express')
var cors = require ('cors')//To avoid cors policy problem in the browser when we call it form another domain
const app = express()
app.use(cors())

var xlsx= require("xlsx");
var dataPathExcel="data.xlsx"


app.get('/', function (req, res) {
    
  res.send('Hello World')
})
app.get('/Data', function (req, res) {
    var wb = xlsx.readFile(dataPathExcel);
    var sheetName=wb.SheetNames[0];
    var sheetValue=wb.Sheets[sheetName];

    var myData = xlsx.utils.sheet_to_json(sheetValue);
    
  res.send(myData)
})

app.listen(3000)