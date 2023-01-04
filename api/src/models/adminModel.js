const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    Fname : {
        type : String ,
        required :true, 
    },
    Lname : {
        type : String ,
        required :true, 
    },
    Email : {
        type : String ,
        required :true, 
        unique :true,
    },
    Password : {
        type : String ,
        required :true,
    }
}
)
module.exports = mongoose.model('admin',AdminSchema)


