import express from "express";
import dotenv from "dotenv";
dotenv.config()
import cors from "cors";

const app = express()
app.use(cors())
const port = process.env.port || 4000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/vishal", (req, res) => {
    res.send("Hello Vishal !!")
})

app.get("/therapy", (req, res) => {
    res.send("Hello Therapy")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
