const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// API untuk mendapatkan catatan
app.get('/api/notes', (req, res) => {
    fs.readFile('catatan.json', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.json(JSON.parse(data));
    });
});

// API untuk menyimpan catatan
app.post('/api/notes', (req, res) => {
    const notes = req.body;
    fs.writeFile('catatan.json', JSON.stringify(notes, null, 2), (err) => {
        if (err) {
            return res.status(500).send('Error writing file');
        }
        res.send('Catatan berhasil disimpan');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});