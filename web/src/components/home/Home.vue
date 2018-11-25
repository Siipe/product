<template>
  <div>
    <article>
      <h1>Bem vindo ao Megafone!</h1>
      <footer>Trabalhe bem. Reivindique seus direitos. Reclame se necessário!</footer>
      <p>Seu ambiente de trabalho é confortável? Ele atende às suas expectativas? Você tem acesso direto aos recursos que ele te oferece? Comumente estamos lidando com questões chatas no trabalho. Dependendo da situação, um computador lento, bem como más condições posturais, podem tornar seu dia-a-dia um caos. Este sistema é inteiramente para você! Aqui você tem a chance de fazer reclamações sobre tais situações. Aproveite!</p>
    </article>
    <div class="interval"></div>
    <article>
    <div class="images">
        <div><img src="@/assets/img/slow.png" /></div>
        <span>Computador lento?</span>
    </div>
    <div class="images">
        <div><img src="@/assets/img/heat.png" /></div>
        <span>Ar condicionado quebrado?</span>
    </div>
    <div class="images">
        <div><img src="@/assets/img/coffee.png" /></div>
        <span>Máquina de café quebrada?</span>
    </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<style scoped>
.images {float:left; width:30%}
.images span {display:block; margin-top:10px; color:#888; text-transform:uppercase; font-weight:bold}
.images div {margin-right:5%; background:#F1F1F1}
.images img {width:90%; height:auto; margin:0 1.5%; opacity:.77}
</style>
