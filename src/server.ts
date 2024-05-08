import express from 'express';

const app = express ();

app.use(express.json());

app.get('/users',(request, response) => {
    console.log('Listagem de Usuários');

    response.json(['Hello World! How are you?']);
});

app.listen(3333);