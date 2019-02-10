// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("unable to connect to MongoDB server");
    }
    console.log("connected to MongoDB server");
    const db = client.db("TodoApp");

    db.collection("Todos").find({_id: new ObjectID("5c5c14f302098fca39ac7c91")}).toArray().then(docs => {
      console.log("Todos:");
      console.log(JSON.stringify(docs, undefined, 2));
    }, err => console.log("unable to fetch todos", err))

    // client.close();
  }
);


    // db.collection("Todos").insertOne(
    //   { text: "something to do", completed: false },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("unable to insert todo:", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection("Users").insertOne(
    //   { name: "Al Zebud", age: 27, location: "San Francisco" },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("unable to insert user: ", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );