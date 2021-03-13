let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crudApp', { useNewUrlParser: true, useUnifiedTopology: true });

let postSchema = mongoose.Schema({
  post: String
});

module.exports =  mongoose.model('post', postSchema);