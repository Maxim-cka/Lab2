import {Request, Response} from 'express';

const errorHandler = require('../utils/errorHandler');
const Patient = require('../models/Patient');
const PatientWardMap = require('../models/PatientWardMap');

module.exports.getPatients = async (req: Request, res: Response) => {
    try {
        const patients = await Patient.find();
        res.status(200).send(patients);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getPatientById = async (req: Request, res: Response) => {
    const patientId = req.params.id;
    try {
        const patient = await Patient.findById({ _id: patientId });
        res.status(200).send(patient);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getPatientsByWardId = async (req: Request, res: Response) => {
    const wardId = req.params.id;
    try {
        const patientWardMappings = await PatientWardMap.find({ ward: wardId });
        const patientIds = patientWardMappings.map((mapping: any) => mapping.patient);
        const patients = await Patient.find({_id: patientIds});
        res.status(200).send(patients);
    } catch (e) {
        errorHandler(res, 404);
    }
};
