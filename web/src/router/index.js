import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import ListaCategorias from '@/components/categorias/Lista'
import CadastroCategorias from '@/components/categorias/Cadastro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/categorias',
      name: 'categorias_lista',
      component: ListaCategorias
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
  ],
  mode: 'history'
})
