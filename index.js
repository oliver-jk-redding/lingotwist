var request = require("superagent")
// var dotenv = require("dotenv")
var fs = require("fs")

request.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse",function(req,res){
  console.log(res.text[0]["description"],req);
  fs.writeFile("./data.json",res.text,"utf8")
})
