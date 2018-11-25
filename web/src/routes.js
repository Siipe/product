import Home from '@/components/home/Home'
import ListaCategorias from '@/components/categorias/Lista'
import CadastroCategorias from '@/components/categorias/Cadastro'

export default [
  {
    path: '',
    name: 'home',
    component: Home,
    text: 'Home'
  },
  {
    path: '/categorias',
    name: 'categorias_lista',
    component: ListaCategorias,
    text: 'Categorias'
  },
  {
    path: '/categorias/cadastro',
    name: 'categorias_cadastro',
    component: CadastroCategorias
  },
  {
    path: '/categorias/:id',
    name: 'categorias_find'
  }
]
