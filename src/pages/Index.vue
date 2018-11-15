<template>
  <q-page>
    <img src="../statics/icons/icon-512x512.png" class="scren" alt="scren">
    <h2 class="text-primary">Seja Bem Vindo(a)!</h2>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {
      }
    },
    methods: {
      principal() {
        this.$router.push('/programacao')
      }

    }
  }    
</script>

<style>
  .scren {
    width: 100%;
  }
  h2{
    text-align: center;
    text-transform: uppercase;
  }
</style>