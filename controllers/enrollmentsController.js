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

module.exports = {
    getEnrollments,
    getEnrollment,
    createNewEnrollment,
    updateExistingEnrollment,
    removeEnrollment
};