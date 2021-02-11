const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
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
   position: {
       type: String,
       required: true
   },
   phoneNumber: {
       type: String,
       required: true
   },
   salary: {
       type: Number,
       required: true
   }
});

export {};
module.exports = mongoose.model('doctors', doctorSchema);
