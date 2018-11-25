<template>
  <article>
    <h1>Adicionar Categoria</h1>
    <form id="form">
        <div>
            <label>Nome</label>
            <div class="input-wrapper">
                <input v-model="categoria" value="categoria.nome">
            </div>
        </div>
        <div>
            <label>Descrição</label>
            <div class="input-wrapper">
                <input v-model="categoria" value="categoria.descricao">
            </div>
        </div>
        <div class="button">
            <button type="button">Enviar</button>
        </div>
    </form>
  </article>
</template>

<script>
export default {
  name: 'Cadastro',
  data () {
    return {
      categoria: {}
    }
  }
}
</script>

<style scoped>

</style>
