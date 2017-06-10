const Sequelize = require('sequelize');

const data = new Sequelize({
    database: 'DEMONODE',
    username: 'postgres',
    password: 'sa',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
});

//test connection
data
    .authenticate()
    .then(() => { console.log('connected') })
    .catch(err => { console.log(err + '') })


