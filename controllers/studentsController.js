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

module.exports = {
    getStudents,
    getStudent,
    createNewStudent,
    updateExistingStudent,
    removeStudent
};