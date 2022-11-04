const express = require('express');
const { Pool } = require('pg')
require('dotenv').config();

const port = 3000;

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
})

const app = express();

app.use(express.json());

app.get('/', async(res, req) => {console.log('Hello World!')});

app.get('/data_user', (req, res) => {
    try {
        
    } catch (error) {
        return res.status(400).send(error)
    }
})

app.listen(port, () => console.log(`Server rounning in port ${port}`));