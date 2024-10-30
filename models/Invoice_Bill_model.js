// Invoice BillSundry
// Id: UUID
// billSundryName: string
// Amount: decimal


// importing mongoose
const mongoose=require('mongoose')

//defining schema
const bill=mongoose.Schema({
    Id:{type:mongoose.Types.UUID,require},
    BillName:{type:String,require},
    Amount:{type:mongoose.Types.Decimal128,require},
});


//creating model
const billmodel=mongoose.model('bill',bill)

//exporting model
module.exports=billmodel