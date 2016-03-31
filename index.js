var request = require("superagent")
// var dotenv = require("dotenv")
var fs = require("fs")

request.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter",function(req,res){
  console.log(JSON.parse(res.text).items[0].volumeInfo.description)
  //console.log(res.body)
  fs.writeFile("./data.json",JSON.parse(res.text).items[0].volumeInfo.description,"utf8")
})
