const express=require('express')

// importing required 
const items=require('./models/Invoice_Items_model.js')
const bill=require('./models/Invoice_Bill_model.js')

const app=express();
const db=require('./db.js')

//middleware to parse json bodies of incoming requests (from string to object)
app.use(express.json());



// const port=process.env.PORT||5200;
app.listen(5100,()=>'server running')

const inv=require('../models/Invoice_header_model.js')

// retrieveing the list of Invoice headers
app.get('/headers', async(req, res) => {
    const temp = await inv.find()
    res.json(temp)
})


// creating a new invoice haeder
app.post('/headers/new', (req, res) => {
    const new_header = new inv({
        Date: req.body.Date,
        InvoiceNumber: req.body.InvoiceNumber,
        CustomerName: req.body.CustomerName,
        BillingAddress: req.body.BillingAddress,
        ShippingAddress: req.body.ShippingAddress,
        TotalAmount: req.body.TotalAmount,
        GSTIN:req.body.GSTIN,

    })
    new_header.save()
    res.json(new_header)
})


//delete invoice headers based on ID
app.delete('/headers/delete/:id', async (req, res) => {
    const result = await inv.findByIdAndDelete(req.params.id);
    res.json({result});
});

//update invoice header based on ID
app.put('/headers/update/:id', async (req, res) => {
    const temp = await inv.findOne(req.params.id);
    temp.CustomerName = "Pawan Kalyan";
    temp.save();
    res.json(temp);
    console.log('updated')
})
