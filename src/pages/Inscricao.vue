<template>
  <q-page>
    <iframe width=100% id='inscricao' src="https://www.pallua.com.br/captacao/projeto/evento_despertar_2019"></iframe>
  </q-page>

</template>

<script>
  export default {
    name: 'Inscricao',
    data() {
      return {}
    },
    mounted() {
      var b = window.innerHeight;
      document.getElementById('inscricao').style.height = b - 87 + 'px'
    },
  }
</script>