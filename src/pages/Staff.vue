<template>
    <q-page>
            <div class="row btns" id="botao">
              <q-btn color="primary" @click="dashboard()" outline icon="dashboard" class="btn col"></q-btn>
              <q-btn color="primary" @click="aovivo()" outline class="btn col-6">ao vivo<q-spinner-rings color="red" :size="30" /></q-btn>
              <q-btn color="primary" @click="chat()" outline icon="forum" class="btn col"></q-btn>
            </div>

    </q-page>
</template>
      
<script>
  export default {
    name: 'Staff',
    methods: {
          aovivo() {
            this.$router.push('/aovivo')
          },
          dashboard() {
            this.$router.push('/index')
          },
          chat() {
            this.$router.push('/chat')
          }, 
        }
  }
</script>
      
<style>
     
  .btn {
    width: 100%;
  }
  .btns {
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40px;
  }
</style>
      