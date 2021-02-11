const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
     doctor: {
         ref: 'doctors',
         type: Schema.Types.ObjectId,
         required: true
     },
     firstName: {
         type: String,
         required: true
     },
     surName: {
         type: String,
         required: true
     },
     address: {
         type: String,
         required: true
     },
     description: {
         type: String,
         required: true
     },
     phoneNumber: {
         type: String,
         required: true
     },
     relativesPhoneNumber: {
         type: String,
         required: true
     }
 });

export {};
module.exports = mongoose.model('patients', patientSchema);
