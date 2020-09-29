const { request } = require("express");
const Sequelize = require("sequelize");

const db_config = require("../config/database.js");
const User = require("../models/User.js");
const Work = require("../models/Work.js");

const connection = new Sequelize( db_config );

User.init( connection );
Work.init( connection );

User.associate( connection.models );
Work.associate( connection.models );

module.exports = connection