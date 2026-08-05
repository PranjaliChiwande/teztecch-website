const express = require("express");

const router = express.Router();

const Post = require("../models/Post");


// GET all reports
router.get("/", async (req, res) => {
    try {

        console.log("✅ USING reportRoutes.js");

        const reports = await Post.find({
            category:"Report"});

        console.log(reports);

        res.json(reports);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});


// CREATE report

router.post("/", async(req,res)=>{

    try{

        const post= new Post(req.body);

        await post.save();

        res.json(post);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

// UPDATE REPORT

router.put("/:id", async(req,res)=>{

    try{

        const updatedReport = await Post.findByIdAndUpdate(

            req.params.id,

            req.body,

            {new:true}

        );


        res.json(updatedReport);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});




// DELETE REPORT

router.delete("/:id", async(req,res)=>{

    try{

        await Post.findByIdAndDelete(
            req.params.id
        );


        res.json({
            message:"Report deleted successfully"
        });


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});
module.exports = router;