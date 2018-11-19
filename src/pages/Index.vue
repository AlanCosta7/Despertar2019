<template>
  <q-page class="scren2">
    <img src="../statics/icons/icon-512x512.png" class="scren mobile-only" alt="scren">
    <h2 class="text-primary mobile-only">Seja Bem Vindo(a)!</h2>
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
  .scren2 {
    background-image: url("../statics/icons/1024X768.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover
  }
  h2{
    text-align: center;
    text-transform: uppercase;
  }
</style>