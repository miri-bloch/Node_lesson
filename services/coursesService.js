const courses = require('../data/courses');

const getAllCourses = () => courses;

const getCourseById = (id) => courses.find(c => c.id === id);

const createCourse = (name, description) => {
    const newId = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
    const newCourse = { id: newId, name, description };
    courses.push(newCourse);
    return newCourse;
};

const updateCourse = (id, name, description) => {
    const course = getCourseById(id);
    if (!course) return null;
    if (name !== undefined) course.name = name;
    if (description !== undefined) course.description = description;
    return course;
};

const deleteCourse = (id) => {
    const index = courses.findIndex(c => c.id === id);
    if (index === -1) return null;
    return courses.splice(index, 1)[0];
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};