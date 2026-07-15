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

app.post("/view-all-attendees", async(req, res) => {
    const team=await AddAttendee.find()
    res.json(team)
})

const AddTicket=mongoose.model("AddTicket",new mongoose.Schema(
    {
        TicketID: String,
        RegistrationID: String,
        CelebrityName: String,
        TicketCategory: String,
        NumberofGuests: String,
        PreferredTimeSlot: String,
        PaymentAmount: String,
        PaymentStatus: String

    }
))

app.get("/test", (req, res) => {
    res.send("hello")
})

app.post("/add-ticket", async (req, res) => {
   await AddTicket.create(req.body)
    res.json({"status": "success"})
})
app.post("/view-all-tickets", async(req, res) => {
    const team=await AddTicket.find()
    res.json(team)
})

const AddLounge=mongoose.model("AddLounge",new mongoose.Schema(
    {
        AllocationID: String,
        RegistrationID: String,
        LoungeNumber: String,
        SeatNumber: String,
        CheckinTime: String,
        MeetDuration: String,
        StaffCoordinator: String,
        Remarks: String

    }
))

app.get("/test", (req, res) => {
    res.send("hello")
})

app.post("/add-lounge", async (req, res) => {
   await AddLounge.create(req.body)
    res.json({"status": "success"})
})


app.listen(7500, () => {
    console.log("server started")
})
