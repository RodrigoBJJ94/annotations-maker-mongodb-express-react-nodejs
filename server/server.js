const path = require('path');
require('dotenv').config({ path: './.env' });

const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
require('./db/databaseConfig');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 5000);
