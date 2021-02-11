const express = require('express');
const wardController = require('../controllers/ward');
const router = express.Router();

router.get('/', wardController.getWards);
router.get('/:id', wardController.getWardById);
router.get('/?patientId=:id', wardController.getWardsByPatientId);

export {};
module.exports = router;
