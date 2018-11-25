import express from 'express';
import api from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(api);

app.listen(3000, () => console.log('Ok, listening...'));
