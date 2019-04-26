const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:test@mongodbworkshop-62dgd.mongodb.net/test?retryWrites=truen";
const client = new MongoClient(uri, { useNewUrlParser: true });
/*client.connect(err => {
  const collection = client.db("test").collection("User");
  collection.find().toArray((err, items) => {
    console.log(items)
  })
  client.close();
});*/

module.exports = client;
