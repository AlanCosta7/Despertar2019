<template>
    <q-page>
            <iframe src="https://www.google.com/maps/d/embed?mid=1ALnS8JLUtWxOfq5C8E2m15NY-RhCquBt&hl=pt-BR" width="100%" height="400px"></iframe>
        
        <div class="row btns">
            <q-btn color="primary" @click="dashboard()" outline icon="dashboard" class="btn col"></q-btn>
            <q-btn color="primary" @click="aovivo()" outline class="btn col-6">ao vivo<q-spinner-rings color="red" :size="30" /></q-btn>
            <q-btn color="primary" @click="chat()" outline icon="forum" class="btn col"></q-btn>
          </div>
    </q-page>
</template>
  
  <script>
  export default {
    name: 'Comochegar',
    mounted() {
      this.$store.dispatch('carregarUsuario') 

    },
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
  