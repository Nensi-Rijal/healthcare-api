const express = require('express');
const cors = require('cors');
const patientRoutes = require('./Routes/patientRoutes');

const app = express();
app.use(cors()); //set rules 
app.use(express.json());

app.use('/api/patients', patientRoutes);

app.listen(3000, () => console.log('server is running on port 3000'));