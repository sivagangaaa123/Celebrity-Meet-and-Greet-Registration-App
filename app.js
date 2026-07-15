const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sivaganga:22youmewe22@cluster0.v60twit.mongodb.net/coursedb").then(
    () =>{
        console.log("mongodb connected")
    }
).catch(
    (error) =>{
        console.log(error)
    }
)
const AddAttendee=mongoose.model("AddAttendee",new mongoose.Schema(
    {

        RegistrationID: String,
        AttendeeName: String,
        Age: String,
        Gender: String,
        DateofBirth: String,
        MobileNumber: String,
        Email: String,
        City: String

    }
))

app.get("/test", (req, res) => {
    res.send("hello")
})

app.post("/add-attendee", async (req, res) => {
   await AddAttendee.create(req.body)
    res.json({"status": "success"})
})
app.listen(7500, () => {
    console.log("server started")
})
