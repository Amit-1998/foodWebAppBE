//   let flag=false; // user logged in or not 
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=process.env;



  module.exports=protectRoute;