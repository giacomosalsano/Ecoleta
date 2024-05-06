import express from 'express';

const app = express ();

app.get('/users',(request, response) => {
    console.log('Listagem de Usuários');

    response.json(['Hello World!']);
});

app.listen(3333);