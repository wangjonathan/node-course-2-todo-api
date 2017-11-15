var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minilength: 1
  }
});

// var newUser = new User({
//   email: "jwang16@wpi.edu   "
// });

// newUser.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   e => {
//     console.log("Unable to save todo");
//   }
// );

module.exports = {User};