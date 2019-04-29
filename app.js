const http = require('http');
const express = require('express');
const app = express();
const mongoClient = require('./mongodb');
const port = 3000;
const waterfall = require('async-waterfall');

//Please use the corrosponding variable to the exersizes so you dont mix it up
var dataEx1 = [];
var dataEx2 = [];
var dataEx3 = [];

app.set('view engine', 'ejs');

async function callbackHell() {
  await mongoClient.connect (async err => {

      //Exersize 1: the code for finishing exersize 1 is here


      //Exersize 2: the code for finishing exersize 2 is supposed to be here 
      //Remember to run the insert query only once so duplication is not added
      //mongoClient.db("workshop").collection("Users").insert({firstname: "HEMZEH", lastname: "HUSSEIN"}).toArray();


 
      //Exersize 3: the code for finishing exersize 3 is supposed to be here
      var book = await booksCollection.find({Title: "The Road"}).toArray();
      var bookId = book[0]._id;
      console.log(bookId);
      mongoClient.db("workshop").collection("Users").update({firstname: "HEMZEH"}, {$set: {bookId: bookId}});
  
  });
 }

  app.get('/', async function(req, res) {
    callbackHell();
    console.log(dataEx1);
    console.log(await dataEx2);
    res.render('index', {
      resultsEx1: await dataEx1,
      resultsEx2: await dataEx2,
      resultsEx3: await dataEx3
    });
    
  });
 
app.listen(port);
 


 
