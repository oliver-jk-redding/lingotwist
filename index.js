var request = require("superagent")
// var dotenv = require("dotenv")
var fs = require("fs")

function lingotwist(userWords, callback) {
  request.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter",function(req,res){
    // fs.writeFile("./data.json",JSON.parse(res.text).items[0].volumeInfo.description,"utf8")
    var data = JSON.parse(res.text).items[0].volumeInfo.description
    replaceWords(data, userWords, callback)
  })
}




function replaceWords(data, userWords, callback){
  var nounsToBeReplaced = ["hand","Harry","seal","wizard","snake","badger"]
  // var userWords = ["sausage","dog","japan","nerd","Yankie","cats"]
  var count = 0;

  for (var i=0; i<nounsToBeReplaced.length; i++) {
    var word = nounsToBeReplaced[i]
    var wordRegexp = new RegExp(word, 'img')
    data = data.replace( wordRegexp, userWords[i])
  }
  var JSONObject = {"modifiedText":data}
  callback(JSONObject)
}

