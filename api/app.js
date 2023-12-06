const express = require('express');
const app = express();
const port = 3000;

const produtos = [
  { id: 1, nome: 'PC Gamer' },
  { id: 2, nome: 'Notebook' },
  { id: 3, nome: 'Monitor' },
  { id: 4, nome: 'Teclado' },
  { id: 5, nome: 'Mouse' },
  { id: 6, nome: 'Headset' },
  { id: 7, nome: 'Impressora' },
  { id: 8, nome: 'SSD' },
  { id: 9, nome: 'Roteador' },
  { id: 10, nome: 'Webcam' }
];

app.get('/', (req, res) => {
  res.send('Bem-vindo à loja de computadores!');
});

app.get('/api/produtos', (req, res) => {
  res.status(200).json({ mensagem: 'Produtos enviados com sucesso', produtos });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
