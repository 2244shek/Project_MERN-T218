const express = require('express');
const router = express.Router();
const LeaveForm = require('../models/leaveModel')

// Handle form submission
router.post('/submitform', async (req, res) => {
    try {
        const formData = req.body;
        // Save the form data to the database
        const newLeaveForm = new LeaveForm(formData);
        await newLeaveForm.save();

        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Log forms in the console for debugging
router.get('/getforms', async (req, res) => {
    try {
        const forms = await LeaveForm.find();
        console.log('Forms:', forms);
        res.json(forms);
    } catch (error) {
        console.error('Error fetching forms:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Define a route for the root endpoint
router.get('/', (req, res) => {
    res.send('Hello, this is the root endpoint!');
});

module.exports = router