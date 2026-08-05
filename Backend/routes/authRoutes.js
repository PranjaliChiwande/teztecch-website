const express = require("express");

const router = express.Router();

const User = require("../models/User");


// LOGIN

router.post("/login", async(req,res)=>{


    try{


        const {email,password} = req.body;


        const user = await User.findOne({email});


        if(!user){

            return res.status(404).json({
                message:"User not found"
            });

        }



        if(user.password !== password){

            return res.status(401).json({
                message:"Wrong password"
            });

        }



        if(user.role !== "admin"){

            return res.status(403).json({
                message:"Access denied"
            });

        }



        res.json({

            message:"Login successful",
            name:user.name

        });


    }
    catch(error){


        res.status(500).json({
            message:error.message
        });


    }


});


module.exports = router;