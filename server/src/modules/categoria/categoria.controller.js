import { Router } from 'express';
import Service from './CategoriaService';

const router = Router();

router.get('/', async (request, response) => {
    let service = new Service();
    try {
        let categorias = await service.listar();
        return categorias
            ? response.json(categorias)
            : response.sendStatus(404);
    } catch (err) {
        return response.status(500).send(err);
    }
});

router.get('/:id', async (request, response) => {
    let service = new Service();

    try {
        let categoria = await service.buscarPorId(request.params.id);
        return categoria
            ? response.json(categoria)
            : response.sendStatus(404);
    } catch (err) {
        return response.status(500).send(err);
    }
});

router.post('/', async (request, response) => {
    let service = new Service();
    try {
        let categoria = request.body;
        service.inserir(categoria);
        return response.json(categoria);
    } catch (err) {
        return response.status(500).send(err);
    }
});

export default router;
