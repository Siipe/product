import {bookshelf} from '../../db';

const Categoria = bookshelf.Model.extend({
    tableName: 'categoria',
    idAttribute: 'categoria_id'
});

export default Categoria;