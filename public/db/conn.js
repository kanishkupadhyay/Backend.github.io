const mongoose=require("mongoose")
//Creating database
mongoose.connect("mongodb://localhost:27017/dynamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful")
}).catch((error)=>{
    console.log(true)
})