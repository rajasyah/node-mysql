const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "eduwork-v2",
  host: "localhost",
  username: "root",
  password: "root",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database");
  }
})();

module.exports = sequelize;
