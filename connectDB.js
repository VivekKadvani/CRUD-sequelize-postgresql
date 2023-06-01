const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('userdb', 'master_vk', 'admin123', {

    host: "localhost",
    dialect: 'postgres'
})
const closeConnection = async () => {
    console.log("now we are closing connection...");
    await sequelize.close();
    console.log("Connection closed successfully...");
}
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection established successfully...");
    }
    catch (e) {
        console.log("unable to connect database : ", e);
    }
}

module.exports = {
    testConnection,
    closeConnection
}