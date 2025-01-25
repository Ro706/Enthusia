const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// Initialize express app
const app = express();

// Middleware
app.use(express.json()); // Replace body-parser with built-in express JSON parser
app.use(cors());
require('dotenv').config();
// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI; 
mongoose.connect(mongoURI, {
    // Remove deprecated options
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the schema and model
const subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
        lowercase: true, // Normalize email
        trim: true, // Remove whitespace
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Define routes
app.get('/', (req, res) => {
    res.send('API is running');
});

// Subscribe route
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if the email already exists
        const existingSubscription = await Subscription.findOne({ email: email.toLowerCase().trim() });
        if (existingSubscription) {
            return res.status(400).json({ message: 'Email is already subscribed' });
        }

        // Save the new subscription
        const newSubscription = new Subscription({ email });
        await newSubscription.save();

        res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all subscriptions (optional, for debugging/admin purposes)
app.get('/api/subscriptions', async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json(subscriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});