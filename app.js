const express = require('express');
const app = express();
const PORT = 3000;

// ייבוא הנתבים המודולריים
const coursesRouter = require('./routes/coursesRouter');
const studentsRouter = require('./routes/studentsRouter');
const enrollmentsRouter = require('./routes/enrollmentsRouter');

// Middleware גלובלי לפענוח JSON
app.use(express.json());

// נתיב ראשי לבדיקה
app.get('/', (req, res) => {
    res.json({
        message: 'השרת עובד!',
        description: 'מערכת לניהול קורסים ותלמידים'
    });
});

// חיבור הנתבים השונים למערכת
app.use('/courses', coursesRouter);
app.use('/students', studentsRouter);
app.use('/enrollments', enrollmentsRouter);

// טיפול בנתיב לא קיים (404)
app.use((req, res) => {
    res.status(404).json({ error: 'הנתיב לא נמצא' });
});

// טיפול בשגיאות שרת פנימיות
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'שגיאת שרת פנימית' });
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`השרת רץ על http://localhost:${PORT}`);
});



import express from 'express';
import authMiddleware from './middlewares/auth.js';
import courseRoutes from './routes/courses.routes.js';

const app = express();

app.use(express.json());

// הפעלת ה-Middleware על כל הקריאות לשרת
app.use(authMiddleware);

app.use('/courses', courseRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});