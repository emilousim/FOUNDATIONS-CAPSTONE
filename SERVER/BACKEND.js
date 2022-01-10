require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors")
const {SERVER_PORT} = process.env
const {seed} =require('./SEED.js')
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})
// connects DB to backend using the postgreSQL URI defined as CONNECTION_STRING in .env file

const {getApplicants, createApplicants} = require("./FRONTEND.js")
// requiring in our frontend file

app.use(express.json())
// helps program recognize incoming post req as a JSON object 
app.use(cors())
// adds an extra layer of security to our app, selects which origins can access our API. decides whether or not it's safe to send DB responses back

app.post("/seed", seed)
// express (app) handles the POST request and seeds the responds to the request to seed the database with the axios.post function in seed.js

app.post("/adoption", createApplicants)
// handles post request and pushes new applicants to our PGWeb DB
app.get("/adoption", getApplicants)
// Displays all of our submitted applicants as well as our dummy data on our DB

app.listen(SERVER_PORT, () => console.log(`server is running on port ${SERVER_PORT}`))
// runs our server out of the SERVER_PORT defined in .env file




