console.log("postRoutes file loaded");
const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

console.log("Post Routes Loaded");


// TEST ROUTE
router.get("/test", (req,res)=>{
    res.send("Post Route Working");
});


// GET ALL POSTS
router.get("/", async(req,res)=>{

    try{

        const posts = await Post.find();

        res.json(posts);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// CREATE POST
router.post("/", async(req,res)=>{

    try{

        const post = new Post(req.body);

        const savedPost = await post.save();

        res.status(201).json(savedPost);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});
// GET ONLY REPORTS
router.get("/reports", async (req, res) => {
    try {
        const reports = await Post.find({ category: "Report" });

        res.json(reports);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// GET SINGLE POST

router.get("/:id", async(req,res)=>{

    try{

        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                message:"Report not found"
            });
        }


        res.json(post);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});
router.put("/:id", async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(updatedPost);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json({
            message: "Post deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;