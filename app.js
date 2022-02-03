const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express()
const port = 3000


app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
  })); 
  app.use(express.static("public"));

  mongoose.connect("mongodb://localhost:27017/userrDB")

  const userSchema = new mongoose.Schema({
      FName:{
        type:String,
        required:true
      },
      LName:{
        type:String,
        required:true
      },
    email: {
      type:String,
      required:true
    },
    phone:{
      type:String,
      required:true
    },
    state:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    Zipcode:{
      type:String,
      required:true
    },
    username:{
      type:String,
      required:true
    },
    password: {
      type:String,
      required:true
    },
    Date:{
      type:String,
      required:true
    }
  });

  const User = new mongoose.model("User", userSchema);

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/register',(req,res)=>{
  res.render('register')
})

app.post('/register',(req,res)=>{
    const newUser=new User({

        FName:req.body.FName,
        LName:req.body.LName,
      email:req.body.email,
      phone:req.body.phone,
      state:req.body.state,
      city:req.body.city,
      Zipcode:req.body.Zipcode,
      username:req.body.username,
      password:req.body.password ,
      Date:req.body.Date
     
    });
    newUser.save(err=>{
      if(!err){
        res.send('<h1>Registration Successful</h1>')
      }else{
        console.log(err);
      }
    })
  })


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

