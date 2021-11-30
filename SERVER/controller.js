require('dotenv').config()

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
    getAppAnswers: (req, res) =>{
        // sequelize
        // .query(
        //     `INSERT into cc_applications(fullname, email, phone_number, nameOfCat, hadCatB4, explanation)
        //     values('Emily Simpn', 'emilousiL@gmail.com', '225-201-8638', 'George', 'No', 'I love cats so much');`
        // )
        console.log(req.body)
        // .then((dbRes) => res.status(200).send(dbRes[0]))
        // .catch((err) => console.log(err));
    }
}
