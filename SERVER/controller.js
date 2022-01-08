require('dotenv').config()
const { default: axios } = require('axios');
// const { application } = require('express');
const Sequelize = require("sequelize");

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl:{
            rejectUnauthorized: false
        },
    }
});

module.exports = {
    getApplicants: (req, res) =>{
        axios.get('https://foundations-capstone-proj.herokuapp.com/')
        sequelize.query(
            `
            SELECT * FROM cc_applications
            `)
        .then((dbRes) => res.status(200).send(dbRes[0]))
        .catch((err) => console.log(err));
    },
    createApplicants: (req, res) =>{
        const{
            fullname, 
            email, 
            phone_number, 
            nameofcat, 
            Explanation} = req.body

        sequelize
        .query(
            `
        insert into cc_applications(
        fullname, 
        email, 
        phone_number, 
        nameofcat, 
        explanation)

        VALUES (
        '${fullname}',
        '${email}',
        '${phone_number}',
        '${nameofcat}',
        '${Explanation}')
        returning*
        ;`)
        .then(() => res.sendStatus(200))
        .catch((err) => console.log(err));
    }};

