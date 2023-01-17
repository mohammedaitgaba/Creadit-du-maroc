const User = require("../../models/userModel");
const Admin = require("../../models/adminModel")
const asyncHnadler = require("express-async-handler");
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = asyncHnadler(async (req, res) => {
  const { Fname, Lname, CIN, Phone, Birthday,Gender, Email, Password } = req.body;
  //   check for values of each feild
  if (Object.values(req.body).some((v) => !v)) {
    return res.sendStatus(400, {
      message: "Please fill all required fields",
    });
  }
  const UserExist = await User.findOne({ Email });
  if (UserExist) {
    res.status(400);
    throw new Error("Already existed");
  }
  const salt = await bycrypt.genSalt(10)
  const hashPassword = await bycrypt.hash(Password,salt)

  const user = await User.create({
    Fname,
    Lname,
    Phone,
    Email,
    Birthday,
    Gender,
    CIN,
    Password:hashPassword
  });
  user ? res.json({ message: "User regitred successfully" }) 
  : res.status(400)
  throw new Error("data is not valid");
});
const signin = asyncHnadler(async(req, res) => {
  const {Email,Password}= req.body
  const user = await User.findOne({Email})
  if (user &&(await bycrypt.compare(Password,user.Password))) {
      res.json({
          message : "welcome",
          id : user.id,
          firstname : user.Fname,
          lastname : user.Lname,
          Phone : user.Phone,
          Email : user.Email,
          Gender : user.Gender,
          token : TokenGenerator(user.id)
      })
  }else{
      res.status(400)
      throw new Error('invalid info')
  }
});
const AdminAuth = asyncHnadler(async(req,res)=>{
  const {Email,Password}= req.body
  console.log(Email,Password);
  const admin = await Admin.findOne({Email})
  if (admin &&(await bycrypt.compare(Password,admin.Password))) {
      res.json({
          message : "Admin",
          id : admin.id,
          firstname : admin.Fname,
          lastname : admin.Lname,
          Email : admin.Email,
          token : TokenGenerator(admin.id)
      })
  }else{
      res.status(400)
      throw new Error('invalid info')
  }
})
const signupAdmin = asyncHnadler(async (req, res) => {
  const { Fname, Lname, Email, Password } = req.body;
  //   check for values of each feild
  if (Object.values(req.body).some((v) => !v)) {
    return res.sendStatus(400, {
      message: "Please fill all required fields",
    });
  }
  const UserExist = await Admin.findOne({ Email });
  if (UserExist) {
    res.status(400);
    throw new Error("Already existed");
  }
  const salt = await bycrypt.genSalt(10)
  const hashPassword = await bycrypt.hash(Password,salt)

  const user = await Admin.create({
    Fname,
    Lname,
    Email,
    Password:hashPassword
  });
  user ? res.json({ message: "User regitred successfully" }) 
  : res.status(400)
  throw new Error("data is not valid");
});
// Generate JWT
const TokenGenerator = (id)=>{
  return jwt.sign( {id},process.env.JWT_SECRET,{
      expiresIn:3600*60*60*10
  } )
}
module.exports = {
  signin,
  signup,
  AdminAuth,
  signupAdmin
};
