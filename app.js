const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
const Info = require('./model/info');
require("dotenv").config();
const sendEmail = require("./utils/sendEmail");


async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/myFolio_db");
}
main()
  .then(() => {
    console.log("Mongo Connection Open!!!");
  })
  .catch((err) => {
    console.log("Mongo Connection Error!!!");
    console.log(err);
  });


app.set("view engine", "ejs");
app.engine("ejs", ejsMate);



app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.get("/home",(req,res)=>{
    res.render("index.ejs")
})

app.post("/home",async(req,res)=>{
  try{
    const {name,email,message} = req.body;
    const info = new Info ({name,email,message});
    await info.save();
    await sendEmail({ name, email, message });
    res.redirect("/home");

  }catch(err){
    console.log("Error in saving message or sending email:", err);
    res.status(500).send("Internal Server Error");
  }
    

});


// app.get("/home",(req,res)=>{
//     res.render("index.ejs")
// });


// let message1 = new Info ({
//     name: "John Doe",
//     email: "jhon1920@gmail.com",
//     message: "Hello, this is a test message."
//   });

//   message1.save().then(()=>{
//     console.log("Message saved to the database.");
//   }).catch((err)=>{
//     console.log("Error saving message to the database:", err);
//   });

module.exports = app;