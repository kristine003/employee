const mongoose=require('mongoose');
const empSchema=mongoose.Schema({
    empName:String,
    designation:String,
    empId:String, 
})
const EmpData=mongoose.model('employees',empSchema);
module.exports=EmpData