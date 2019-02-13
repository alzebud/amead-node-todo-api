const {ObjectID} = require("mongodb");

const {mongoose} = require("../server/db/mongoose");
const {Todo} = require("../server/models/todo");
const {User} = require("../server/models/user");

// const id = "5c64a1336836a91c1baaab45";

// if (!ObjectID.isValid(id)) {
//     console.log("ID not valid");
// }

// Todo.find({_id: id}).then(todos => console.log("Todos", todos));

// Todo.findOne({_id: id}).then(todo => console.log("Todo", todo));

// Todo.findById(id)
//     .then(todo =>
//         todo ? console.log("Todo by ID:", todo) : console.log("ID not found")
//     )
//     .catch(e => console.log(e));

User.findById("5c634c7301638d70246065bb")
    .then(user =>
        user
            ? console.log(JSON.stringify(user, undefined, 2))
            : console.log("unable to find user")
    )
    .catch(err => console.log(err));
