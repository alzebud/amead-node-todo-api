//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) return console.log("unable to connect to the MongoDB server");
    console.log("connected to the MongoDB server");

    const db = client.db("TodoApp");

    // db.collection("Todos").deleteMany({text: "eat lunch"}).then(result => console.log(result));

    // db.collection("Todos").deleteOne({text: "eat lunch"}).then(result => console.log(result));

    // db.collection("Todos").findOneAndDelete({completed: false}).then(result => console.log(result));

    // db.collection("Users").deleteMany({name: "John"}).then(result => console.log(result));

    // db.collection("Users").findOneAndDelete({_id: new ObjectID("5c4477c3e8e26410a4646210")}).then(result => console.log(result));

    // client.close();
});