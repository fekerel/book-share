require('dotenv').config();

const express = require('express');
const cors = require('cors');
const startNgrok = require('./updateBackendUrl');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from' + PORT + 'port!');
});

app.get('/api/start', (req, res) => {
    res.json({ message: "Kitaplar ekranına yönlendiriliyorsunuz" });
});

// Sunucuyu başlatma ve Ngrok bağlantısını başlatma
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
    startNgrok();
});
