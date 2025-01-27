const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(console.error);

// Schema and model
const Subscription = mongoose.model('Subscription', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
        lowercase: true,
        trim: true,
    },
    subscribedAt: { type: Date, default: Date.now },
}));

// Routes
app.get('/', (req, res) => res.send('API is running'));

app.post('/api/subscribe', async (req, res) => {
    try {
        const email = req.body.email.toLowerCase().trim();
        if (await Subscription.findOne({ email })) {
            return res.status(400).json({ message: 'Email is already subscribed' });
        }
        await new Subscription({ email }).save();
        res.status(201).json({ message: 'Subscription successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/subscriptions', async (_, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json(subscriptions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
