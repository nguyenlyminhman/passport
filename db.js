const sequelize = require('sequelize');
//ready to config
const db = new sequelize({
    database: 'DEMONODE',
    username: 'postgres',
    password: 'sa',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    dialectOptions: {
        ssl: false
    },
    define: {
        freezeTableName: true
    }
});
//test connection
db.authenticate()
    .then(() => { console.log('OK') })
//init model
const User = db.define('user', {
    firstName: { type: sequelize.STRING },
    lastName: { type: sequelize.STRING }
});

// insert one record to database
// force: true will drop the table if it already exists
//******************************************************/
// User.sync({ force: true }).then(() => {
//     // Table created
//     return User.create({
//          firstName: 'Naruto',
//          lastName: 'Hancock'
//     });
// });
//******************************************************/
//insert many (array) record to database
//******************************************************/
// User.bulkCreate([
//     {
//         firstName: 'Naruto',
//         lastName: 'Hinata'
//     }, {
//         firstName: 'Luffy',
//         lastName: 'Hancock'
//     }, {
//         firstName: 'Zoro',
//         lastName: 'Tashigi'
//     }
// ])
//select all record and print to console screen
// .then(() => { return User.findAll() })
// .then(us => {console.log(us)})
//******************************************************/
// update record
//******************************************************/
// User.update(
//     //value to update at column
//     { lastName: 'ok man' },
//     //condition
//     { where: { id: 9 } }
// );
//******************************************************/
//Delete records
//******************************************************/
// User.destroy(
//     { where: { id: [4, 5, 6, 7, 8] } }
// );
