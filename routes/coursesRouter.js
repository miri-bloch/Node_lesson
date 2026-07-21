const express = require('express');
const router = express.Router();
const courseController = require('../controllers/coursesController');

router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourse);
router.post('/', courseController.createNewCourse);
router.put('/:id', courseController.updateExistingCourse);
router.delete('/:id', courseController.removeCourse);

module.exports = router;