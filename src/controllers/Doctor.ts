import {Request, Response} from 'express';

const errorHandler = require('../utils/errorHandler');
const Doctor = require('../models/Doctor');

module.exports.getDoctors = async (req: Request, res: Response) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).send(doctors);
    } catch (e) {
        errorHandler(res, 404);
    }
};

module.exports.getDoctorById = async (req: Request, res: Response) => {
    const doctorId = req.params.id;
    try {
        const doctor = await Doctor.findById({ _id: doctorId });
        res.status(200).send(doctor);
    } catch (e) {
        errorHandler(res, 404);
    }
};
