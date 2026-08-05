const express = require("express");

const router = express.Router();

const Contact = require("../models/Contact");


// CREATE CONTACT

router.post("/", async(req,res)=>{

    try{

        const contact = new Contact(req.body);

        await contact.save();


        res.json({
            message:"Contact saved successfully",
            contact
        });


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// GET ALL CONTACTS (Admin)

router.get("/", async(req,res)=>{

    try{

        const contacts = await Contact.find();

        res.json(contacts);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


module.exports = router;