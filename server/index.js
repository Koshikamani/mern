const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/employee')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://<dbuser>:<dbpass>cluster0.nkbpc0h.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log(" MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("Invalid Password ")
            }
        }else{
            res.json("Invalid Email")
        }
    })
})
app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees)).catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("server is live")
})
