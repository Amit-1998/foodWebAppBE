//   let flag=false; // user logged in or not 
const jwt=require('jsonwebtoken');
const {JWT_KEY}=process.env;



  module.exports=protectRoute;