const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const books = require("./models/books");

//connecting to mongo db
mongoose.connect("mongodb://localhost/googlebooks")


//define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve static assets heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

//define api routes here or in other folder

//send request to react app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});