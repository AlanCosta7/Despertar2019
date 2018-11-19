<template>
  <q-page>
    <div class="win mobile-only" id="bg"></div>
    <div class="win2 mobile-hide" id="bgg"></div>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {
      }
    },
    mounted() {
      var b = window.innerHeight;
      document.getElementById('bg').style.height = b - 54 + 'px'
      document.getElementById('bgg').style.height = b - 54 + 'px'
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

  .win {
    background-image: url('../statics/icons/bg1.png');
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center top;
    background-attachment: fixed;
  }

  .win2 {
    background-image: url('../statics/icons/bg0.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center top;
    background-attachment: fixed;
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
</style>