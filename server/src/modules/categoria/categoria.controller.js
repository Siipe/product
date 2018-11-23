import { Router } from 'express';
import Service from './CategoriaService';

const router = Router();

router.get('/', (request, response) => {
    let service = new Service();
    let categorias = service.listar();
    categorias
        .then(result => response.json(result))
        .catch(err => response.status(500).send(err));
});

router.get('/:id', (request, response) => {
    let service = new Service();
    let categoria = service.buscarPorId(request.params.id);
    categoria
        .then(result => response.json(result))
        .catch(err => response.status(500).send(err));
});

export default router;
