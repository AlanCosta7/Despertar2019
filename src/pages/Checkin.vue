<template>
    <q-page class="flex flex-center">
        <qrcode-vue :value="value"></qrcode-vue>
        <div class="row btns" id="botao">
          <q-btn color="primary" @click="dashboard()" outline icon="dashboard" class="btn col"></q-btn>
          <q-btn color="primary" @click="aovivo()" outline class="btn col-6">ao vivo<q-spinner-rings color="red" :size="30" /></q-btn>
          <q-btn color="primary" @click="chat()" outline icon="forum" class="btn col"></q-btn>
        </div>
    </q-page>
</template>
  
<script>
import QrcodeVue from 'qrcode.vue';
    
  export default {
    name: 'qrcodepage',
    data () {
        return {
            size: 300
        }
  },
  components: {
    QrcodeVue
  },
    mounted() {
        this.$store.dispatch('carregarUsuario') 

    },
    computed: {
            value () {
                return this.user.uid
            },
            loading () {
                return this.$store.getters.loading
            },
            error () {
                return this.$store.getters.error
            },
            usuario () {
                return this.$store.getters.usuario
            },
            user() {
                return this.$store.getters.user      
            }
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
  