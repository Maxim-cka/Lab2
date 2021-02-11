const express = require('express');
const patientController = require('../controllers/patient');
const router = express.Router();

router.get('/', patientController.getPatients);
router.get('/:id', patientController.getPatientById);
router.get('/?wardId=:id', patientController.getPatientsByWardId);

export {};
module.exports = router;
