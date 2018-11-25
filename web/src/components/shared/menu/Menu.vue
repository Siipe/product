<template>
  <nav>
    <ul>
      <router-link tag="li" v-for="link of nav" :key="link.name" :to="{name: link.name}">
        <a>{{ link.text }}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    nav: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
