const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentsController');

router.get('/', enrollmentController.getEnrollments);
router.get('/:id', enrollmentController.getEnrollment);
router.post('/', enrollmentController.createNewEnrollment);
router.put('/:id', enrollmentController.updateExistingEnrollment);
router.delete('/:id', enrollmentController.removeEnrollment);

module.exports = router;