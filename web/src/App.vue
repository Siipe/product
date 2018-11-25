<template>
  <div>
    <header>
      <div id="top-header">
          <h1>Megafone</h1>
          <img src="./assets/img/megafone.png" />
      </div>
      <navigation :nav="nav"></navigation>
    </header>
    <div id="main-content">
      <div id="content">
        <router-view/>
      </div>
    </div>
    <footer id="footer">
      <div>
          <p>
              Sistema Online de Reclamações<br/>
              Siipe {{new Date().getFullYear()}} - &copy; Todos os direitos reservados
          </p>
          <h1>Megafone</h1>
          <img src="./assets/img/megafone-footer.png" />
      </div>
    </footer>
  </div>
</template>

<script>
import routes from './routes'
import Menu from './components/shared/menu/Menu'

export default {
  name: 'App',
  data () {
    const nav = routes.filter(route => route.text)
    return {
      nav
    }
  },
  components: {
    navigation: Menu
  }
}
</script>

<style>
@import './assets/style/reset.css';
@import './assets/style/style.css';
</style>
