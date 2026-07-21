const students = require('../data/students');

const getAllStudents = () => students;

const getStudentById = (id) => students.find(s => s.id === id);

const createStudent = (name, email, phone) => {
    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    const newStudent = { id: newId, name, email, phone: phone || '' };
    students.push(newStudent);
    return newStudent;
};

const updateStudent = (id, name, email, phone) => {
    const student = getStudentById(id);
    if (!student) return null;
    if (name !== undefined) student.name = name;
    if (email !== undefined) student.email = email;
    if (phone !== undefined) student.phone = phone;
    return student;
};

const deleteStudent = (id) => {
    const index = students.findIndex(s => s.id === id);
    if (index === -1) return null;
    return students.splice(index, 1)[0];
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};