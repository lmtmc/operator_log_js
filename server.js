import Express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = new Express();
app.use(cors());
app.use(Express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//connect to a database
mongoose.connect("mongodb://localhost:27017/mydb")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Error connecting to MongoDB", err));

const Schema = new mongoose.Schema(
    {
        operatorName: String,
        date: String,
        startTime: String,
        endTime: String,
        cancelStart: String,
        cancelEnd: String,
        cancelReason: String,
        lostStart: String,
        lostEnd: String,
        lostReason: String,
        instrument1: String,
        instrument2: String,
        },
    
);

const FormEntry = mongoose.model("FormEntry", Schema);

//create an endpoint to save data
app.post("/submit-form", async (req, res) => {
    const formEntry = new FormEntry(req.body);
    try {
        await formEntry.save();
        res.status(201).send(formEntry);
    } catch (error){
        console.log(error);
        res.status(500).send("Error submitting form");
    }
});

// endpoint to get data
app.get("/get-form-data", async (req, res) => {
    try {
        const entries = await FormEntry.find();
        res.json(entries);
    } catch (error) {
        res.status(500).send("Error getting form");
    }
}
);

