const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const projectRoutes = require('./routes/projectRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Portfolio Server is Running! 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is purring on port ${PORT}`);
});