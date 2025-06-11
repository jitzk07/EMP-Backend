const express = require('express');
const cors = require('cors');

const app = express();
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');

// ✅ CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://emp-msk07.netlify.app" 
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma"
    ],
    credentials: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);

module.exports = app;
