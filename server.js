const express = require('express');
const userRoutes = require('./Routes/userRoutes');
const dotenv = require('dotenv').config();
const app = express();

app.use(express.json());
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

