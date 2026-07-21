const studentService = require('../services/studentsService');

const getStudents = (req, res) => {
    res.json(studentService.getAllStudents());
};

const getStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const student = studentService.getStudentById(id);
    if (!student) {
        return res.status(404).json({ error: 'התלמיד לא נמצא' });
    }
    res.json(student);
};

const createNewStudent = (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'חובה לספק name ו-email' });
    }
    const newStudent = studentService.createStudent(name, email, phone);
    res.status(201).json(newStudent);
};

const updateExistingStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, phone } = req.body;
    const updated = studentService.updateStudent(id, name, email, phone);
    if (!updated) {
        return res.status(404).json({ error: 'התלמיד לא נמצא' });
    }
    res.json(updated);
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = studentService.deleteStudent(id);
    if (!deleted) {
        return res.status(404).json({ error: 'התלמיד לא נמצא' });
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
    getStudents,
    getStudent,
    createNewStudent,
    updateExistingStudent,
    removeStudent
};