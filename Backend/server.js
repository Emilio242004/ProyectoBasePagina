const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Menu');
});

app.get('/agregar', (req, res) => {
    res.send('Pagina Agregar Especie');
});

app.get('/modificar', (req, res) => {
    res.send('Pagina Modificar Especie');
});

app.get('/visualizar', (req, res) => {
    res.send('Pagina Principal');
});

app.get('/visualizar', (req, res) => {
    res.send('Pagina Principal');
});

app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});
