const { request } = require("express");
const express = require("express");

const router = require("./routes.js");

const cors = require("cors");

require("./database");

const app = express();

app.use( express.json() );

app.use( cors() );

app.use( router );

app.listen( 3333 );