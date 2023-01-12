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
const Transfer = asyncHnadler(async(req,res)=>{
    const {Sender,Reciver,balance,transactionDate} = req.body
    if (Object.values(req.body).some((v) => !v)) {
        return res.sendStatus(400, {
            message: "Veuillez remplir tous les champs obligatoires",
        });
    }
    let accountSender = await Account.findById(Sender)
    let accountReciver = await Account.findById(Reciver)
    if (accountSender.balance>=balance) {
        const sent= await Account.findByIdAndUpdate(Sender,{$set:{balance:accountSender.balance-balance}})
        const recived= await Account.findByIdAndUpdate(Reciver,{$set:{balance:accountReciver.balance+balance}})
        if (sent&&recived) {
            AddTransaction(Sender,Reciver,balance,transactionDate)
            res.json({message:"done"})
        }
    }else{

        throw new Error(`l'opération a échoué, le maximum que vous pouvez tranfere est :${accountSender.balance} DH`)
    }

})
module.exports = {Transfer}
