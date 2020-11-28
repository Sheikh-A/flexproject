const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const gibliRouter = require('../studiogibli/gibli-router.js');
const countryRouter = require('../countries/countries-router.js');
const flexRouter = require('../flex/flex-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('tiny'));
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, gibliRouter);
server.use('/api/countries', authenticate, countryRouter);
server.use('/api/flex', flexRouter);
//server.use('/api/clients', authenticate, shippingRouter);


module.exports = server;
