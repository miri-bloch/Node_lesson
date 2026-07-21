const enrollments = require('../data/enrollments');

const getAllEnrollments = () => enrollments;

const getEnrollmentById = (id) => enrollments.find(e => e.id === id);

const createEnrollment = (studentId, courseId) => {
    const newId = enrollments.length > 0 ? enrollments[enrollments.length - 1].id + 1 : 1;
    const newEnrollment = { id: newId, studentId, courseId };
    enrollments.push(newEnrollment);
    return newEnrollment;
};

const updateEnrollment = (id, studentId, courseId) => {
    const enrollment = getEnrollmentById(id);
    if (!enrollment) return null;
    if (studentId !== undefined) enrollment.studentId = studentId;
    if (courseId !== undefined) enrollment.courseId = courseId;
    return enrollment;
};

const deleteEnrollment = (id) => {
    const index = enrollments.findIndex(e => e.id === id);
    if (index === -1) return null;
    return enrollments.splice(index, 1)[0];
};

module.exports = {
    getAllEnrollments,
    getEnrollmentById,
    createEnrollment,
    updateEnrollment,
    deleteEnrollment
};