const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/model/todo");
const { User } = require("./../server/model/user");

var id = "5a0bb7b971d50f3a861a6fc2";
// var userID = "5a0bb7b971d50f3a861a6fc2";
if (!ObjectID.isValid(id)) {
  return console.log("ID not valid");
}

Todo.find({
  _id: id
}).then(todos => {
  console.log("Todos", todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log("Todo", todo);
});

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("Todo By Id", todo);
  })
  .catch(e => console.log(e));

User.findById(id).then(
  user => {
    if (!user) {
      return console.log("Unable to find user");
    }

    console.log(JSON.stringify(user, undefined, 2));
  },
  e => {
    console.log(e);
  }
);
