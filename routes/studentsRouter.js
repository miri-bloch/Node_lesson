const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentsController');

router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudent);
router.post('/', studentController.createNewStudent);
router.put('/:id', studentController.updateExistingStudent);
router.delete('/:id', studentController.removeStudent);

module.exports = router;