const express= require("express")
const cors =require("cors")
const mongoose=require("mongoose")

const router =require("./router")


const PORT =process.env.PORT || 3001

const app =express();

app.use(express.json())

app.use(cors())

app.use('/user',router)




const URI="mongodb+srv://Gowthamprasath:Gowtham25@cluster0.2usgubs.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running in ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})
