require("dotenv").config();

module.exports = {
  host: process.env.HOST,
  dialect: "mysql",
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  },
};
