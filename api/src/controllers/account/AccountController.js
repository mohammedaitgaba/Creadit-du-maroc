const Account = require('../../models/accountModel')
const asyncHnadler = require('express-async-handler')
const bycrypt = require('bcryptjs')

const CreateAcc = asyncHnadler(async(req,res)=>{
    const { user, password, type} = req.body;
    const reference = Math.random().toString().slice(2,11);
    //   check for values of each feild
    if (Object.values(req.body).some((v) => !v)) {
      return res.sendStatus(400, {
        message: "Veuillez remplir tous les champs obligatoires",
      });
    }
    const AccExist = await Account.findById(user)
    if (AccExist) {
      res.status(400);
      throw new Error("Vous avez deja cree un compte");
    }
    const salt = await bycrypt.genSalt(10)
    const hashPassword = await bycrypt.hash(password,salt)

    const account = await Account.create({
        user,
        reference,
        password:hashPassword,
        type
    })
    account ? res.json({ message: "Compte créé avec succès" }) 
    : res.status(400)
    throw new Error("les données ne sont pas valides");
})


module.exports={
    CreateAcc
}