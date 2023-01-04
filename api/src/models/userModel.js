const { date } = require('joi')
const mongoose = require('mongoose')
const validator = require('validator')
const User = mongoose.model(
    'users',
    new mongoose.Schema({
        Fname:{
            type:String,
            required:true
        },
        Lname:{
            type:String,
            required:true
        },
        CIN:{
            type:String,
            required:true
        },
        Phone: {
            type: String,
            required: true,
        },
        birthday: {
            type:Date,
            required:true
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
            unique: true,
            validate(value) {
              return validator.isEmail(value);
            },
        },
        password: {
            type: String,
            required: true,
        },
        roles: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Role",
            },
        ],
    })
)
module.exports = {
    User
}