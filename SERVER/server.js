require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors")
// const {SERVER_PORT} = process.env
const {seed} =require('./seed.js')
const Sequelize = require("sequelize");
const SERVER_PORT = process.env.PORT || 5500

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const {getApplicants, createApplicants} = require("./controller.js")

app.use(express.json())
app.use(cors())

app.post("/seed", seed)

app.post("/adoption", createApplicants)
app.get("/adoption", getApplicants)

app.listen(SERVER_PORT, () => console.log(`server is running on port ${SERVER_PORT}`))




