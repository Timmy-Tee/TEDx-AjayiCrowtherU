const mongoose = require("mongoose");

//Set up default mongoose connection
mongoose
  .connect("mongodb://127.0.0.1:27017/TEDx")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const blogs = new mongoose.model("Blog", blogSchema);
module.exports = blogs;
