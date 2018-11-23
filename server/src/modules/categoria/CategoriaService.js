import CategoriaModel from './categoria.model';

export default class CategoriaService {
    constructor() {
        this._model = new CategoriaModel();
    }

    listar () {
        return this._model.fetchAll();
    }

    buscarPorId (id) {
        return this._model.where({categoria_id: id}).fetch();
    }
}