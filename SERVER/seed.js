require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {rejectUnauthorized: false
        }
    }
});

module.exports = {
seed: (req, res) => {
    sequelize.query(`
    drop table if exists cc_applications;

    create table cc_applications (
        application_id serial primary key, 
        fullname varchar(100),
        email varchar(100), 
        phone_number varchar(100), 
        nameofcat varchar(50),
        explanation varchar(350)
    );

    insert into cc_applications (fullname, email, phone_number, nameofcat, explanation)
    values ('Emily Simpson', 'emilousim@gmail.com', '225-301-8638', 'Mia', 'I love cats soooo much');
    `).then(() => {
        console.log('DB seeded!')
        res.sendStatus(200)
    }).catch(err => console.log('error seeding DB', err))
}};