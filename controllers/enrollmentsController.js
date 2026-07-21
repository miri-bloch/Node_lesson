const enrollmentService = require('../services/enrollmentsService');

const getEnrollments = (req, res) => {
    res.json(enrollmentService.getAllEnrollments());
};

const getEnrollment = (req, res) => {
    const id = parseInt(req.params.id);
    const enrollment = enrollmentService.getEnrollmentById(id);
    if (!enrollment) {
        return res.status(404).json({ error: 'הרישום לא נמצא' });
    }
    res.json(enrollment);
};

const createNewEnrollment = (req, res) => {
    const { studentId, courseId } = req.body;
    if (!studentId || !courseId) {
        return res.status(400).json({ error: 'חובה לספק studentId ו-courseId' });
    }
    const newEnrollment = enrollmentService.createEnrollment(studentId, courseId);
    res.status(201).json(newEnrollment);
};

const updateExistingEnrollment = (req, res) => {
    const id = parseInt(req.params.id);
    const { studentId, courseId } = req.body;
    const updated = enrollmentService.updateEnrollment(id, studentId, courseId);
    if (!updated) {
        return res.status(404).json({ error: 'הרישום לא נמצא' });
    }
    res.json(updated);
};

const removeEnrollment = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = enrollmentService.deleteEnrollment(id);
    if (!deleted) {
        return res.status(404).json({ error: 'הרישום לא נמצא' });
    }
    res.json(deleted);
};





const courseService = require('../services/coursesService');

const getCourses = (req, res) => {
    res.json(courseService.getAllCourses());
};

const getCourse = (req, res) => {
    const id = parseInt(req.params.id);
    const course = courseService.getCourseById(id);
    if (!course) {
        return res.status(404).json({ error: 'הקורס לא נמצא' });
    }
    res.json(course);
};

const createNewCourse = (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ error: 'חובה לספק name ו-description' });
    }
    const newCourse = courseService.createCourse(name, description);
    res.status(201).json(newCourse);
};

const updateExistingCourse = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    const updated = courseService.updateCourse(id, name, description);
    if (!updated) {
        return res.status(404).json({ error: 'הקורס לא נמצא' });
    }
    res.json(updated);
};

const removeCourse = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = courseService.deleteCourse(id);
    if (!deleted) {
        return res.status(404).json({ error: 'הקורס לא נמצא' });
    }
    res.json(deleted);
};




import courseService from '../services/courses.service.js';

export const getCourseById = (req, res) => {
    const courseId = req.params.id;
    const course = courseService.getCourseById(courseId);

    if (!course) {
        // החזרת סטטוס 404 אם הקורס לא נמצא
        return res.status(404).json({ error: 'Course not found' });
    }

    res.status(200).json(course);
};


module.exports = {
    getCourses,
    getCourse,
    createNewCourse,
    updateExistingCourse,
    removeCourse
};

module.exports = {
    getEnrollments,
    getEnrollment,
    createNewEnrollment,
    updateExistingEnrollment,
    removeEnrollment
};