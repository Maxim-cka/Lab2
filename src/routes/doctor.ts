const express = require('express');
const doctorController = require('../controllers/doctor');
const router = express.Router();

router.get('/', doctorController.getDoctors);
router.get('/:id', doctorController.getDoctorById);

export {};
module.exports = router;
