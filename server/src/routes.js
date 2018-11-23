import { Router } from 'express';
import categoriaController from './modules/categoria/categoria.controller';

const api = new Router();

api.use('/categorias', categoriaController);

export default api;
