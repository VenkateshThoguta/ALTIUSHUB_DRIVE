const mongoose=require('mongoose')

var url='mongodb+srv://venkateshthoguta:venkateshthoguta@cluster0.duheu.mongodb.net/ALTIUS'

mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log('mongo success');
})
db.on('error',()=>{
    console.log('mongo err')
})

module.exports=mongoose;