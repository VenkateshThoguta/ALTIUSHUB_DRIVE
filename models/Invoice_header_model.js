// Invoice Header
// Id: UUID
// Date: string (UTC)
// InvoiceNumber: number
// CustomerName: string
// BillingAddress: string
// ShippingAddress: string
// GSTIN: string
// TotalAmount: Decimal

// importing mongoose
const mongoose=require('mongoose');

//defining schema
const invoiceHeaderSchema=mongoose.Schema({
        Id:{type:mongoose.Types.UUID,require},
        Date:{type:String,require},
        InvoiceNumber:{type:Number,require},
        CustomerName:{type:String,require},
        BillingAddress:{type:String,require},
        ShippingAddress:{type:String,require},
        GSTIN:{type:String,require},
        TotalAmount:{type:mongoose.Types.Decimal128,require}
},{
    timestamps:true,
}
)

//creating model
const headermodel=mongoose.model('Headers',invoiceHeaderSchema)

//exporting model
module.exports=headermodel
