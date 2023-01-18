const Transactions = require('../../models/transactionModal')
const Account = require('../../models/accountModel')
const asyncHnadler = require('express-async-handler')


const AddTransaction = asyncHnadler(async(Sender,Reciver,balance,transactionDate)=>{
    const transaction = await Transactions.create({
        Sender,
        Reciver,
        balance,
        transactionDate
    })
})
const MyTransactions = asyncHnadler(async(req,res)=>{
    const {user} = req.body
    const transaction = await Transactions.find({
        $or:[
            {Sender:user},
            {Reciver:user}
        ]}).populate('Reciver')
    if (transaction){
        res.json({transaction})
    }else{
        throw new Error(`transaction not found`)
    }
})
const Transfer = asyncHnadler(async(req,res)=>{
    const {Sender,Reference,balance,transactionDate} = req.body
    const Balance = parseInt(balance)

    if (Object.values(req.body).some((v) => !v)) {
        return res.sendStatus(400, {
            message: "Veuillez remplir tous les champs obligatoires",
        });
    }
    const ReciverAcc = await Account.findOne({reference:Reference})
    const Reciver = ReciverAcc.id
    if (Reciver == Sender) {
        throw new Error(`l'opération a échoué, impossible de transfere du meme compte`)
    }else{
        let accountSender = await Account.findById(Sender)
        let accountReciver = await Account.findById(Reciver)
        if (accountSender.balance>=Balance) {
            const sent= await Account.findByIdAndUpdate(Sender,{$set:{balance:accountSender.balance-Balance}})
            const recived= await Account.findByIdAndUpdate(Reciver,{$set:{balance:accountReciver.balance+Balance}})
            if (sent&&recived) {
                AddTransaction(Sender,Reciver,Balance,transactionDate)
                res.json({message:"done"})
            }
        }else{
    
            throw new Error(`l'opération a échoué, le maximum que vous pouvez tranfere est :${accountSender.balance} DH`)
        }
    }

})
module.exports = {Transfer,MyTransactions}
