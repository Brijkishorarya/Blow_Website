const mongoose = require('mongoose'); 
// 1. Schema
const {Schema} = mongoose; 

const blogSchema = new Schema({
    title: String, 
    description: String, 
    actor: String
  });


// 2. Associate Schema with Model
module.exports = mongoose.model('Blog', blogSchema);