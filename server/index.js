const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const signup = require("./routes/signup")
const signin = require("./routes/signin")
const todos = require("./routes/todos")


require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Server side is running ... !")
})

app.use("/api/signup", signup)
app.use("/api/signin", signin)
app.use("/api/todos", todos)


const port = process.env.PORT || 5000
const uri = process.env.URI;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// connect database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB connection establish...")
    })
    .catch(err => console.log("MongoDB connection failed", err.message))