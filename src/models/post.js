'use strict';

var mongoose = require('mongoose');

// post.title
// post.content

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
