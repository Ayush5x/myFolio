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
app.set("views", path.join(__dirname, "views"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.json()); 

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/home",(req,res)=>{
    res.render("index")
})

app.post("/home", async (req, res) => {
  

  try {
   const { name, email, message } = req.body;

   const newInfo = {
    name: name,
    email: email,
    message: message  
   }

   const info = new Info(newInfo);
   await info.save();
   

    await sendEmail({
      name,
      email,
      message
    });

   res.render('succes');
  } catch (err) {
    console.error(err);
    res.status(400).render("error");
  }
});


app.get('/error', (req, res) => {
  res.render('error');
});
app.get('/succes', (req, res) => {
  res.render('succes');
});

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app;


