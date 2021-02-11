const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientWardMap = new Schema({
    actor: {
        ref: 'wards',
        type: Schema.Types.ObjectId,
        required: true
    },
    concert: {
        ref: 'patients',
        type: Schema.Types.ObjectId,
        required: true
    }
});

export {};
module.exports = mongoose.model('patient_ward_map', patientWardMap);
