// middleware/auth.js
const authMiddleware = (req, res, next) => {
    const authKey = req.headers['auth-key'];
    
    // בדיקה האם המפתח קיים ותקין (לדוגמה: my-secret-key)
    if (!authKey || authKey !== 'my-secret-key') {
        return res.status(401).json({ error: 'Unauthorized: Invalid or missing auth-key' });
    }
    
    console.log('Authentication successful for request:', req.method, req.url);
    next(); // המשך לפונקציה הבאה (Controller)
};

export default authMiddleware;