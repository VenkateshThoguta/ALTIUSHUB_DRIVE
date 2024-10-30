// Invoice Items
// Id: UUID
// itemName: string
// Quantity: decimal
// Price: decimal
// Amount: decimal
const mongoose=require('mongoose')

//defining schema
const items=mongoose.Schema({
    Id:{type:mongoose.Types.UUID,require},
    ItemName:{type:String,require},
    Quantity:{type:mongoose.Types.Decimal128,require},
    Price:{type:mongoose.Types.Decimal128,require},
    Amount:{type:mongoose.Types.Decimal128,require},
},{
    timestamps:true,
});

//creating model
const itemmodel=mongoose.model('Items',items)

//exporting model
module.exports=itemmodel
