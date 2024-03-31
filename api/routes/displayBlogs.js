const express = require("express");
const blogModel = require("../models/blog");
const routes = express.Router();
const cors = require("cors")
const imageUpload = require("../middlewares/imageUpload");
const cloudinary = require("../utils/cloudniary");


// Post (Create Blog Post)
const uploadImages = imageUpload.fields([{name: 'authorPicture'}, {name: 'coverPhoto'}])
routes.post("/upload", uploadImages , async(req, res) => {
  const path1 = await req.files['coverPhoto']
  const path2  = await req.files['authorPicture']
  console.log(path1,path2)
  const trimmedTitle = req.body.blogTitle


  // If the image is uploaded
  // else{

  // Upload the first Image
  await cloudinary.uploader.upload(path1[0].path, {folder: "TEDx"}, async(err,result1) =>{
      if(err){
        console.log(err); 
        res.send(500).json(err)
      }
      // Upload teh second Image
      else{ 
       await cloudinary.uploader.upload(path2[0].path, {folder: "TEDx"}, async(err, result2)=>{
          if(err){
            res.status(500).json(err)
          }
          else{
            const blog = new blogModel({
                title: trimmedTitle.trimEnd(),
                desc: req.body.blogDesc,
                author: req.body.author,
                job: req.body.authorJob,
                image: result1.secure_url,
                authorImage: result2.secure_url
            });
            const blogData = await blog.save().then(()=>{
              res.redirect("https://tedx-ajayicrowtheru.vercel.app/blog")
            })
            .catch(err=>{
                res.status(500).json(err)
                console.log(err) 
              })
          }
        }) 
      }
    })
  // }
});


// Get all blog posts
routes.get("/posts", cors() ,async(req,res)=>{
    try{
        await blogModel.find({})
        .then(d =>{
          res.status(200).json(d)

        })
        .catch(err=>{
            res.status(404).json(err)
        })
    }
    catch(err){
        res.status(500).json(err)
    }
})


// GEt individual post

routes.get("/:blogTitle", cors(), async(req,res)=>{
    const title = await req.params.blogTitle
    await blogModel.findOne({title: title})
    .then((d)=>{
      res.status(200).json(d)
    })
    .catch(err =>{
      res.status(404).json(err) 
    })
})



module.exports = routes;
