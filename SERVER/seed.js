require('dotenv').config()

const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {rejectUnauthorized: false
    }
}
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`

        drop table if exists cc_applications;

        create table cc_applications (
            application_id serial primary key, 
            fullname varchar(100),
            email varchar(100), 
            phone_number varchar(100), 
            nameOfCat varchar(50),
            hadCatB4 varchar(5),
            explanation varchar(350)
        );

        insert into cc_applications (fullname, email, phone_number, nameOfCat, hadCatB4, explanation)
        values ('Emily Simpson', 'emilousim@gmail.com', '225-301-8638', 'Mia', 'Yes', 'I love cats soooo much');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}


