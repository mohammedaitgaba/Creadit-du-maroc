const mongoose = require("mongoose")
const transaction = new mongoose.Schema({
    reciver: {
      type: String,
      required: true
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
            ref: "User",
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
            required:true
        },
        transactions:{
            type:[transaction],
        }
    })
)
module.exports = {
    Account
}