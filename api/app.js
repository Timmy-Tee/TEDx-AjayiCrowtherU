require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose")

// Routes
const blogRoute = require("./routes/displayBlogs");

// Allows json to be passed
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))
app.use(express.json());


mongoose.connect(process.env.DBURL)
.then(()=>{
    console.log("Connection Successful");
})
.catch(err=>{
    console.log(err);
})


// Route
app.get("/", (req, res) => res.json("Hello World!"));
app.use("/blogs", blogRoute)





// Listens to Port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
