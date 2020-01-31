//creating book schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    ///adding fields
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true }


})