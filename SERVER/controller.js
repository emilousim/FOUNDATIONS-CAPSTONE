require('dotenv').config()
const { default: axios } = require('axios');
// const { application } = require('express');
const Sequelize = require("sequelize");

// const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize("postgres://ioquyjxtplllwl:1b29fb05b5d7964a68f22d5d618a87da9e8b4e1fbde8f3bc1aa7bb6cece81b04@ec2-54-204-128-96.compute-1.amazonaws.com:5432/dacde3md69caob",{
    dialect: "postgres",
    dialectOptions: {
        ssl:{
            rejectUnauthorized: false
        },
    }
});

module.exports = {
    getApplicants: (req, res) =>{
        axios.get('http://localhost:5500/adoption')
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

