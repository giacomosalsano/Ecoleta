import express from 'express';
import knex from './database/connection';
import PointsController from './controllers/pointsController';
import { number } from '@hapi/joi';

const routes = express.Router();
const pointsController = new PointsController();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://192.168.0.58:3333/uploads/${item.image}`,
        };
    });

    return response.json({serializedItems, message: 'Hello World! How are you?'});

});

routes.post('/points', pointsController.create);

export default routes;