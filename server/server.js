const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: './config.env' })

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
