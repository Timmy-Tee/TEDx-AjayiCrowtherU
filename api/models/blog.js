const mongoose = require("mongoose");



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
