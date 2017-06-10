const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'DEMONODE',
    username: 'postgres',
    password: 'sa',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
});

//test connection
db
    .authenticate()
    .then(() => { console.log('connected') })
    .catch(err => { console.log(err + '') })

const dt = db.define('data',
    {
        name: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        realprice: Sequelize.REAL,
        doubleprice: Sequelize.DOUBLE,
        status: Sequelize.BOOLEAN
    },
    {
        //don't have two column in database
        timestamps: false
    }
)

dt.create({
    name: 'naruto',
    phone: 0988888,
    realprice: 12.3,
    doubleprice: 12.2,
    status: true
});