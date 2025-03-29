import authService from '../services/login.js';

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password);
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(401).json({ message: 'Invalid credentials' });
    }
}
