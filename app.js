const express = require('express');
const app = express();
const PORT = 3000;

const courses = require('./data/courses');
const students = require('./data/students');







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