const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/model/todo");
const { User } = require("./../server/model/user");

var id = "5a0bb3a099f20837a506bf36";
// Todo.remove({}).then(result => {
//   console.log(result);
// });

Todo.findOneAndRemove({
  _id: "5a0bb3a099f20837a506bf36"
}).then(result => {
  console.log(result);
});

// Todo.findByIdAndRemove(id).then(result => {
//   console.log(result);
// });
