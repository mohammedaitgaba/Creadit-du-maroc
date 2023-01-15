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
const SignToAcc = asyncHnadler(async(req,res)=>{
    const {reference,password}=req.body
    const myAcc = await Account.findOne({reference}).populate('user','id')
    if (myAcc && await bycrypt.compare(password,myAcc.password)) {
        res.json({
            id:myAcc.id,
            user:myAcc.user,
            type:myAcc.type,
            balance:myAcc.balance,
            transactions_Sent:myAcc.transactions_Sent,
            transactions_Recived:myAcc.transactions_Recived
        })
    }
    else{
        res.status(400)
        throw new Error('informations non valables')
    }
})

const PullMoney = asyncHnadler(async(req,res)=>{
    const {id_acc,balance_pulled,operationDate}=req.body
    const account = await Account.findById(id_acc)
    if (!account) {
        res.status(400)
        throw new Error('Compte non trouve')
    }
    if (account.balance>=balance_pulled) {
       const newOperation = await Account.findByIdAndUpdate(id_acc,{$set:{balance:account.balance-balance_pulled}})
       if (newOperation) {
           res.json({message : "opération effectuée avec succès"})
           addOperation(id_acc,'retrait',balance_pulled,operationDate)
       }
    }else{
        res.status(400)
        throw new Error(`l'opération a échoué, le maximum que vous pouvez tirer est :${account.balance} DH`)
    }
})
const addOperation = asyncHnadler(async(id_acc,operationType,balance,operationDate)=>{
    const history = {
        operationType,
        balance,
        operationDate
    }
    const operation = await Account.findByIdAndUpdate(id_acc,{$push:{history:history}})
    if (!operation) {
        throw new Error('error')
    }
})

const GetAllAccounts = asyncHnadler(async(req,res)=>{
    const Accounts = await Account.find({})
    if (!Accounts) {
        throw new Error("no data available");
      }
      res.json({
        message: "success",
        data: Accounts,
      });
})



module.exports={
    CreateAcc,
    SignToAcc,
    PullMoney,
    GetAllAccounts
}