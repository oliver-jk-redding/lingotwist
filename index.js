var request = require("superagent")
// var dotenv = require("dotenv")
var fs = require("fs")

request.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter",function(req,res){
  //console.log(JSON.parse(res.text).items[0].volumeInfo.description)
  //console.log(res.text)
  fs.writeFile("./data.json",JSON.parse(res.text).items[0].volumeInfo.description,"utf8")
  replaceWords(JSON.parse(res.text).items[0].volumeInfo.description)
})

function replaceWords(data){

  var nounsToBeReplaced = ["hand","Harry","seal","wizard","snake","badger"]
  var userWords = ["sausage","dog","japan","nerd","Yankie","cats"]
  var count = 0;

  data = data.split(" ");
  for(i=0;i<data.length;i++){
      data[data.indexOf(nounsToBeReplaced[i])] = userWords[i]
      }
console.log(data.join(" ").toString())
}
