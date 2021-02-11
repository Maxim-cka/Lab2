import {Request, Response} from 'express';

const errorHandler = require('../utils/errorHandler');
const Ward = require('../models/Ward');
const PatientWardMap = require('../models/PatientWardMap');

module.exports.getWards = async (req: Request, res: Response) => {
    try {
        const wards = await Ward.find();
        res.status(200).send(wards);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getWardById = async (req: Request, res: Response) => {
    const wardId = req.params.id;
    try {
        const ward = await Ward.findById({ _id: wardId });
        res.status(200).send(ward);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getWardsByPatientId = async (req: Request, res: Response) => {
    const patientId = req.params.id;
    try {
        const patientWardMappings = await PatientWardMap.find({ patient: patientId });
        const wardIds = patientWardMappings.map((mapping: any) => mapping.ward);
        const wards = await Ward.find({_id: wardIds});
        res.status(200).send(wards);
    } catch (e) {
        errorHandler(res, 404);
    }
};
