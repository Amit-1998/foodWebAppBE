
require("dotenv").config();
const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Allow-credentials",false);
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OTIONS");
  next();
});
//app.use(cors())
const mongoose=require('mongoose');
const { PASSWORD } = process.env;
const db_link = `mongodb+srv://AmitfoodApp:${PASSWORD}@cluster0.lwgl1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

var cors = require('cors');

app.use(express.static('public/build'));

const cookieParser=require('cookie-parser');
//middleware func-> post, front-> json
app.use(express.json()); //global middleware 
const port=process.env.PORT || 5000;
mongoose
  .connect(db_link)
  .then(function (db) {
    // console.log(db);
    console.log("db connected");
  })
  .catch(function (err) {
    console.log(err);
  });

app.listen(port,function(){
    console.log(`server listening on port ${port}`); 
});
app.use(cookieParser());


//mini app
const userRouter = require('./Routers/userRouter');
const planRouter = require('./Routers/planRouter');
const reviewRouter = require('./Routers/reviewRouter');
const bookingRouter=require('./Routers/bookingRouter');
//base route , router to use
app.use("/user", userRouter);
app.use("/plans", planRouter);
app.use("/review", reviewRouter);
app.use('/booking',bookingRouter);
// app.use("/auth", authRouter);




