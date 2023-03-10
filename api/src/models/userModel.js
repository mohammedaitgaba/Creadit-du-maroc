const mongoose = require('mongoose')
const validator = require('validator')
const usersSchema = mongoose.Schema({
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
        Birthday: {
            type:Date,
            required:true
        },
        Email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
            validate(value) {
              return validator.isEmail(value);
            },
        },
        Password: {
            type: String,
            required: true,
        },
        Gender:{
            type:String,
            enum: ['Homme','femme'],
            required:true
        },
        ImageName:{
            type: String,
          },
        ImageData: {
            type: Buffer,
        },
        Deleted:{
            type:Boolean,
            default:false
        }
    })

module.exports = mongoose.model('users',usersSchema)