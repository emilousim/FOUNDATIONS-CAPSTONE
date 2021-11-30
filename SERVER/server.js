require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors")
const { SERVER_PORT } = process.env
const { seed } = require("./seed.js")
const path = require("path");

const {
  getAppAnswers
} = require("./controller.js")

app.use(express.json())
app.use(cors())

app.post("/seed", seed)
app.get("/application", getAppAnswers)


app.listen(SERVER_PORT, () => console.log(`server is popping on port ${SERVER_PORT}`))