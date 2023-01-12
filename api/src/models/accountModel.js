const mongoose = require("mongoose")
  const operationHistory = new mongoose.Schema({

    operationMaker:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refpath:'docModel'
    },
    docModel: {
        type: String,
        required: true,
        enum: ['admin', 'users']
    },
    operationType: {
        type:String,
        enum: ['ajoute','retait']
    },
    balance: {
      type: Number,
      required: true
    },
    operationDate:{
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
        history:[operationHistory]
    })
)
module.exports = Account
