import express from 'express';

const routes = express.Router();

routes.get('/',(request, response) => {
    return response.json({ message: 'Hello World! How are you?'});
});

export default routes;