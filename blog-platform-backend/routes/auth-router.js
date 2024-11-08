// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // Assuming you have a User model
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// // Register Route
// router.post('/register', async (req, res) => {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser  = new User({ username, password: hashedPassword });

//     try {
//         await newUser .save();
//         res.status(201).send('User  registered successfully');
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // Login Route
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });

//     if (user && await bcrypt.compare(password, user.password)) {
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         res.json({ token });
//     } else {
//         res.status(401).send('Invalid credentials');
//     }
// });

// // Middleware to authenticate token
// const authenticateToken = (req, res, next) => {
//     const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };

// // Protected Route Example
// router.get('/profile', authenticateToken, (req, res) => {
//     res.send('This is a protected profile route');
// });

// module.exports = router;