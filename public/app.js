const express=require("express")
const path=require("path")
require("./db/conn")
const User=require("./models/username")
const app=express()
const port=process.env.PORT ||3000
//Setting the path
const staticPath=path.join(__dirname,'../public')

//middleware
app.use(express.static(staticPath))
app.set("view engine","hbs")
//Routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.use(express.urlencoded({extended:false}))
app.post("/contact",async(req,res)=>{
    try{
       // res.send(req.body)
       const userData=new User(req.body)
      await userData.save()
      res.status(201).render("index")
    }catch(error){
        res.status(500).send(error)
    }
})
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})