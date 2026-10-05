const authMiddleware = (req, res, next) => {
    // בדיקת ה-header בשם auth-key
    const authKey = req.headers['auth-key'];

    // אם המפתח חסר או לא שווה למפתח שבמשתנה הסביבה -> 401
    if (!authKey || authKey !== process.env.AUTH_KEY) {
        return res.status(401).json({ error: 'Unauthorized: Invalid or missing auth-key' });
    }

    // אם המפתח תקין -> ממשיכים ל-Controller הבא
    next();
};

module.exports = authMiddleware;
