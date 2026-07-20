const express = require('express');
const app = express();
const PORT = 3000;

const courses = require('./data/courses');
const students = require('./data/students');
const enrollments = require('./data/enrollments');


app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: 'השרת עובד!',
        description: 'מערכת לניהול קורסים ותלמידים'
    });
});

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.get('/students', (req, res) => {
    res.json(students);
});




app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(c => c.id === id);

    if (!course) {
        return res.status(404).json({ error: 'הקורס לא נמצא' });
    }

    res.json(course);
});



app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ error: 'התלמיד לא נמצא' });
    }

    res.json(student);
});




//  קורס חדש
app.post('/courses', (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ error: 'חובה לספק name ו-description' });
    }

    const newId = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;

    const newCourse = { id: newId, name, description };
    courses.push(newCourse);

    res.status(201).json(newCourse);
});


// עדכון קורס קיים
app.put('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(c => c.id === id);

    if (!course) {
        return res.status(404).json({ error: 'הקורס לא נמצא' });
    }

    const { name, description } = req.body;

    if (name !== undefined) course.name = name;
    if (description !== undefined) course.description = description;

    res.json(course);
});

// מחיקת קורס
app.delete('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = courses.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'הקורס לא נמצא' });
    }

    const deleted = courses.splice(index, 1)[0];
    res.json(deleted);
});


// יצירת תלמיד חדש
app.post('/students', (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'חובה לספק name ו-email' });
    }

    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;

    const newStudent = { id: newId, name, email, phone: phone || '' };
    students.push(newStudent);

    res.status(201).json(newStudent);
});

// עדכון תלמיד
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ error: 'התלמיד לא נמצא' });
    }

    const { name, email, phone } = req.body;

    if (name !== undefined) student.name = name;
    if (email !== undefined) student.email = email;
    if (phone !== undefined) student.phone = phone;

    res.json(student);
});

// מחיקת תלמיד
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'התלמיד לא נמצא' });
    }

    const deleted = students.splice(index, 1)[0];
    res.json(deleted);
});




app.get('/enrollments', (req, res) => {
    res.json(enrollments);
});


//החזרת המידע לפי ID
app.get('/enrollments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const enrollment = enrollments.find(e => e.id === id);

    if (!enrollment) {
        return res.status(404).json({ error: 'הרישום לא נמצא' });
    }

    res.json(enrollment);
});



app.post('/enrollments', (req, res) => {
    const { studentId, courseId } = req.body;

    if (!studentId || !courseId) {
        return res.status(400).json({ error: 'חובה לספק studentId ו-courseId' });
    }

    const newId = enrollments.length > 0 ? enrollments[enrollments.length - 1].id + 1 : 1;

    const newEnrollment = { id: newId, studentId, courseId };
    enrollments.push(newEnrollment);

    res.status(201).json(newEnrollment);
});


//תלמיד שעבר קורס
app.put('/enrollments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const enrollment = enrollments.find(e => e.id === id);

    if (!enrollment) {
        return res.status(404).json({ error: 'הרישום לא נמצא' });
    }

    const { studentId, courseId } = req.body;

    if (studentId !== undefined) enrollment.studentId = studentId;
    if (courseId !== undefined) enrollment.courseId = courseId;

    res.json(enrollment);
});


//מחיקת תלמיד מקורס
app.delete('/enrollments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = enrollments.findIndex(e => e.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'הרישום לא נמצא' });
    }

    const deleted = enrollments.splice(index, 1)[0];
    res.json(deleted);
});




// --- טיפול בנתיב לא קיים (404) ---
app.use((req, res) => {
    res.status(404).json({ error: 'הנתיב לא נמצא' });
});

// --- טיפול בשגיאות שרת ---
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'שגיאת שרת פנימית' });
});

app.listen(PORT, () => {
    console.log(`השרת רץ על http://localhost:${PORT}`);
});

