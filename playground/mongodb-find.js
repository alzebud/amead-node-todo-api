//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) return console.log("unable to connect to the MongoDB server");
    console.log("connected to the MongoDB server");

    const db = client.db("TodoApp");

    // db.collection("Todos").find({_id: new ObjectID("5c5c14f302098fca39ac7c91")}).toArray().then(docs => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => console.log("unable to fetch todos", err));

    // db.collection("Todos").find().count().then(count => {
    //     console.log(`Todos count: ${count}`);
    // }, err => console.log("unable to fetch todos", err));

    db.collection("Users").find({name: "Oscar"}).toArray().then(docs => console.log(JSON.stringify(docs, undefined, 2)));

    // client.close();
});