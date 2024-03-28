const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    if (!file.originalname) {
      return cb("File Name Does Not Exist");
    }
    cb(null, file.originalname + "_" + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
