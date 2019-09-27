const mongoose = require("mongoose")

var Blog = mongoose.model("blog", {
    title: String,
    body: String
})

module.exports = Blog