const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
   res.send("Teztecch Backend Running");
});


const postRoutes=require("./routes/postRoutes");
const reportRoutes = require("./routes/reportRoutes");
const contactRoutes=require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/posts",postRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/contact",contactRoutes);
app.use("/api/auth", authRoutes);
// MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("✅ MongoDB Connected"))
.catch(err=>console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
