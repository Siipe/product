import Knex from 'knex';
import Bookshelf from 'bookshelf';
import config from '../knexfile';

const knex = Knex(config.development);
const bookshelf = Bookshelf(knex);

bookshelf.plugin('visibility');
bookshelf.plugin('registry');
bookshelf.plugin('pagination');
bookshelf.plugin('processor');
bookshelf.plugin('virtuals');
bookshelf.plugin('bookshelf-cascade-delete');

export {bookshelf, knex};
export default knex;