const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://YOUR_MONGO_URL")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

module.exports = mongoose;
