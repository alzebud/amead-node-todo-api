//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) return console.log("unable to connect to the MongoDB server");
    console.log("connected to the MongoDB server");

    const db = client.db("TodoApp");

    // db.collection("Todos").findOneAndUpdate({_id: new ObjectID("5c61f9431710498dca49deb2")}, {$set: {completed: true}}, {returnOriginal: false}).then(result => console.log(result));

    // db.collection("Users").findOneAndUpdate({name: "Oscar"}, {$set: {age: 46}}, {returnOriginal: false}).then(result => console.log(result));

    db.collection("Users").findOneAndUpdate({name: "Edgar"}, {$inc: {age: 1}}, {returnOriginal: false}).then(result => console.log(result));

    // client.close();
});