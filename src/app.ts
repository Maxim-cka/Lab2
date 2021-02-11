// database
const configs = require('./configs');
const mongoose = require('mongoose');
mongoose.connect(configs.mongoURI, configs.mongoData).then(() => console.log('Connected to MongoDB')).catch((err: any) => console.log(err));

// app
const express = require('express');
const app = express();
app.use(express.json());
app.use(require('morgan')('dev'));
app.use(require('cors')());

// routing
const wardRoutes = require('./routes/ward');
const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patient');
app.use('/api/wards', wardRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);

module.exports = app;
