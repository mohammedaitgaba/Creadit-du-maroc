const mongoose = require('mongoose')
const TransactionsSchema = mongoose.Schema({
    Sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
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
})
module.exports = mongoose.model('Transactions',TransactionsSchema)
