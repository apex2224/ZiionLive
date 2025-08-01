require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const otpRoutes = require('./routes/otpRoutes');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const authRoutes = require('./routes/authRoutes');
const generalRoutes = require('./routes/generalRoutes');
const chatRoutes = require('./routes/chatRoutes');
const domainRoutes = require('./routes/domainRoutes');
const planRoutes = require("./routes/PlanRoutes");
const errorHandler = require('./middleware/errorMiddleware');
const visitorRoutes = require("./routes/visitorRoutes");
const studentRoutes = require('./routes/studentRoutes');

const app = express();

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: 'sessions'
});

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/', generalRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/domain', domainRoutes);
app.use('/api/otp', otpRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/visitor", visitorRoutes);
app.use('/api', studentRoutes);

// 404 for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use(errorHandler);

module.exports = app;
