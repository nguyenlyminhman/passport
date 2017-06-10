const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'DEMONODE',
    username: 'postgres',
    password: 'sa',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    dialectOptions: {
        ssl: false
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

db.authenticate()
    .then(() => { console.log('OK') })
    .catch(err => { console.log(err + '') })