const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wardSchema = new Schema({
   number: {
       type: Number,
       required: true
   },
   floor: {
       type: Number,
       required: true
   }
});

export {};
module.exports = mongoose.model('wards', wardSchema);
