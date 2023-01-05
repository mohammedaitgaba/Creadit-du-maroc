const User = require("../../models/userModel");
const asyncHnadler = require("express-async-handler");
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = asyncHnadler(async (req, res) => {
  const { Fname, Lname, CIN, Phone, Birthday,Gender, Email, Password } = req.body;
  //   check for values of each feild
  console.log(Email);
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

// Generate JWT
const TokenGenerator = (id)=>{
  return jwt.sign( {id},process.env.JWT_SECRET,{
      expiresIn:3600*60*60*10
  } )
}
module.exports = {
  signin,
  signup,
};
