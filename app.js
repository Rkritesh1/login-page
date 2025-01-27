const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.get('/forgot', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'forgot.html'));
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        console.error('Error: Missing email or password');
        return res.status(400).send('Error: Missing email or password');
    }

    console.log('Form Submitted:', { email, password });
    res.send('Login successful');
});


app.post('/forgot', (req, res) => {
    const { email } = req.body;

    if (!email) {
        console.error('Error: Missing email');
        return res.status(400).send('Error: Missing email');
    }

    console.log('Password reset request for:', email);
    res.send('Password reset link sent to your email');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
