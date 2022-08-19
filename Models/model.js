const mongoose = require ('mongoose');

const Employees = mongoose.Schema({

    Name : {
        type : String,
        required : true
    },
    Email :{
        type : String,
        required : true
    },
    MobileNum:{
        type : String,
        require : true

    },
    Gender:{
        type: String,
        required : true
    },
    Status:{
        type:Boolean,
        required : true
    },
    Profile:{
        type:String,
        required:false
    },
    CompanyName:{
        type:String,
        required:true
    },
    JobRole:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Name,Email,MobileNum,Gender,Status,Profile,CompanyName',Employees)