const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection with Connection Pooling
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10, // Optimized connection pool
})
    .then(() => console.log('✅ MongoDB Connected'))
    .catch((err) => {
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1);
    });

// Define Subscription Schema
const subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Invalid email format'],
        lowercase: true,
        trim: true,
    },
    subscribedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Routes
const router = express.Router();

// Health Check
router.get('/', (req, res) => res.send('✅ API is running'));

// Subscribe Route
router.post('/api/subscribe', async (req, res, next) => {
    try {
        const email = req.body.email?.toLowerCase().trim();
        if (!email) return res.status(400).json({ message: 'Email is required' });

        const existingSubscription = await Subscription.findOne({ email });
        if (existingSubscription) return res.status(409).json({ message: 'Email is already subscribed' });

        await Subscription.create({ email });
        res.status(201).json({ message: '🎉 Subscription successful' });

    } catch (err) {
        next(err);
    }
});

// Get All Subscriptions
router.get('/api/subscriptions', async (_, res, next) => {
    try {
        const subscriptions = await Subscription.find().select('-__v'); // Exclude `__v` field
        res.status(200).json(subscriptions);
    } catch (err) {
        next(err);
    }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('❌ Server Error:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Apply Routes
app.use(router);

// Start Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

// Graceful Shutdown
process.on('SIGINT', async () => {
    console.log('🛑 Shutting down gracefully...');
    await mongoose.connection.close();
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});
