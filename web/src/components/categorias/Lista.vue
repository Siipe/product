<template>
  <article>
      <h1>{{ msg }}</h1>
      <div class="button">
        <router-link :to="{name: 'categorias_cadastro'}">
          <a>Adicionar</a>
        </router-link>
      </div>
      <section id="basic-list">
        <input @input="filtro = $event.target.value" />
        <ul>
          <router-link tag="li" :to="{name: 'categorias_find', params: {id: categoria.categoria_id}}" v-for="categoria of obterListaFiltrada" :key="categoria.categoria_id">
            <div class="display-item">
              <a>{{ categoria.nome }}</a>
              <footer>asdas</footer>
            </div>
          </router-link>
        </ul>
      </section>
  </article>
</template>

<script>
import Api from '@/service/Api'

export default {
  name: 'Lista',
  data () {
    return {
      msg: 'Categorias',
      categorias: [],
      filtro: ''
    }
  },
  methods: {
    async listar () {
      try {
        let categorias = await Api().get('categorias')
        this.categorias = categorias.data
      } catch (err) {
        alert(err)
      }
    }
  },
  computed: {
    obterListaFiltrada () {
      let filtro = this.filtro.trim()
      if (!filtro) {
        return this.categorias
      }
      let regex = new RegExp(filtro, 'i')
      return this.categorias.filter(categoria => regex.test(categoria.nome))
    }
  },
  async created () {
    this.listar()
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
