import express from 'express';
import api from './routes';

const app = express();

app.use(api);

app.listen(3000, () => console.log('Ok, listening...'));
