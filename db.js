const { Sequelize } = require('sequelize')
const { testConnection, closeConnection } = require('./connectDB')

const sequelize = new Sequelize('userdb', 'master_vk', 'admin123', {

    host: "localhost",
    dialect: 'postgres'
})




testConnection();

// setTimeout(() => {

//     closeConnection();
// }, 2000);

// const User = sequelize.define('User', {
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING
// }, {
//     tableName: 'Users',
//     timestamps: true,
// });

// const insertUser = async () => {

// }