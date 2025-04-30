const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

const meuPort = path.join(__dirname, 'public');

app.get('/', (req, res) => {
  res.sendFile(path.join(meuPort, 'index.html'));
});

const style = path.join('public', __dirname, 'styles')

app.get('/', (req, res) => {
    res.sendFile(path.join(style, 'style.css'));
  });

app.listen(port, () => {
  console.log(`Portifólio rodando na porta ${port}`);
});
