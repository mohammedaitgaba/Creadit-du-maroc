const mongoose = require("mongoose")
const transaction_Sent = new mongoose.Schema({
    reciver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    balance: {
      type: Number,
      required: true
    },
    transactionDate:{
        type:Date,
        required:true
    }
  });
  const transaction_Recived = new mongoose.Schema({
    Sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    balance: {
      type: Number,
      required: true
    },
    transactionDate:{
        type:Date,
        required:true
    }
  });
const Account = mongoose.model(
    'Account',
    new mongoose.Schema({
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required:true
        },
        reference:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        type:{
            type:String,
            enum: ['etudiant','salarié','entrepreneur']
        },
        balance:{
            type:Number,
            required:true,
            default:1000
        },
        transactions_Sent:{
            type:[transaction_Sent],
        },
        transactions_Recived:{
            type:[transaction_Recived],
        }
    })
)
module.exports = Account
