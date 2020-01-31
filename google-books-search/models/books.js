//creating book schema
const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var booksSchema = new Schema({
    ///adding fields
    title: String,
    author: String,


})